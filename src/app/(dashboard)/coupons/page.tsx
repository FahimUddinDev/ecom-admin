"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Input } from "@/design-system";
import { useState } from "react";

const coupons = [
  {
    id: 1,
    code: "SAVE20",
    type: "Percentage",
    value: "20%",
    usage: "145 / 500",
    expiry: "2024-12-31",
    status: "Active",
  },
  {
    id: 2,
    code: "WELCOME50",
    type: "Fixed",
    value: "$50.00",
    usage: "1,200 / Unlimited",
    expiry: "2025-06-30",
    status: "Active",
  },
  {
    id: 3,
    code: "SUMMER10",
    type: "Percentage",
    value: "10%",
    usage: "850 / 1000",
    expiry: "2024-08-31",
    status: "Expired",
  },
  {
    id: 4,
    code: "FREESHIP",
    type: "Free Shipping",
    value: "-",
    usage: "3,400 / Unlimited",
    expiry: "2024-12-31",
    status: "Active",
  },
];

export default function CouponsPage() {
  const [search, setSearch] = useState("");

  const actions = <Button>Create Coupon</Button>;

  const filters = (
    <div className="w-full md:w-64">
      <Input
        placeholder="Search coupon code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 1 to 4 of 4 entries</div>
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" disabled>
          Previous
        </Button>
        <Button variant="ghost" size="sm" disabled>
          Next
        </Button>
      </div>
    </div>
  );

  return (
    <ListLayout
      title="Coupons Builder"
      description="Create and manage global platform-wide discount codes."
      actions={actions}
      filters={filters}
      pagination={pagination}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Code
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Type
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Value
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Usage Limit
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Expiry
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
            {coupons.map((coupon) => (
              <tr
                key={coupon.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <code className="bg-[var(--ds-bg-subtle)] px-2 py-1 rounded text-[var(--ds-primary)] font-bold">
                    {coupon.code}
                  </code>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {coupon.type}
                </td>
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {coupon.value}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {coupon.usage}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {coupon.expiry}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={coupon.status === "Active" ? "success" : "danger"}
                  >
                    {coupon.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ListLayout>
  );
}
