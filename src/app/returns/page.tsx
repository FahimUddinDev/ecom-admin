"use client";

import { Badge, Button, Card } from "@/design-system";

const returns = [
  {
    id: "#RET-101",
    orderId: "#ORD-9810",
    customer: "Alice Thompson",
    reason: "Damaged product",
    status: "Pending",
    date: "2024-03-06",
  },
  {
    id: "#RET-102",
    orderId: "#ORD-9805",
    customer: "Bob Richards",
    reason: "Wrong size",
    status: "Approved",
    date: "2024-03-07",
  },
  {
    id: "#RET-103",
    orderId: "#ORD-9790",
    customer: "Charlie Davis",
    reason: "Not as described",
    status: "Rejected",
    date: "2024-03-07",
  },
];

export default function ReturnsPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
          Returns Management
        </h1>
        <p className="text-[var(--ds-text-paragraph)]">
          Handle customer return requests and refunds.
        </p>
      </div>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Return ID
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Order ID
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Customer
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Reason
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Date
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {returns.map((ret) => (
              <tr
                key={ret.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {ret.id}
                </td>
                <td className="p-4 text-sm text-[var(--ds-primary)]">
                  {ret.orderId}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {ret.customer}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {ret.reason}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      ret.status === "Approved"
                        ? "success"
                        : ret.status === "Rejected"
                          ? "danger"
                          : "warning"
                    }
                  >
                    {ret.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {ret.date}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    Process
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
