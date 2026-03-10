"use client";

import { FormLayout } from "@/components/shared";
import { Card, Input, Select, Switch } from "@/design-system";
import { useState } from "react";

export default function CreateProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Product created successfully!");
    }, 1500);
  };

  return (
    <FormLayout
      title="Create New Product"
      description="Add a new product to the marketplace catalog."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Product Name
              </label>
              <Input placeholder="e.g. iPhone 15 Pro" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select
                placeholder="Select category"
                className="w-full"
                options={[
                  { label: "Electronics", value: "electronics" },
                  { label: "Fashion", value: "fashion" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Price ($)
              </label>
              <Input type="number" placeholder="0.00" />
            </div>
          </div>
        </Card>

        <Card title="Inventory & Status">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Stock Quantity
              </label>
              <Input type="number" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">SKU</label>
              <Input placeholder="Unique stock identifier" />
            </div>
            <div className="flex items-center justify-between col-span-2 p-2 bg-[var(--ds-bg-subtle)] rounded-lg">
              <div>
                <p className="font-medium text-sm">Draft Mode</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Product will not be visible to customers
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card title="Media Content">
          <div className="border-2 border-dashed border-[var(--ds-border-strong)] rounded-xl p-8 text-center flex flex-col items-center gap-2 hover:border-[var(--ds-primary)] transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[var(--ds-primary-light)] flex items-center justify-center text-[var(--ds-primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                PNG, JPG or WEBP (Max 5MB)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
