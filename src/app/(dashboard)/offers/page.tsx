"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Input, Select, Tag } from "@/design-system";
import { useState } from "react";

const offers = [
  {
    id: 1,
    name: "New Year Sale 2024",
    discount: "Up to 50% Off",
    products: 450,
    period: "Jan 01 - Jan 15",
    status: "Closed",
  },
  {
    id: 2,
    name: "Flash Friday Deals",
    discount: "Flat 25% Off",
    products: 120,
    period: "Every Friday",
    status: "Active",
  },
  {
    id: 3,
    name: "End of Season Clearout",
    discount: "Up to 70% Off",
    products: 800,
    period: "Mar 20 - Apr 05",
    status: "Upcoming",
  },
];

export default function OffersPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search offers..."
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
            { label: "Upcoming", value: "upcoming" },
            { label: "Closed", value: "closed" },
          ]}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 1 to 3 of 3 entries</div>
    </div>
  );

  return (
    <ListLayout
      title="Offers Management"
      description="Manage seasonal campaigns and promotional offers."
      filters={filters}
      pagination={pagination}
      actions={<Button>Create Global Offer</Button>}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Offer Name
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Global Discount
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Participating Products
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Offer Period
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
            {offers.map((offer) => (
              <tr
                key={offer.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {offer.name}
                </td>
                <td className="p-4">
                  <Tag color="info">{offer.discount}</Tag>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {offer.products} items
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {offer.period}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      offer.status === "Active"
                        ? "success"
                        : offer.status === "Upcoming"
                          ? "info"
                          : "default"
                    }
                  >
                    {offer.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      Deactivate
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ListLayout>
  );
}
