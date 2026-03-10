import { ListLayout } from "@/components/shared";
("use client");

import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    user: "Alice Thompson",
    rating: 5,
    comment: "Amazing camera and build quality!",
    status: "Public",
    date: "2024-03-05",
  },
  {
    id: 2,
    product: "Cotton T-Shirt",
    user: "Bob Richards",
    rating: 2,
    comment: "Shallow fabric, faded after first wash.",
    status: "Public",
    date: "2024-03-06",
  },
  {
    id: 3,
    product: "Organic Fertilizer",
    user: "Charlie Davis",
    rating: 4,
    comment: "Does its job well.",
    status: "Pending",
    date: "2024-03-07",
  },
];

export default function ReviewsPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search comments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Ratings", value: "all" },
            { label: "5 Stars", value: "5" },
            { label: "4 Stars", value: "4" },
            { label: "3 Stars", value: "3" },
            { label: "2 Stars", value: "2" },
            { label: "1 Star", value: "1" },
          ]}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Status", value: "all" },
            { label: "Public", value: "public" },
            { label: "Pending", value: "pending" },
            { label: "Hidden", value: "hidden" },
          ]}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 1 to 3 of 3 entries</div>
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
      title="Reviews Moderation"
      description="Monitor and moderate customer product reviews."
      filters={filters}
      pagination={pagination}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Product
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                User
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Rating
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Comment
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
            {reviews.map((rev) => (
              <tr
                key={rev.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-primary)]">
                  {rev.product}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {rev.user}
                </td>
                <td className="p-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < rev.rating ? "opacity-100" : "opacity-20"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)] max-w-[300px] truncate">
                  {rev.comment}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={rev.status === "Public" ? "success" : "warning"}
                  >
                    {rev.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Hide
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
