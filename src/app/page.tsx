"use client";

import { Avatar, Badge, Card } from "@/design-system";
import { cn } from "@/lib/cn";

// Icons
const SalesIcon = () => (
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
    <path d="M12 2v20" />
    <path d="m17 5-5-3-5 3" />
    <path d="m17 19-5 3-5-3" />
    <path d="M2 12h20" />
    <path d="m5 7 3 5-3 5" />
    <path d="m19 7-3 5 3 5" />
  </svg>
);
const RevenueIcon = () => (
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
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const OrdersIcon = () => (
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
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);
const UsersIcon = () => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const stats = [
  {
    label: "Total Sales",
    value: "$128,430",
    change: "+12.5%",
    icon: <SalesIcon />,
    color: "text-blue-500",
  },
  {
    label: "Platform Revenue",
    value: "$19,264",
    change: "+8.2%",
    icon: <RevenueIcon />,
    color: "text-green-500",
  },
  {
    label: "Total Orders",
    value: "1,240",
    change: "+14.1%",
    icon: <OrdersIcon />,
    color: "text-purple-500",
  },
  {
    label: "Active Users",
    value: "8,942",
    change: "+5.3%",
    icon: <UsersIcon />,
    color: "text-orange-500",
  },
];

const recentOrders = [
  {
    id: "#ORD-7432",
    customer: "John Doe",
    items: 3,
    total: "$240.00",
    status: "Delivered",
    date: "2 mins ago",
  },
  {
    id: "#ORD-7431",
    customer: "Jane Smith",
    items: 1,
    total: "$85.50",
    status: "Processing",
    date: "15 mins ago",
  },
  {
    id: "#ORD-7430",
    customer: "Robert Brown",
    items: 2,
    total: "$120.00",
    status: "Pending",
    date: "1 hour ago",
  },
  {
    id: "#ORD-7429",
    customer: "Emily White",
    items: 5,
    total: "$450.25",
    status: "Shipped",
    date: "3 hours ago",
  },
  {
    id: "#ORD-7428",
    customer: "Michael Wilson",
    items: 1,
    total: "$25.00",
    status: "Cancelled",
    date: "5 hours ago",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
          Dashboard Overview
        </h1>
        <p className="text-[var(--ds-text-paragraph)]">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} variant="flat" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={cn(
                  "p-2 rounded-lg bg-[var(--ds-bg-subtle)]",
                  stat.color,
                )}
              >
                {stat.icon}
              </div>
              <Badge
                variant={stat.change.startsWith("+") ? "success" : "danger"}
              >
                {stat.change}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-[var(--ds-text-paragraph)] mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-[var(--ds-text-headline)]">
                {stat.value}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts Mockup */}
        <Card className="lg:col-span-2 p-6 flex flex-col gap-6" variant="flat">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[var(--ds-text-headline)]">
              Sales Analytics
            </h3>
            <select className="bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] rounded-md px-2 py-1 text-sm outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="flex-1 min-h-[300px] flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[var(--ds-primary)] opacity-20 hover:opacity-100 transition-opacity rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-[var(--ds-text-paragraph)] px-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-0 flex flex-col" variant="flat">
          <div className="p-6 border-b border-[var(--ds-border)]">
            <h3 className="font-semibold text-[var(--ds-text-headline)]">
              Recent Activity
            </h3>
          </div>
          <div className="flex-1 overflow-auto max-h-[400px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="p-4 border-b last:border-0 border-[var(--ds-border)] flex gap-3"
              >
                <Avatar size="sm" />
                <div>
                  <p className="text-sm text-[var(--ds-text-headline)]">
                    <span className="font-medium">Seller #23</span> uploaded 5
                    new products to{" "}
                    <span className="text-[var(--ds-primary)]">
                      Electronics
                    </span>
                  </p>
                  <p className="text-xs text-[var(--ds-text-paragraph)] mt-1">
                    10 minutes ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="p-0 overflow-hidden" variant="flat">
        <div className="p-6 border-b border-[var(--ds-border)] flex items-center justify-between">
          <h3 className="font-semibold text-[var(--ds-text-headline)]">
            Recent Orders
          </h3>
          <button className="text-sm text-[var(--ds-primary)] hover:underline">
            View All
          </button>
        </div>
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
                Items
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Total
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4 text-sm text-[var(--ds-text-headline)] font-medium">
                  {order.id}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.customer}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.items}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-headline)] font-medium">
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
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
