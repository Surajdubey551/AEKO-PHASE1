import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Wand2,
  Paperclip,
  Settings2,
  Zap,
  Loader2,
  Sparkles,
  ChevronDown,
  Download,
  Share2,
  Copy,
  Play,
  Pause,
  Eye,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const videoTools = [
  { id: "text-to-video", label: "Text to Video", icon: Video, color: "from-orange-500 to-red-500", description: "Generate videos from text" },
  { id: "video-to-video", label: "Video to Video", icon: Wand2, color: "from-yellow-500 to-orange-500", description: "Transform existing videos" },
];

const videoModels = [
  { id: "runway", name: "Runway Gen-2", icon: "🎬", description: "Cinematic quality videos" },
  { id: "pika", name: "Pika Labs", icon: "⚡", description: "Fast generation" },
  { id: "stability", name: "Stable Video", icon: "🎥", description: "Stable and consistent" },
];

// Default preview video - professional placeholder
const DEFAULT_PREVIEW_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// Example generations with prompts and results
const exampleGenerations = [
  {
    id: 1,
    prompt: "Aerial view of a futuristic city with flying vehicles and neon lights",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    model: "Runway Gen-2",
    timestamp: "2 hours ago",
    duration: "10s",
  },
  {
    id: 2,
    prompt: "Time-lapse of clouds moving over a mountain landscape at sunset",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    model: "Pika Labs",
    timestamp: "5 hours ago",
    duration: "15s",
  },
  {
    id: 3,
    prompt: "Underwater coral reef scene with colorful fish swimming",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    model: "Stable Video",
    timestamp: "1 day ago",
    duration: "12s",
  },
  {
    id: 4,
    prompt: "Abstract motion graphics with flowing particles and light trails",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    model: "Runway Gen-2",
    timestamp: "2 days ago",
    duration: "8s",
  },
  {
    id: 5,
    prompt: "Cinematic landscape pan across a misty forest at dawn",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    model: "Pika Labs",
    timestamp: "3 days ago",
    duration: "15s",
  },
  {
    id: 6,
    prompt: "Product showcase animation of a modern watch rotating in 3D",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    model: "Stable Video",
    timestamp: "4 days ago",
    duration: "10s",
  },
];

const VideoToolsPage = () => {
  const [activeTool, setActiveTool] = useState("text-to-video");
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(videoModels[0]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme } = useTheme();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedVideo("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Video Tools</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Create amazing videos with AI-powered generation</p>
        </motion.div>

        {/* Tool Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          {videoTools.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <motion.button
                key={tool.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTool(tool.id)}
                className={`flex flex-col sm:flex-row items-center gap-2 px-4 py-3 rounded-xl transition-all whitespace-nowrap min-w-fit ${
                  isActive
                    ? `bg-gradient-to-r ${tool.color} text-white shadow-lg`
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-left">
                  <span className="text-sm font-medium block">{tool.label}</span>
                  <span className={`text-xs ${isActive ? 'text-white/80' : 'text-muted-foreground'} hidden sm:block`}>{tool.description}</span>
                </div>
              </motion.button>
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
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              {/* Model Selector */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setIsModelOpen(!isModelOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors w-full sm:w-auto"
                  >
                    <span className="text-lg">{selectedModel.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {selectedModel.name}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ml-auto ${isModelOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isModelOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-full sm:w-64 rounded-lg bg-card border border-border shadow-xl z-20"
                      >
                        {videoModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg text-left"
                          >
                            <span className="text-xl">{model.icon}</span>
                            <div>
                              <span className="text-sm font-medium text-foreground block">{model.name}</span>
                              <span className="text-xs text-muted-foreground">{model.description}</span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors w-full sm:w-auto justify-center ${
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
                placeholder="Describe the video you want to create... (Ctrl+Enter to generate)"
                className="w-full h-32 sm:h-40 bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base disabled:opacity-50 transition-all"
              />

              {/* Advanced Settings */}
              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-border/50 mt-4 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs text-muted-foreground mb-1">Duration</label>
                        <select className="w-full px-3 py-2 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                          <option>5 seconds</option>
                          <option>10 seconds</option>
                          <option>15 seconds</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground mb-1">FPS</label>
                        <input
                          type="number"
                          defaultValue={24}
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
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-border/50 mt-4">
                <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
                  <Paperclip className="w-4 h-4" />
                  <span className="text-sm">Attach Video</span>
                </button>

                <Button
                  variant="hero"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                  disabled={isLoading || !prompt.trim()}
                  onClick={handleGenerate}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
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
          <div className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col min-h-[250px] sm:min-h-[400px] lg:min-h-[500px] max-h-[600px]">
            <AnimatePresence mode="wait">
              {generatedVideo ? (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative rounded-xl overflow-hidden mb-4 flex-1 bg-secondary/30 group">
                    <video
                      src={generatedVideo}
                      className="w-full h-full object-cover"
                      controls={false}
                      ref={(video) => {
                        if (video) {
                          video.onplay = () => setIsPlaying(true);
                          video.onpause = () => setIsPlaying(false);
                        }
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <button
                        onClick={(e) => {
                          const video = e.currentTarget.parentElement?.previousElementSibling as HTMLVideoElement;
                          if (video) {
                            if (isPlaying) {
                              video.pause();
                            } else {
                              video.play();
                            }
                          }
                        }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative rounded-xl overflow-hidden mb-4 flex-1 bg-background border-2 border-dashed border-border/50 flex items-center justify-center p-6 sm:p-8">
                    <div className="text-center w-full max-w-md">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                        Ready to Create
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        Enter a prompt and click Generate to see your AI video appear here
                      </p>
                      {prompt && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-secondary/50 border border-border/50 text-left">
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Your Prompt:</p>
                          <p className="text-sm sm:text-base text-foreground leading-relaxed">{prompt}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2" disabled>
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2" disabled>
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" disabled>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Example Generations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Example Generations
              </h3>
            </div>
            <span className="text-sm text-muted-foreground">
              See what others have created
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exampleGenerations.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
                onClick={() => setPrompt(example.prompt)}
              >
                <div className="relative aspect-video overflow-hidden bg-secondary/30">
                  <video
                    src={example.video}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                    {example.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                      {example.prompt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {example.model}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {example.timestamp}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground mb-2 line-clamp-2">
                    {example.prompt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {example.model}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {example.timestamp}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prompt Library */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-4 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wand2 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Prompt Ideas
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Aerial view of a futuristic city",
              "Time-lapse of clouds moving",
              "Underwater coral reef scene",
              "Abstract motion graphics",
              "Cinematic landscape pan",
              "Product showcase animation",
            ].map((idea) => (
              <motion.button
                key={idea}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPrompt(idea)}
                className="px-4 py-2 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {idea}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoToolsPage;
