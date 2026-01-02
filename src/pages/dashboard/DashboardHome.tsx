import { motion } from "framer-motion";
import {
  Sparkles,
  Image,
  Video,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickActions = [
  {
    icon: MessageSquare,
    label: "Chat Agent",
    path: "/dashboard/tools",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Image,
    label: "Generate Image",
    path: "/dashboard/tools/image",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Video,
    label: "Create Video",
    path: "/dashboard/tools/video",
    color: "from-orange-500 to-red-500",
  },
];

const recentGenerations = [
  {
    type: "image",
    prompt: "Futuristic cityscape at sunset",
    time: "2 min ago",
  },
  {
    type: "chat",
    prompt: "Explain quantum computing",
    time: "15 min ago",
  },
  {
    type: "image",
    prompt: "Abstract digital art with neon colors",
    time: "1 hour ago",
  },
  {
    type: "video",
    prompt: "Cinematic ocean waves",
    time: "3 hours ago",
  },
];

const stats = [
  { label: "Generations Today", value: "24", change: "+12%", icon: Sparkles },
  { label: "Credits Used", value: "2,549", change: "51%", icon: Zap },
  { label: "This Week", value: "156", change: "+8%", icon: TrendingUp },
];

const DashboardHome = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto px-3 md:px-6 py-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back! <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            What would you like to create today?
          </p>
        </div>
        <Link to="/dashboard/tools">
          <Button
            variant="hero"
            size="lg"
            className="gap-2 shadow-md px-6 py-3 text-base font-medium transition-transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            New Creation
          </Button>
        </Link>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.label} to={action.path} tabIndex={-1}>
              <div
                className="glass-card rounded-2xl py-7 px-6 h-full hover:shadow-lg transition-all border border-transparent hover:border-primary/50 flex flex-col group cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={action.label}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {action.label}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 flex flex-col h-full shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </span>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span
                  className={`text-base font-medium mb-1 ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : stat.change.startsWith("-")
                      ? "text-red-500"
                      : "text-primary"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Recent Generations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6 shadow max-w-3xl mx-auto"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            Recent Generations
          </h2>
          <Link
            to="/dashboard/feed"
            className="text-sm text-primary hover:underline outline-none focus:underline"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {recentGenerations.map((gen, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-0 py-4 sm:py-3 bg-transparent hover:bg-secondary/40 rounded-xl group transition-colors cursor-pointer focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={gen.prompt}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center 
            ${
              gen.type === "image"
                ? "bg-purple-500/20 text-purple-500"
                : gen.type === "video"
                ? "bg-orange-500/20 text-orange-500"
                : "bg-blue-500/20 text-blue-500"
            } 
            group-hover:scale-105 transition-transform`}
              >
                {gen.type === "image" ? (
                  <Image className="w-5 h-5" />
                ) : gen.type === "video" ? (
                  <Video className="w-5 h-5" />
                ) : (
                  <MessageSquare className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-medium text-foreground truncate">
                  {gen.prompt}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{gen.time}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-2 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
