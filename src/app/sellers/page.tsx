"use client";

import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const sellers = [
  {
    id: 1,
    shopName: "Tech Haven",
    owner: "John Smith",
    email: "john@techhaven.com",
    products: 124,
    sales: "$45,200",
    status: "Active",
    joinDate: "2023-08-12",
  },
  {
    id: 2,
    shopName: "Fashion Forward",
    owner: "Sarah Jenkins",
    email: "sarah@fashion.com",
    products: 85,
    sales: "$28,400",
    status: "Active",
    joinDate: "2023-09-05",
  },
  {
    id: 3,
    shopName: "Green Life",
    owner: "Mike Ross",
    email: "mike@greenlife.com",
    products: 42,
    sales: "$12,150",
    status: "Suspended",
    joinDate: "2023-11-20",
  },
  {
    id: 4,
    shopName: "Home Comforts",
    owner: "Emma Wilson",
    email: "emma@home.com",
    products: 210,
    sales: "$89,000",
    status: "Active",
    joinDate: "2023-05-15",
  },
  {
    id: 5,
    shopName: "Gadget World",
    owner: "David Lee",
    email: "david@gadget.com",
    products: 15,
    sales: "$3,200",
    status: "Pending",
    joinDate: "2024-02-28",
  },
];

export default function SellersPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Seller Directory
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            View and manage all registered merchant shops.
          </p>
        </div>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search shops or owners..."
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
              { label: "Suspended", value: "suspended" },
              { label: "Pending", value: "pending" },
            ]}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Shop Details
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Owner
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Products
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Total Sales
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Join Date
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr
                key={seller.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[var(--ds-bg-subtle)] flex items-center justify-center text-[var(--ds-text-headline)] font-bold">
                      {seller.shopName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--ds-text-headline)]">
                        {seller.shopName}
                      </p>
                      <p className="text-xs text-[var(--ds-text-paragraph)]">
                        {seller.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-headline)]">
                  {seller.owner}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {seller.products}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-headline)] font-medium">
                  {seller.sales}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      seller.status === "Active"
                        ? "success"
                        : seller.status === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {seller.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {seller.joinDate}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    Manage Shop
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
