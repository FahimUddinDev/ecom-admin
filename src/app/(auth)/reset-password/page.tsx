"use client";

import { Button, Card, Input } from "@/design-system";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card
        className="backdrop-blur-xl bg-white/5 border-white/10 p-8 text-center space-y-6"
        variant="flat"
      >
        <div className="w-16 h-16 bg-[var(--ds-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--ds-primary)]/30">
          <svg
            className="w-8 h-8 text-[var(--ds-primary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Check your email</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We've sent a password reset link to <br />
            <span className="text-white font-medium">{email}</span>
          </p>
        </div>
        <Button
          variant="outline"
          className="w-full border-white/10 text-white hover:bg-white/5"
          onClick={() => setSubmitted(false)}
        >
          Try a different email
        </Button>
        <Link
          href="/login"
          className="block text-sm text-[var(--ds-primary)] font-medium hover:underline"
        >
          Back to Login
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Reset Password</h1>
        <p className="text-gray-400 text-sm">
          Enter your admin email to receive recovery instructions.
        </p>
      </div>

      <Card
        className="backdrop-blur-xl bg-white/5 border-white/10 p-8"
        variant="flat"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button
            type="submit"
            className="w-full h-12 text-sm font-bold bg-[var(--ds-primary)] hover:bg-[var(--ds-primary)]/90 text-white shadow-lg transition-transform active:scale-[0.98]"
          >
            Send Reset Instructions
          </Button>

          <Link
            href="/login"
            className="block text-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            Wait, I remembered! Back to Sign In
          </Link>
        </form>
      </Card>
    </div>
  );
}
