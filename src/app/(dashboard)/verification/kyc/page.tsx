"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const kycRequests = [
  {
    id: 1,
    userId: 450,
    title: "Passport Verification",
    status: "Pending",
    createdAt: "2024-03-08",
  },
  {
    id: 2,
    userId: 421,
    title: "Driver's License",
    status: "Approved",
    createdAt: "2024-03-07",
  },
  {
    id: 3,
    userId: 102,
    title: "Business Incorporation",
    status: "Rejected",
    createdAt: "2024-03-05",
  },
];

export default function KYCRequestsPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Status", value: "all" },
            { label: "Pending", value: "pending" },
            { label: "Approved", value: "approved" },
            { label: "Rejected", value: "rejected" },
          ]}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 1 to 3 of 3 entries</div>
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
      title="KYC Requests"
      description="Monitor and manage identity verification submissions from users."
      filters={filters}
      pagination={pagination}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                ID
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                User ID
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Title
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Submitted On
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {kycRequests.map((req) => (
              <tr
                key={req.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  #{req.id}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  User #{req.userId}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-headline)] font-medium">
                  {req.title}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      req.status === "Approved"
                        ? "success"
                        : req.status === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {req.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {req.createdAt}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View Detail
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
