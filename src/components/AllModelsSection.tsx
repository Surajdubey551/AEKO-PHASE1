import { motion } from "framer-motion";
import { Video, Image as ImageIcon, ArrowRight, Sparkles, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllModelsSection = () => {
  const videoModels = [
    "Pollo 2.5",
    "Veo 3",
    "Sora 2",
    "Kling AI",
    "Hailuo AI",
    "PixVerse AI",
    "Runway",
    "Vidu AI",
    "Luma AI",
    "Pika AI",
    "Seedance",
    "Wan AI",
    "Hunyuan",
  ];

  const imageModels = [
    "Nano Banana",
    "Midjourney",
    "Recraft",
    "Ideogram",
    "Stable Diffusion",
    "Flux AI",
    "Seedream",
    "Dall-E",
    "Imagen",
    "GPT-4o",
    "Flux Kontext",
    "Qwen Image",
    "Wan AI",
  ];

  return (
    <section id="models" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">13+ Video Models • 13+ Image Models</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">
            ALL the Great AI Models in{" "}
            <span className="gradient-text">ONE Place!</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access the most powerful AI models for video and image generation all in one unified platform. 
            No switching between services—everything you need is here.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* AI Video Generators Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Icon Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    AI Video Generators
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>13 premium models available</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                With AEKO AI video generator, you can tap into our flagship AEKO 1.6 video model and all top-tier video models in the industry.
              </p>

              {/* Model List - Badge Style */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {videoModels.map((model, index) => (
                    <motion.div
                      key={model}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group/item"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-foreground">{model}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <Link to="/dashboard/tools/video">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group/btn gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Try AI Video Generator</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* AI Image Generators Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Icon Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    AI Image Generators
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>13 premium models available</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                AEKO AI image generator allows you to choose from a selection of leading image models for stunning visual creations.
              </p>

              {/* Model List - Badge Style */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {imageModels.map((model, index) => (
                    <motion.div
                      key={model}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default group/item"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-foreground">{model}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <Link to="/dashboard/tools/image">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group/btn gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Try AI Image Generator</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Total Models", value: "26+", icon: Sparkles },
            { label: "Video Models", value: "13", icon: Video },
            { label: "Image Models", value: "13", icon: ImageIcon },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllModelsSection;






