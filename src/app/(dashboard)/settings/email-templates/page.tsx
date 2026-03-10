"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Tag } from "@/design-system";
import Link from "next/link";
import { useState } from "react";

const emailTemplates = [
  {
    id: 1,
    name: "User Welcome",
    subject: "Welcome to Ecommrch Platform!",
    type: "Transactional",
    updatedAt: "2024-03-01",
  },
  {
    id: 2,
    name: "Order Confirmation",
    subject: "Your order #{{order_id}} has been received",
    type: "Orders",
    updatedAt: "2024-03-05",
  },
  {
    id: 3,
    name: "Password Reset",
    subject: "Reset your admin password",
    type: "Security",
    updatedAt: "2024-02-28",
  },
];

export default function EmailTemplatesPage() {
  const [search, setSearch] = useState("");

  const actions = (
    <div className="flex gap-2">
      <Link href="/settings">
        <Button variant="outline">SMTP Config</Button>
      </Link>
      <Button>New Template</Button>
    </div>
  );

  return (
    <ListLayout
      title="Communication Hub"
      description="Manage automated email templates and notification settings."
      actions={actions}
    >
      <div className="grid grid-cols-1 gap-6">
        <Card
          title="Transactional Email Templates"
          className="p-0 overflow-hidden"
          variant="flat"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                  Template Identity
                </th>
                <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                  Subject Line
                </th>
                <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                  Category
                </th>
                <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                  Last Update
                </th>
                <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {emailTemplates.map((template) => (
                <tr
                  key={template.id}
                  className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
                >
                  <td className="p-4 font-bold text-sm text-[var(--ds-text-headline)]">
                    {template.name}
                  </td>
                  <td className="p-4 text-sm text-[var(--ds-text-paragraph)] italic">
                    "{template.subject}"
                  </td>
                  <td className="p-4 text-sm">
                    <Tag color="info">{template.type}</Tag>
                  </td>
                  <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                    {template.updatedAt}
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      Edit Template
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card
          title="Quick Configuration"
          className="bg-[var(--ds-primary-subtle)]/30 border-[var(--ds-primary)]/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-[var(--ds-primary)]">
                SMTP Server Status
              </p>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                Connection verified: Last pulse 2 minutes ago
              </p>
            </div>
            <Badge variant="success">Online</Badge>
          </div>
        </Card>
      </div>
    </ListLayout>
  );
}
