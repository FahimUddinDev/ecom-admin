"use client";

import { Badge, Button, Card, Input } from "@/design-system";
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    thumbnail: "electronics.jpg",
    status: "Active",
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    thumbnail: "fashion.jpg",
    status: "Active",
  },
  {
    id: 3,
    name: "Home & Garden",
    slug: "home-garden",
    thumbnail: "home.jpg",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sports",
    slug: "sports",
    thumbnail: "sports.jpg",
    status: "Active",
  },
  {
    id: 5,
    name: "Health & Beauty",
    slug: "health-beauty",
    thumbnail: "health.jpg",
    status: "Active",
  },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Global Categories
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Manage top-level category structure for the marketplace.
          </p>
        </div>
        <Button>Add Category</Button>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Thumbnail
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Category Name
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Slug
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
            {categories.map((cat) => (
              <tr
                key={cat.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div className="w-12 h-12 rounded bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] flex items-center justify-center overflow-hidden">
                    <span className="text-xs text-[var(--ds-text-paragraph)]">
                      {cat.name[0]}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {cat.name}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  /{cat.slug}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={cat.status === "Active" ? "success" : "default"}
                  >
                    {cat.status}
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
    </div>
  );
}
