"use client";

import { Badge, Button, Card } from "@/design-system";

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
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
          Reviews Moderation
        </h1>
        <p className="text-[var(--ds-text-paragraph)]">
          Monitor and moderate customer product reviews.
        </p>
      </div>

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
    </div>
  );
}
