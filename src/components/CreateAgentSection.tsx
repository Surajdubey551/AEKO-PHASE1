import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Search, 
  ChevronDown, 
  Bot, 
  FileText, 
  Rocket,
  Globe,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CreateAgentSection = () => {
  const [agentDescription, setAgentDescription] = useState("");
  const [agentName, setAgentName] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4 Turbo");
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isModeOpen, setIsModeOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("AI Agent");

  const models = [
    "GPT-4 Turbo",
    "GPT-4",
    "GPT-3.5 Turbo",
    "Claude 3 Opus",
    "Claude 3 Sonnet",
    "Gemini Pro",
  ];

  const modes = [
    "AI Agent",
    "Image to Agent",
    "Text to Agent",
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Create Custom AI Agents with{" "}
            <span className="gradient-text">Multi-Flow Intelligence</span>{" "}
            for Any Use Case
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build intelligent agents tailored to your specific needs
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card/30 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-6 lg:p-8 overflow-hidden group shadow-lg shadow-primary/5">
            {/* Animated Border Gradient - Always Visible */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.4), hsl(var(--primary) / 0.3))',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Shimmer Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['-200% 0', '200% 0'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Inner Background */}
            <div className="absolute inset-[2px] rounded-3xl bg-card/30 backdrop-blur-xl" />
            
            <div className="relative z-10">
            {/* Top Section - Input */}
            <div className="mb-6">
              <textarea
                value={agentDescription}
                onChange={(e) => setAgentDescription(e.target.value)}
                placeholder="Describe agent or use URL"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
              {/* Mode Selector */}
              <DropdownMenu open={isModeOpen} onOpenChange={setIsModeOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 border border-border/50 text-foreground text-sm transition-colors">
                    <Bot className="w-4 h-4" />
                    <span>{selectedMode}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {modes.map((mode) => (
                    <DropdownMenuItem
                      key={mode}
                      onClick={() => {
                        setSelectedMode(mode);
                        setIsModeOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {mode}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Model Selector */}
              <DropdownMenu open={isModelOpen} onOpenChange={setIsModelOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 border border-border/50 text-foreground text-sm transition-colors">
                    <Sparkles className="w-4 h-4" />
                    <span>{selectedModel}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {models.map((model) => (
                    <DropdownMenuItem
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsModelOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {model}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Divider */}
              <div className="h-6 w-px bg-border/50" />

              {/* Web Search Toggle */}
              <button
                onClick={() => setWebSearchEnabled(!webSearchEnabled)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  webSearchEnabled
                    ? "bg-primary/10 border-primary/50 text-primary"
                    : "bg-secondary/50 border-border/50 text-foreground hover:bg-secondary/70"
                }`}
                title="Web Search"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Web Search</span>
              </button>

              {/* Upload File */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 border border-border/50 text-foreground text-sm transition-colors">
                <FileText className="w-4 h-4" />
                <span>Upload File</span>
              </button>

              {/* Agent Name Input */}
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="Agent Name"
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm min-w-[120px]"
              />

              {/* More Options */}
              <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 border border-border/50 text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-lg">...</span>
              </button>

              {/* Credits */}
              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm text-muted-foreground">10 Credits</span>
                
                {/* Deploy Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="gap-2 px-6"
                  disabled={!agentDescription.trim() || !agentName.trim()}
                >
                  <Rocket className="w-4 h-4" />
                  Deploy
                </Button>
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreateAgentSection;

