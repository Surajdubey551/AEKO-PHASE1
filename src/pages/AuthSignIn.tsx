import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authAPI } from "@/lib/api";
import { toast } from "sonner";
import hero from "@/assets/hero-bg.jpg";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: any) => void }) => void;
          prompt: () => void;
        };
      };
    };
  }
}

const AuthSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleCallback = useCallback(async (response: any) => {
    setIsGoogleLoading(true);
    try {
      // Send Google credential to backend
      const res = await authAPI.googleLogin(response.credential);
      if (res.success) {
        toast.success("Welcome! Signed in with Google");
        navigate("/dashboard");
      } else {
        toast.error(res.message || "Google sign-in failed");
      }
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      toast.error(error.message || "Failed to sign in with Google");
    } finally {
      setIsGoogleLoading(false);
    }
  }, [navigate]);

  // Load Google Identity Services
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Initialize Google Sign-In (using a demo client ID - replace with yours)
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
          callback: handleGoogleCallback,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [handleGoogleCallback]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    setIsLoading(true);
    try {
      const res = await authAPI.login(email, password);
      if (res.success) {
        toast.success("Welcome back!");
        navigate("/dashboard");
      } else {
        toast.error(res.message || "Invalid credentials");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    if (!window.google) {
      toast.error("Google Sign-In is loading. Please wait a moment and try again.");
      return;
    }
    if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
      toast.info(
        "Google OAuth is not configured. To enable Google sign-in:\n" +
        "1. Get a Client ID from https://console.cloud.google.com/\n" +
        "2. Add VITE_GOOGLE_CLIENT_ID=your_client_id to your .env file\n" +
        "3. Restart the dev server\n\n" +
        "For now, please use email/password login.",
        { duration: 6000 }
      );
      return;
    }
    setIsGoogleLoading(true);
    window.google.accounts.id.prompt();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 glass-card rounded-3xl overflow-hidden border border-border/60 bg-background/80">
        {/* Left visual */}
        <div className="relative hidden md:block">
          <img
            src={hero}
            alt="AI creative"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              AEKO CREATIVE SUITE
            </p>
            <p className="text-lg font-semibold text-foreground">
              Log in to unlock your AI workspace: chat, tools, and media generation.
            </p>
          </div>
        </div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 md:p-8 flex flex-col justify-center"
        >
          <div className="mb-6">
            <p className="text-xs text-muted-foreground mb-1">Welcome back</p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Sign in to Aeko
            </h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 bg-background/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9 bg-background/60"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Use the email and password you registered with (Gmail works too).</span>
            </div>

            <Button
              type="submit"
              className="w-full mt-2 gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2 rounded-full border-border/70 bg-background hover:bg-secondary/60"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
            >
              {isGoogleLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm font-medium text-foreground">
                    Signing in with Google...
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
                    <span className="text-[12px] font-bold text-[#4285F4]">G</span>
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    Continue with Google
                  </span>
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthSignIn;



