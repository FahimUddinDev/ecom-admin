"use client";

import { PageHeader } from "@/components/shared";
import { Alert, Button, Card, Input } from "@/design-system";
import { useState } from "react";

export default function VerificationToolsPage() {
  const [userId, setUserId] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSendCode = () => {
    setStatus({
      type: "success",
      message: `Verification code sent to User #${userId}`,
    });
  };

  const handleVerifyCode = () => {
    if (code === "123456") {
      setStatus({ type: "success", message: "Code verified successfully!" });
    } else {
      setStatus({
        type: "error",
        message: "Invalid or expired verification code.",
      });
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto py-8">
      <PageHeader
        title="Verification Tools"
        description="Trigger codes and verify credentials on behalf of users."
      />

      <div className="space-y-6">
        {status && (
          <Alert
            variant={status.type}
            title={status.type === "success" ? "Success" : "Error"}
          >
            {status.message}
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Send Verification Code">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  User ID
                </label>
                <Input
                  placeholder="Enter user ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <Button
                onClick={handleSendCode}
                disabled={!userId}
                className="w-full"
              >
                Send Code
              </Button>
            </div>
          </Card>

          <Card title="Verify Code (Email/Signup)">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    User ID
                  </label>
                  <Input placeholder="ID" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Code</label>
                  <Input
                    placeholder="6 digits"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
              <Button
                onClick={handleVerifyCode}
                variant="primary"
                className="w-full"
              >
                Verify Now
              </Button>
            </div>
          </Card>

          <Card title="Forgot Password Tool">
            <div className="space-y-4">
              <p className="text-sm text-[var(--ds-text-paragraph)]">
                Manually verify a password reset attempt for a customer.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="User ID" />
                <Input placeholder="6 digits" />
              </div>
              <Button variant="ghost" className="w-full">
                Verify Reset Code
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
