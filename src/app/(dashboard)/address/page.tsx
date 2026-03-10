"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const addresses = [
  {
    id: 1,
    userId: 450,
    street: "123 Maple Street",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    status: "Active",
  },
  {
    id: 2,
    userId: 102,
    street: "456 Oak Avenue",
    city: "New York",
    state: "NY",
    country: "USA",
    status: "Active",
  },
  {
    id: 3,
    userId: 301,
    street: "789 Pine Road",
    city: "Sidney",
    state: "NSW",
    country: "Australia",
    status: "Inactive",
  },
];

export default function AddressListPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search by street, city, country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Status", value: "all" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 3 entries</div>
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" disabled>
          Previous
        </Button>
        <Button variant="ghost" size="sm" disabled>
          Next
        </Button>
      </div>
    </div>
  );

  return (
    <ListLayout
      title="Addresses"
      description="Manage all customer shipping and billing addresses."
      filters={filters}
      pagination={pagination}
      actions={<Button>Create New Address</Button>}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Street
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                City/State
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Country
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
            {addresses.map((addr) => (
              <tr
                key={addr.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <p className="text-sm font-bold text-[var(--ds-text-headline)]">
                    {addr.street}
                  </p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    User ID: {addr.userId}
                  </p>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {addr.city}, {addr.state}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-headline)] font-medium">
                  {addr.country}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={addr.status === "Active" ? "success" : "default"}
                  >
                    {addr.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ListLayout>
  );
}
