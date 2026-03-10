"use client";

import { FormLayout } from "@/components/shared";
import { Avatar, Card, Input, Select } from "@/design-system";
import { useState } from "react";

export default function CreateUserPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("User account managed successfully!");
      window.history.back();
    }, 1500);
  };

  return (
    <FormLayout
      title="User Management"
      description="Create or update user accounts and permissions."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Personal Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <Input placeholder="e.g. Alice" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <Input placeholder="e.g. Thompson" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input type="email" placeholder="alice@example.com" />
            </div>
          </div>
        </Card>

        <Card title="Security & Roles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Account Role
              </label>
              <Select
                className="w-full"
                defaultValue="user"
                options={[
                  { label: "Standard User", value: "user" },
                  { label: "Seller / Merchant", value: "seller" },
                  { label: "Platform Admin", value: "admin" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Initial Password
              </label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
        </Card>

        <Card title="Status Configuration">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Account Status
              </label>
              <Select
                className="w-full"
                defaultValue="active"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                  { label: "Banned", value: "banned" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Verification
              </label>
              <Select
                className="w-full"
                defaultValue="verified"
                options={[
                  { label: "Verified", value: "verified" },
                  { label: "Unverified", value: "unverified" },
                ]}
              />
            </div>
          </div>
        </Card>

        <Card title="Profile Avatar">
          <div className="flex items-center gap-4">
            <Avatar size="lg" name="User" />
            <div className="flex-1 border-2 border-dashed border-[var(--ds-border)] rounded-lg p-4 text-center cursor-pointer hover:border-[var(--ds-primary)] transition-colors">
              <span className="text-sm text-[var(--ds-text-paragraph)]">
                Click to upload or drag and drop
              </span>
            </div>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
