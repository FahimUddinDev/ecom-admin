"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card, Tag } from "@/design-system";

export default function BlogDetailPage() {
  const post = {
    id: 1,
    title: "The Future of E-commerce in 2024",
    slug: "future-of-ecommerce-2024",
    description:
      "In this article, we explore the emerging trends that will shape the retail landscape next year, from AI personalization to sustainable logistics.",
    category: "Trends",
    status: "Published",
    author: "Admin Alex",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-08",
    seoTitle: "E-commerce Trends 2024 | Ecommrch Insight",
    seoDescription: "Stay ahead with the latest e-commerce trends for 2024.",
    thumbnail: "",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Unpublish
      </Button>
      <Button variant="primary">Edit Post</Button>
    </>
  );

  return (
    <DetailLayout
      title="Content Detail"
      description={`Post ID #${post.id}: ${post.title}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Article Content">
            <div className="space-y-4">
              <div className="h-48 bg-[var(--ds-bg-subtle)] rounded-lg flex items-center justify-center border border-[var(--ds-border)]">
                <span className="text-xs text-gray-500 italic">
                  Thumbnail Preview (1200x630)
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--ds-text-headline)]">
                {post.title}
              </h2>
              <p className="text-sm italic text-[var(--ds-text-paragraph)]">
                {post.description}
              </p>
              <div className="pt-4 border-t border-[var(--ds-border)]">
                <p className="text-xs text-gray-400">
                  Main broad body content goes here...
                </p>
              </div>
            </div>
          </Card>

          <Card title="SEO Settings">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  SEO Title
                </span>
                <p className="font-medium text-[var(--ds-text-headline)]">
                  {post.seoTitle}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  SEO Description
                </span>
                <p className="text-sm text-[var(--ds-text-paragraph)]">
                  {post.seoDescription}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Article Metadata">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="success">{post.status}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Category</span>
                <Tag color="info">{post.category}</Tag>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Author</span>
                <div className="flex items-center gap-2">
                  <Avatar size="xs" name={post.author} />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)] text-xs space-y-2 text-[var(--ds-text-paragraph)]">
                <p className="flex justify-between">
                  <span>Created</span> <span>{post.createdAt}</span>
                </p>
                <p className="flex justify-between">
                  <span>Last Update</span> <span>{post.updatedAt}</span>
                </p>
                <p className="flex justify-between">
                  <span>Permalinks</span>{" "}
                  <span className="text-[var(--ds-primary)] font-mono">
                    /{post.slug}
                  </span>
                </p>
              </div>
            </div>
          </Card>

          <Card title="Comments Stats">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">24</p>
              <Button size="sm" variant="ghost">
                Moderate
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Comments awaiting approval: 2
            </p>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
