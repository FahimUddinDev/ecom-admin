"use client";

import { ListLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card, Input, Select } from "@/design-system";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of E-commerce in 2024",
    slug: "future-of-ecommerce-2024",
    category: "Trends",
    status: "Published",
    author: "Admin Alex",
    createdAt: "2024-03-01",
  },
  {
    id: 2,
    title: "Maximizing Your Store's ROI",
    slug: "maximizing-roi",
    category: "Guides",
    status: "Draft",
    author: "Marketing Maria",
    createdAt: "2024-03-05",
  },
  {
    id: 3,
    title: "Top 10 Accessories for Summer",
    slug: "top-10-summer-accessories",
    category: "Product Highlights",
    status: "Inactive",
    author: "Product Pete",
    createdAt: "2024-02-28",
  },
];

export default function BlogListPage() {
  const [search, setSearch] = useState("");

  const actions = (
    <Link href="/blog/new">
      <Button>Create Post</Button>
    </Link>
  );

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Categories", value: "all" },
            { label: "Trends", value: "trends" },
            { label: "Guides", value: "guides" },
            { label: "Product Highlights", value: "product" },
          ]}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Status", value: "all" },
            { label: "Published", value: "published" },
            { label: "Draft", value: "draft" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </div>
    </>
  );

  return (
    <ListLayout
      title="Blog Editorial"
      description="Manage your platform's content strategy and blog updates."
      actions={actions}
      filters={filters}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Post Title
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Category
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Author
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
            {blogPosts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div>
                    <p className="text-sm font-bold text-[var(--ds-text-headline)]">
                      {post.title}
                    </p>
                    <p className="text-xs text-[var(--ds-text-paragraph)] truncate max-w-xs">
                      /{post.slug}
                    </p>
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {post.category}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      post.status === "Published"
                        ? "success"
                        : post.status === "Draft"
                          ? "warning"
                          : "default"
                    }
                  >
                    {post.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  <div className="flex items-center gap-2">
                    <Avatar size="xs" name={post.author} />
                    {post.author}
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {post.createdAt}
                </td>
                <td className="p-4 text-right">
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ListLayout>
  );
}
