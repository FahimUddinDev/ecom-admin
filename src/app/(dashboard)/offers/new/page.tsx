"use client";

import { FormLayout } from "@/components/shared";
import { Card, Input, Select } from "@/design-system";
import { useState } from "react";

export default function CreateOfferPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Offer created successfully!");
      window.history.back();
    }, 1500);
  };

  return (
    <FormLayout
      title="Create Global Offer"
      description="Launch a new promotional campaign with global discounts."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Campaign Info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Offer Name
              </label>
              <Input placeholder="e.g. Summer Flash Sale" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Offer Type
              </label>
              <Select
                className="w-full"
                defaultValue="global"
                options={[
                  { label: "Global", value: "global" },
                  { label: "Category Specific", value: "category" },
                  { label: "Product Specific", value: "product" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <Select
                className="w-full"
                defaultValue="draft"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                  { label: "Draft", value: "draft" },
                ]}
              />
            </div>
          </div>
        </Card>

        <Card title="Discount Configuration">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Discount Type
              </label>
              <Select
                className="w-full"
                defaultValue="percentage"
                options={[
                  { label: "Percentage (%)", value: "percentage" },
                  { label: "Fixed Amount", value: "fixed" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Discount Value
              </label>
              <Input type="number" placeholder="20" />
            </div>
          </div>
        </Card>

        <Card title="Validity Period">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <Input type="date" />
            </div>
          </div>
        </Card>

        <Card title="Applicable Items">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product IDs (Comma separated)
              </label>
              <Input placeholder="101, 102, 205..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Variant IDs (Optional)
              </label>
              <Input placeholder="501, 502..." />
            </div>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
