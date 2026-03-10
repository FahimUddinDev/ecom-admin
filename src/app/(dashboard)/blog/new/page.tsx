"use client";

import { FormLayout } from "@/components/shared";
import { Card, Input, Select } from "@/design-system";
import { useState } from "react";

export default function CreateBlogPostPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Blog post saved successfully!");
      window.history.back();
    }, 1500);
  };

  return (
    <FormLayout
      title="Article Composer"
      description="Write and publish compelling content for your audience."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Content">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Post Title
              </label>
              <Input placeholder="Enter a catchy headline" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Slug (URL)
              </label>
              <Input
                placeholder="e.g. future-of-ecommerce"
                prefix="ecommrch.com/blog/"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Introduction / Excerpt
              </label>
              <Input placeholder="A brief summary for the preview list" />
            </div>
          </div>
        </Card>

        <Card title="Categorization & Status">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select
                className="w-full"
                defaultValue="trends"
                options={[
                  { label: "Trends & Insights", value: "trends" },
                  { label: "Guides & Tutorials", value: "guides" },
                  { label: "Product Showcases", value: "product" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Publishing Status
              </label>
              <Select
                className="w-full"
                defaultValue="draft"
                options={[
                  { label: "Active / Published", value: "active" },
                  { label: "Inactive / Hidden", value: "inactive" },
                  { label: "Draft", value: "draft" },
                ]}
              />
            </div>
          </div>
        </Card>

        <Card title="SEO Optimization">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                SEO Title
              </label>
              <Input placeholder="For search engines (50-60 characters)" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                SEO Description
              </label>
              <Input placeholder="Meta description for SERP previews" />
            </div>
          </div>
        </Card>

        <Card title="Media & Thumbnail">
          <div className="border-2 border-dashed border-[var(--ds-border)] rounded-lg p-8 text-center cursor-pointer hover:border-[var(--ds-primary)] transition-all bg-[var(--ds-bg-subtle)]">
            <p className="text-sm font-bold text-[var(--ds-primary)]">
              Upload Featured Image
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Recommended: 1200 x 630px (Max 5MB)
            </p>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
