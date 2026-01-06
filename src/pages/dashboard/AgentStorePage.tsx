import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  MoreVertical,
  ExternalLink,
  Code,
  Bot,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: "UNPUBLISHED" | "PUBLISHED";
  pricing: "FREE" | "PAID";
  icon?: string;
  createdAt: Date;
}

const AgentStorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [agents] = useState<Agent[]>([
    {
      id: "1",
      name: "Cnergee",
      description: "Cnergee Technologies provides integrated network security products—SD-WAN, NGFW, Managed WiFi, and Endpoint Security—built in...",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "Instagram",
      description: "No description available",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "3",
      name: "Yamaha Motor India",
      description: "Presenting the new & best in the class - ✓ Mileage Scooters ✓ Performance Motorcycles ✓ Superbikes from Yamaha....",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "4",
      name: "Hi Focus",
      description: "Explore advanced CCTV solutions from the most reliable and trusted CCTV camera brand in India, Hi Focus. Shop for HD CCTV Cameras, IP, PTZ...",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "5",
      name: "Aavas Financiers Ltd",
      description: "Aavas Financiers Limited - a leading housing loan finance company in India offering various types of home loans at attractive interest rates...",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "6",
      name: "Cloud",
      description: "This agent helps the user to raise support requests on the Scogo Cloud Platform",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "7",
      name: "Globalnet",
      description: "As a market leader in Myanmar, our suite of ICT Solutions is backed up by an extensive data network and infrastructure that spans key...",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
    {
      id: "8",
      name: "IIT Roorkee",
      description: "IIT Roorkee primarily functions as a leading technical research university, offering undergraduate, postgraduate, and doctoral...",
      status: "UNPUBLISHED",
      pricing: "FREE",
      createdAt: new Date(),
    },
  ]);

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background px-2 py-6 md:px-8 lg:py-10 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground drop-shadow-sm">Agent Store</h1>
          </div>
          <Button
            variant="hero"
            size="lg"
            className="gap-2 shadow-md"
            onClick={() => {
              toast.info("Create Agent feature coming soon!");
            }}
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Create Agent</span>
            <span className="inline sm:hidden">New</span>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Agents..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 shadow-sm"
          />
        </div>
      </div>

      {/* Agent Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-card border border-border/60 rounded-xl p-5 flex flex-col shadow group hover:border-primary/70 hover:shadow-lg transition-all min-h-[330px]"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate max-w-[120px] md:max-w-[200px]">
                      {agent.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary/70 text-muted-foreground tracking-wide uppercase font-medium">
                        {agent.status}
                      </span>
                      <span className="text-xs text-muted-foreground opacity-80">|</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-600 uppercase font-semibold tracking-wide">
                        {agent.pricing}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[140px]">
                    <DropdownMenuItem onClick={() => toast.info("Edit agent")}>
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info("Delete agent")}>
                      <span>Delete</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info("Duplicate agent")}>
                      <span>Duplicate</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-3">
                {agent.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-2">
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    title="Share"
                    aria-label="Share"
                    onClick={() => toast.info("Share agent")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    title="View Code"
                    aria-label="View Code"
                    onClick={() => toast.info("View code")}
                  >
                    <Code className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="px-4 text-sm shadow"
                  onClick={() => {
                    toast.info(`Interacting with ${agent.name}`);
                  }}
                >
                  Interact
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-20 w-full flex flex-col items-center justify-center">
            <Bot className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-medium">No agents found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentStorePage;
