"use client";

import { FormLayout } from "@/components/shared";
import { Card, Input, Select } from "@/design-system";
import { useState } from "react";

export default function CreateCouponPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Coupon created successfully!");
      window.history.back();
    }, 1500);
  };

  return (
    <FormLayout
      title="Create New Coupon"
      description="Define a new discount code for your customers."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Coupon Core">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Coupon Code
              </label>
              <Input placeholder="e.g. SAVE25" className="uppercase" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
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
              <label className="block text-sm font-medium mb-1">Value</label>
              <Input type="number" placeholder="25" />
            </div>
          </div>
        </Card>

        <Card title="Usage Restrictions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Minimum Purchase Amount
              </label>
              <Input type="number" placeholder="100.00" prefix="$" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Total Usage Limit
              </label>
              <Input type="number" placeholder="500" />
            </div>
          </div>
        </Card>

        <Card title="Validity & Status">
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
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Status</label>
              <Select
                className="w-full"
                defaultValue="active"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                ]}
              />
            </div>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
