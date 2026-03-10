"use client";

import { ListLayout } from "@/components/shared";
import { Badge, Button, Card, Input, Select } from "@/design-system";
import { useState } from "react";

const orders = [
  {
    id: "#ORD-9821",
    customer: "Alice Thompson",
    seller: "Tech Haven",
    total: "$1,049.00",
    status: "Delivered",
    payment: "Paid",
    date: "2024-03-05",
  },
  {
    id: "#ORD-9822",
    customer: "Bob Richards",
    seller: "Fashion Forward",
    total: "$45.50",
    status: "Processing",
    payment: "Paid",
    date: "2024-03-06",
  },
  {
    id: "#ORD-9823",
    customer: "Charlie Davis",
    seller: "Green Life",
    total: "$120.00",
    status: "Shipped",
    payment: "Pending",
    date: "2024-03-06",
  },
  {
    id: "#ORD-9824",
    customer: "Diana Prince",
    seller: "Home Comforts",
    total: "$280.00",
    status: "Pending",
    payment: "Paid",
    date: "2024-03-07",
  },
  {
    id: "#ORD-9825",
    customer: "Edward Norton",
    seller: "Tech Haven",
    total: "$1,999.00",
    status: "Cancelled",
    payment: "Refunded",
    date: "2024-03-07",
  },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filters = (
    <>
      <div className="w-full md:w-64">
        <Input
          placeholder="Search order ID or customer..."
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
            { label: "Processing", value: "processing" },
            { label: "Shipped", value: "shipped" },
            { label: "Delivered", value: "delivered" },
            { label: "Cancelled", value: "cancelled" },
          ]}
        />
      </div>
      <div className="w-full md:w-40">
        <Select
          defaultValue="all"
          options={[
            { label: "All Payment", value: "all" },
            { label: "Paid", value: "paid" },
            { label: "Pending", value: "pending" },
            { label: "Refunded", value: "refunded" },
          ]}
        />
      </div>
    </>
  );

  const pagination = (
    <div className="flex items-center justify-between text-sm text-[var(--ds-text-paragraph)]">
      <div>Showing 1 to 5 of 5 entries</div>
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
      title="Global Orders List"
      description="Monitor and manage all transactions across the platform."
      filters={filters}
      pagination={pagination}
    >
      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Order ID
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Customer
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Seller
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Total
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Payment
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Date
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {order.id}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.customer}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.seller}
                </td>
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {order.total}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      order.status === "Delivered"
                        ? "success"
                        : order.status === "Processing"
                          ? "info"
                          : order.status === "Cancelled"
                            ? "danger"
                            : "warning"
                    }
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      order.payment === "Paid"
                        ? "success"
                        : order.payment === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {order.payment}
                  </Badge>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.date}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View Details
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
