import { ListLayout } from "@/components/shared";
("use client");

import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const comments = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    user: "Alice Thompson",
    comment: "Does this come with a charger?",
    replies: 1,
    status: "Active",
    date: "2024-03-05",
  },
  {
    id: 2,
    product: "MacBook Pro M3",
    user: "Bob Richards",
    comment: "When will the 16GB variant be available?",
    replies: 0,
    status: "Flagged",
    date: "2024-03-06",
  },
  {
    id: 3,
    product: "Summer Dress",
    user: "Diana Prince",
    comment: "Is the fabric stretchable?",
    replies: 2,
    status: "Active",
    date: "2024-03-07",
  },
];

export default function QAPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Status", value: "all" },
            { label: "Active", value: "active" },
            { label: "Flagged", value: "flagged" },
            { label: "Closed", value: "closed" },
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
      title="Q&A Moderation"
      description="Manage product discussions and community interactions."
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
                Question/Comment
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Replies
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
            {comments.map((comm) => (
              <tr
                key={comm.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-primary)]">
                  {comm.product}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {comm.user}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)] max-w-[300px] truncate">
                  {comm.comment}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {comm.replies}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={comm.status === "Active" ? "success" : "danger"}
                  >
                    {comm.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Reply
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
