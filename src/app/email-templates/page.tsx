"use client";

import { Badge, Button, Card } from "@/design-system";

const templates = [
  {
    id: 1,
    name: "User Registration",
    subject: "Welcome to Ecommrch!",
    lastModified: "2024-02-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Order Confirmation",
    subject: "Your order #{{orderId}} is confirmed",
    lastModified: "2024-03-01",
    status: "Active",
  },
  {
    id: 3,
    name: "Password Reset",
    subject: "Reset your Ecommrch password",
    lastModified: "2023-12-20",
    status: "Active",
  },
  {
    id: 4,
    name: "Seller Approval",
    subject: "Your seller account has been approved!",
    lastModified: "2024-01-10",
    status: "Active",
  },
];

export default function EmailTemplatesPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Email Templates
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Customize automated email notifications using dynamic tags.
          </p>
        </div>
        <Button>Create Template</Button>
      </div>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Template Name
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Subject Line
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Last Modified
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {templates.map((temp) => (
              <tr
                key={temp.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {temp.name}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {temp.subject}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {temp.lastModified}
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="success">{temp.status}</Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit Template
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
