"use client";

import { Button, Card, Input } from "@/design-system";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Logo / Branding */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black tracking-tight text-white mb-2">
          ECOMMRCH<span className="text-[var(--ds-primary)]">.</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Premium Admin Intelligence Suite
        </p>
      </div>

      {/* Login Card */}
      <Card
        className="backdrop-blur-xl bg-white/5 border-white/10 p-8 shadow-2xl shadow-black/50"
        variant="flat"
      >
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Admin Email
              </label>
              <Input
                type="email"
                placeholder="admin@ecommrch.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-[var(--ds-primary)] h-12"
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="/reset-password"
                  className="text-xs text-[var(--ds-primary)] hover:underline focus:outline-none"
                >
                  Forgot?
                </Link>
              </div>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-[var(--ds-primary)] h-12"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 px-1">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-white/10 bg-black/20 accent-[var(--ds-primary)]"
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-400 cursor-pointer"
            >
              Remember for 30 days
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-sm font-bold bg-[var(--ds-primary)] hover:bg-[var(--ds-primary)]/90 text-white shadow-lg shadow-[var(--ds-primary)]/20 transition-all active:scale-[0.98]"
            loading={loading}
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </Button>
        </form>
      </Card>

      <p className="text-center text-xs text-gray-600">
        &copy; 2024 Ecommrch Admin Portal. All rights reserved.
      </p>
    </div>
  );
}
