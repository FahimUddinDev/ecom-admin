"use client";

import { Alert, Button, Card, Input, Switch } from "@/design-system";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
          System Configuration
        </h1>
        <p className="text-[var(--ds-text-paragraph)]">
          Manage platform-wide technical settings and SMTP configuration.
        </p>
      </div>

      <Alert variant="info" title="SMTP Configuration" closable={false}>
        Email settings are required for user registration, password resets, and
        order notifications.
      </Alert>

      <Card variant="flat" className="p-6 flex flex-col gap-6">
        <h3 className="font-semibold text-[var(--ds-text-headline)] border-b border-[var(--ds-border)] pb-4">
          SMTP Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              SMTP Host
            </label>
            <Input placeholder="smtp.gmail.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              SMTP Port
            </label>
            <Input placeholder="587" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              Encryption
            </label>
            <select className="bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] rounded-md px-3 py-2 text-sm outline-none">
              <option>TLS</option>
              <option>SSL</option>
              <option>None</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              Sender Email
            </label>
            <Input placeholder="noreply@ecommrch.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              SMTP Username
            </label>
            <Input placeholder="username" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--ds-text-headline)]">
              SMTP Password
            </label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--ds-border)]">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-[var(--ds-text-headline)]">
              Enable Email Notifications
            </p>
            <p className="text-xs text-[var(--ds-text-paragraph)]">
              Turn on/off all system automated emails.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="ghost">Test Connection</Button>
          <Button>Save Configuration</Button>
        </div>
      </Card>

      <Card variant="flat" className="p-6 flex flex-col gap-6">
        <h3 className="font-semibold text-[var(--ds-text-headline)] border-b border-[var(--ds-border)] pb-4">
          Maintenance Mode
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-[var(--ds-text-headline)]">
              Maintenance Mode
            </p>
            <p className="text-xs text-[var(--ds-text-paragraph)]">
              Display a maintenance page to all users except admins.
            </p>
          </div>
          <Switch />
        </div>
      </Card>
    </div>
  );
}
