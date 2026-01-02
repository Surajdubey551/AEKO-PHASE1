import { useState } from "react";
import { motion } from "framer-motion";
import {
  Image,
  ArrowLeftRight,
  Maximize2,
  Paperclip,
  Settings2,
  Zap,
  Loader2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const imageTools = [
  { id: "text-to-image", label: "Text to Image", icon: Image, color: "from-purple-500 to-pink-500" },
  { id: "image-to-image", label: "Image to Image", icon: ArrowLeftRight, color: "from-green-500 to-emerald-500" },
  { id: "upscale", label: "Upscale", icon: Maximize2, color: "from-pink-500 to-rose-500" },
];

const imageModels = [
  { id: "flux", name: "FLUX Pro", icon: "✨" },
  { id: "sdxl", name: "Stable Diffusion XL", icon: "🎨" },
  { id: "dalle", name: "DALL-E 3", icon: "🖼️" },
];

const ImageToolsPage = () => {
  const [activeTool, setActiveTool] = useState("text-to-image");
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(imageModels[0]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      // Handle generate
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">AI TOOLS</h1>
        <p className="text-muted-foreground">Create stunning images with AI</p>
      </motion.div>

      {/* Tool Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-3 overflow-x-auto pb-2"
      >
        {imageTools.map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                isActive
                  ? `bg-gradient-to-r ${tool.color} text-white shadow-lg`
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tool.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Main Tool Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        {/* Left: Input Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-2xl p-6">
            {/* Model Selector */}
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <button
                  onClick={() => setIsModelOpen(!isModelOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span>{selectedModel.icon}</span>
                  <span className="text-sm font-medium text-foreground">
                    {selectedModel.name}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isModelOpen ? 'rotate-180' : ''}`} />
                </button>

                {isModelOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-card border border-border shadow-xl z-20"
                  >
                    {imageModels.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setSelectedModel(model);
                          setIsModelOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-3 hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span>{model.icon}</span>
                        <span className="text-sm text-foreground">{model.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  showAdvanced ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <Settings2 className="w-4 h-4" />
                <span className="text-sm">Advanced</span>
              </button>
            </div>

            {/* Prompt Input */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              placeholder="Describe what you want to create..."
              className="w-full h-40 bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-lg disabled:opacity-50"
            />

            {/* Advanced Settings */}
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="pt-4 border-t border-border/50 mt-4"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Steps</label>
                    <input
                      type="number"
                      defaultValue={30}
                      className="w-full px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Guidance</label>
                    <input
                      type="number"
                      step="0.5"
                      defaultValue={7.5}
                      className="w-full px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Seed</label>
                    <input
                      type="number"
                      defaultValue={-1}
                      className="w-full px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
                <Paperclip className="w-4 h-4" />
                <span className="text-sm">Attach</span>
              </button>

              <Button
                variant="hero"
                size="lg"
                className="gap-2"
                disabled={isLoading || !prompt.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Output Preview */}
        <div className="glass-card rounded-2xl p-6 flex flex-col min-h-[400px] max-h-[600px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Ready to Create
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Enter a prompt and click Generate to see your AI creation appear here
            </p>
          </div>
        </div>
      </motion.div>

      {/* Prompt Library */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Prompt Ideas
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Cyberpunk cityscape at night",
            "Portrait in studio lighting",
            "Abstract digital art",
            "Fantasy landscape",
            "Product mockup render",
            "Anime character design",
          ].map((idea) => (
            <button
              key={idea}
              onClick={() => setPrompt(idea)}
              className="px-4 py-2 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              {idea}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageToolsPage;

