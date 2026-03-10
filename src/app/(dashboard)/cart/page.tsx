"use client";

import { ListLayout } from "@/components/shared";
import { Button, Card, Input } from "@/design-system";
import { useState } from "react";

const cartItems = [
  {
    id: 1,
    userId: 301,
    customer: "Eve Online",
    itemsCount: 3,
    totalValue: "$1,250.00",
    lastUpdated: "2024-03-09",
  },
  {
    id: 2,
    userId: 205,
    customer: "Frank Castle",
    itemsCount: 1,
    totalValue: "$45.00",
    lastUpdated: "2024-03-08",
  },
];

export default function CartPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <div className="w-full md:w-64">
      <Input
        placeholder="Search by customer name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 2 active carts</div>
    </div>
  );

  return (
    <ListLayout
      title="Active Shopping Carts"
      description="View real-time contents of customer shopping carts."
      filters={filters}
      pagination={pagination}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Customer
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Items
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Total Value
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Last Updated
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cart) => (
              <tr
                key={cart.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {cart.customer}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {cart.itemsCount} items
                </td>
                <td className="p-4 text-sm font-bold text-[var(--ds-primary)]">
                  {cart.totalValue}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {cart.lastUpdated}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View Contents
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ListLayout>
  );
}
