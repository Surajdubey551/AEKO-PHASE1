import { useState, useEffect } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Compass,
  User,
  Wrench,
  HelpCircle,
  Menu,
  X,
  LogOut,
  CreditCard,
  ChevronDown,
  MessageSquare,
  Image as ImageIcon,
  Video,
  Sun,
  Moon,
  Store,
} from "lucide-react";
import logoDarkBg from "@/assets/dark-bg.png";
import logoWhiteBg from "@/assets/white-bg.png";
import { Button } from "@/components/ui/button";
import { authAPI } from "@/lib/api";
import { toast } from "sonner";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { path: "/dashboard", icon: Home, label: "Home" },
  { path: "/dashboard/feed", icon: Compass, label: "Feed" },
  { path: "/dashboard/account", icon: User, label: "Account" },
  { path: "/dashboard/support", icon: HelpCircle, label: "Support" },
  // AI Tools will be added after these items
];

const toolsSubItems = [
  { path: "/dashboard/tools/agent", icon: MessageSquare, label: "Agent LLM" },
  { path: "/dashboard/tools/image", icon: ImageIcon, label: "Image" },
  { path: "/dashboard/tools/video", icon: Video, label: "Video" },
];

const DashboardLayout = () => {
  // Load sidebar state from localStorage, default to true on desktop, false on mobile
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    if (saved !== null) return saved === 'true';
    return window.innerWidth >= 1024; // Default open on desktop
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isToolsActive = location.pathname.startsWith("/dashboard/tools");
  // Auto-open dropdown if on tools page
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(isToolsActive);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem('sidebarOpen', sidebarOpen.toString());
  }, [sidebarOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // On mobile, close sidebar by default when resizing
      if (mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Update dropdown state when location changes
  useEffect(() => {
    if (isToolsActive) {
      setToolsDropdownOpen(true);
    }
  }, [isToolsActive]);

  const handleLogout = () => {
    // Clear auth state (localStorage) and redirect to landing page
    authAPI.logout();
    toast.success("You have been logged out");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : "-100%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="fixed inset-y-0 left-0 z-50 w-48 sm:w-56 bg-card/95 backdrop-blur-xl border-r border-border shadow-xl"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={theme === "dark" ? logoDarkBg : logoWhiteBg} 
                alt="AEKO" 
                className="w-10 h-10 object-contain transition-opacity duration-300" 
              />
              <span className="text-xl font-bold gradient-text">AEKO</span>
            </Link>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-secondary/50 transition-colors"
              title="Close sidebar"
            >
              <X className="w-5 h-5" />
            </motion.button> */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(true)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* AI Tools with Dropdown */}
            <div>
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                  isToolsActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5" />
                  <span className="font-medium">AI Tools</span>
              </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    toolsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {toolsDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 mt-2 space-y-1">
                      {toolsSubItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              setSidebarOpen(true);
                              setToolsDropdownOpen(true);
                            }}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                              isActive
                                ? "bg-primary/20 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
              </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Agent Store */}
            <Link
              to="/dashboard/agent-store"
              onClick={() => setSidebarOpen(true)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                location.pathname === "/dashboard/agent-store"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Store className="w-5 h-5" />
              <span className="font-medium">Agent Store</span>
            </Link>
          </nav>

          {/* Logout */}
          <div className="px-4 pb-6">
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.div 
        className="flex-1"
        animate={{
          marginLeft: sidebarOpen && !isMobile ? "12rem" : "0",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              title={ `${sidebarOpen ? "Close sidebar" : "Open sidebar"}`}
            >
          
                <Menu className="w-6 h-6" />
              
            </motion.button>

            <div className="flex-1" />

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <CreditCard className="w-4 h-4" />
                Upgrade
              </Button>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6 xl:p-8">
          <Outlet />
        </main>
      </motion.div>

      {/* Overlay - Only on mobile */}
      <AnimatePresence>
        {sidebarOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardLayout;
