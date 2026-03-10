"use client";

import { ListLayout } from "@/components/shared";
import { Button, Card, Input } from "@/design-system";
import { useState } from "react";

const wishlistItems = [
  {
    id: 1,
    userId: 450,
    customer: "Alice Thompson",
    product: "iPhone 15 Pro",
    addedOn: "2024-03-05",
  },
  {
    id: 2,
    userId: 102,
    customer: "Charlie Davis",
    product: "Mechanical Keyboard",
    addedOn: "2024-03-08",
  },
];

export default function WishlistPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search by customer or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 2 entries</div>
    </div>
  );

  return (
    <ListLayout
      title="Customer Wishlists"
      description="Monitor products saved by customers."
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
                Product
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Date Added
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {item.customer} (ID: {item.userId})
                </td>
                <td className="p-4 text-sm text-[var(--ds-primary)] font-medium">
                  {item.product}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {item.addedOn}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View User
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
