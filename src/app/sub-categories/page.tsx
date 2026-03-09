"use client";

import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const subCategories = [
  {
    id: 1,
    name: "Smartphones",
    parent: "Electronics",
    slug: "smartphones",
    status: "Active",
  },
  {
    id: 2,
    name: "Laptops",
    parent: "Electronics",
    slug: "laptops",
    status: "Active",
  },
  {
    id: 3,
    name: "Mens Wear",
    parent: "Fashion",
    slug: "mens-wear",
    status: "Active",
  },
  {
    id: 4,
    name: "Womens Wear",
    parent: "Fashion",
    slug: "womens-wear",
    status: "Active",
  },
  {
    id: 5,
    name: "Garden Tools",
    parent: "Home & Garden",
    slug: "garden-tools",
    status: "Inactive",
  },
];

export default function SubCategoriesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Sub Categories
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Manage secondary level categories grouped by parent.
          </p>
        </div>
        <Button>Add Sub Category</Button>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search sub-categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <Select
            defaultValue="all"
            options={[
              { label: "All Parent Categories", value: "all" },
              { label: "Electronics", value: "electronics" },
              { label: "Fashion", value: "fashion" },
              { label: "Home & Garden", value: "home-garden" },
            ]}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Name
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Parent Category
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
            {subCategories.map((sub) => (
              <tr
                key={sub.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {sub.name}
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="info">{sub.parent}</Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  /{sub.slug}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={sub.status === "Active" ? "success" : "default"}
                  >
                    {sub.status}
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
