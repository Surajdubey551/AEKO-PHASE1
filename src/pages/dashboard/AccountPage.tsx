import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Key, 
  CreditCard, 
  Shield, 
  Bell, 
  Download,
  Copy,
  Eye,
  EyeOff,
  Check,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AccountPage = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyApiKey = () => {
    navigator.clipboard.writeText("ak_live_xxxxxxxxxxxxxxxxxxxx");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoogleSignIn = () => {
    // Placeholder for future Google OAuth integration
    toast.info("Google sign-in will be available soon. For now, use your email account.");
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
          Account Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your profile, subscription, and preferences
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Profile & Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile / Sign-in Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">Profile</h2>

            {/* Google sign-in */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Sign in with your Google account
                </p>
                <p className="text-xs text-muted-foreground">
                  Quickly connect using your Gmail – no separate password needed.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2 rounded-full border border-border/70 bg-background hover:bg-secondary/60"
                onClick={handleGoogleSignIn}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
                  <span className="text-[12px] font-bold text-[#4285F4]">G</span>
                </span>
                <span className="text-sm font-medium text-foreground">
                  Continue with Google
                </span>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white">
                  A
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>

              {/* Form */}
              <div className="flex-1 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Alex Creator"
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="@alexcreator"
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Bio
                  </label>
                  <textarea
                    defaultValue="Creative professional exploring AI-powered content generation"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      defaultValue="San Francisco, CA"
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      defaultValue="https://alexcreator.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <Button variant="hero" size="sm">Save Changes</Button>
              </div>
            </div>
          </motion.div>

          {/* Subscription Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">Subscription</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-semibold text-foreground">Standard Plan</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  $45/month • Renews on Jan 15, 2025
                </p>
              </div>
              <Button variant="outline">Manage Plan</Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary/30">
                <div className="text-2xl font-bold text-foreground">2,450</div>
                <div className="text-sm text-muted-foreground">Credits Remaining</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <div className="text-2xl font-bold text-foreground">87,432</div>
                <div className="text-sm text-muted-foreground">LLM Questions Left</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30">
                <div className="text-2xl font-bold text-foreground">156</div>
                <div className="text-sm text-muted-foreground">Generations This Month</div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Usage This Month</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Images Generated</span>
                  <span className="font-medium text-foreground">89 / 500</span>
                </div>
                <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "17.8%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Videos Generated</span>
                  <span className="font-medium text-foreground">12 / 50</span>
                </div>
                <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "24%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">API Calls</span>
                  <span className="font-medium text-foreground">1,234 / 10,000</span>
                </div>
                <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/70 rounded-full" style={{ width: "12.34%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Billing History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">Billing History</h2>
            
            <div className="space-y-3">
              {[
                { date: "Dec 15, 2024", amount: "$45.00", status: "Paid", plan: "Standard Plan" },
                { date: "Nov 15, 2024", amount: "$45.00", status: "Paid", plan: "Standard Plan" },
                { date: "Oct 15, 2024", amount: "$45.00", status: "Paid", plan: "Standard Plan" },
                { date: "Sep 15, 2024", amount: "$29.00", status: "Paid", plan: "Basic Plan" },
              ].map((invoice, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{invoice.date}</div>
                      <div className="text-xs text-muted-foreground">{invoice.plan}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-foreground">{invoice.amount}</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                      {invoice.status}
                    </span>
                    <Download className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Security & API */}
        <div className="space-y-6">
          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Security
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Update Password
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                </div>
                <button className="w-10 h-6 rounded-full bg-secondary relative">
                  <div className="w-4 h-4 rounded-full bg-primary absolute top-1 left-1 transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Login Notifications</p>
                  <p className="text-xs text-muted-foreground">Get notified of new logins</p>
                </div>
                <button className="w-10 h-6 rounded-full bg-primary relative">
                  <div className="w-4 h-4 rounded-full bg-white absolute top-1 right-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* API Keys Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              API Keys
            </h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                <Key className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1 font-mono text-xs text-foreground overflow-hidden">
                  {showApiKey ? "ak_live_xxxxxxxxxxxxxxxxxxxx" : "ak_live_••••••••••••••••••••"}
                </div>
                <button
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={copyApiKey}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full mb-4">
              Generate New Key
            </Button>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3">API Usage</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Requests Today</span>
                  <span className="font-medium text-foreground">1,234</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Rate Limit</span>
                  <span className="font-medium text-foreground">10,000/day</span>
                </div>
                <div className="w-full h-1.5 bg-secondary/30 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-primary rounded-full" style={{ width: "12.34%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notifications
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <button className="w-10 h-6 rounded-full bg-primary relative">
                  <div className="w-4 h-4 rounded-full bg-white absolute top-1 right-1 transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Credit Alerts</p>
                  <p className="text-xs text-muted-foreground">Get notified when credits are low</p>
                </div>
                <button className="w-10 h-6 rounded-full bg-primary relative">
                  <div className="w-4 h-4 rounded-full bg-white absolute top-1 right-1 transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Product Updates</p>
                  <p className="text-xs text-muted-foreground">News about new features</p>
                </div>
                <button className="w-10 h-6 rounded-full bg-secondary relative">
                  <div className="w-4 h-4 rounded-full bg-primary absolute top-1 left-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
