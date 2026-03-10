"use client";

import { FormLayout } from "@/components/shared";
import { Card, Input, Select } from "@/design-system";
import { useState } from "react";

export default function CreateAddressPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Address created successfully!");
      window.history.back();
    }, 1500);
  };

  return (
    <FormLayout
      title="Create New Address"
      description="Add a secondary or primary address for a specific user."
      onSubmit={handleSubmit}
      onCancel={() => window.history.back()}
      isSubmitting={loading}
    >
      <div className="space-y-6">
        <Card title="Location Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <Input placeholder="e.g. 123 Maple Street" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Address Line 2 (Optional)
              </label>
              <Input placeholder="e.g. Apartment, suite, unit, etc." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input placeholder="City name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                State / Province
              </label>
              <Input placeholder="State or Province" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <Select
                className="w-full"
                placeholder="Select country"
                options={[
                  { label: "United Kingdom", value: "uk" },
                  { label: "United States", value: "usa" },
                  { label: "Australia", value: "au" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Postal Code
              </label>
              <Input placeholder="e.g. E1 6AN" />
            </div>
          </div>
        </Card>

        <Card title="Coordinates (Geometric Data)">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Latitude</label>
              <Input type="number" placeholder="51.5074" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Longitude
              </label>
              <Input type="number" placeholder="-0.1278" />
            </div>
            <p className="col-span-2 text-xs text-[var(--ds-text-paragraph)] bg-[var(--ds-bg-subtle)] p-3 rounded-lg border border-[var(--ds-border)]">
              Pro-tip: Geometric data is used for precise logistics and
              distance-based calculations.
            </p>
          </div>
        </Card>

        <Card title="User Assignment">
          <div>
            <label className="block text-sm font-medium mb-1">
              Associated User ID
            </label>
            <Input placeholder="e.g. 450" />
            <p className="text-xs text-[var(--ds-text-paragraph)] mt-1 ml-1">
              You must link this address to a valid user account.
            </p>
          </div>
        </Card>
      </div>
    </FormLayout>
  );
}
