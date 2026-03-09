"use client";

import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const childCategories = [
  {
    id: 1,
    name: "iPhone",
    sub: "Smartphones",
    parent: "Electronics",
    status: "Active",
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    sub: "Smartphones",
    parent: "Electronics",
    status: "Active",
  },
  {
    id: 3,
    name: "MacBook Pro",
    sub: "Laptops",
    parent: "Electronics",
    status: "Active",
  },
  {
    id: 4,
    name: "T-Shirts",
    sub: "Mens Wear",
    parent: "Fashion",
    status: "Active",
  },
  {
    id: 5,
    name: "Dresses",
    sub: "Womens Wear",
    parent: "Fashion",
    status: "Active",
  },
];

export default function ChildCategoriesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Child Categories
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Manage the most granular level of category taxonomy.
          </p>
        </div>
        <Button>Add Child Category</Button>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search child categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <Select
            defaultValue="all"
            options={[
              { label: "All Sub Categories", value: "all" },
              { label: "Smartphones", value: "smartphones" },
              { label: "Laptops", value: "laptops" },
              { label: "Mens Wear", value: "mens-wear" },
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
                Sub Category
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Parent Category
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
            {childCategories.map((child) => (
              <tr
                key={child.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {child.name}
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="info">{child.sub}</Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {child.parent}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={child.status === "Active" ? "success" : "default"}
                  >
                    {child.status}
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
