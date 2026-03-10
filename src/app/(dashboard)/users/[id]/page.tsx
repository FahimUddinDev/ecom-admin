"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card, Tag } from "@/design-system";

export default function UserDetailPage() {
  const user = {
    id: 1,
    name: "Alice Thompson",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    verified: true,
    joined: "2024-01-15",
    lastLogin: "2024-03-09 14:22",
    kycStatus: "Approved",
    ordersCount: 12,
    totalSpent: 1250,
    avatar: "",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Ban User
      </Button>
      <Button variant="primary">Edit User</Button>
    </>
  );

  return (
    <DetailLayout
      title="User Profile"
      description={`Managing account for ${user.name}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Account Information">
            <div className="flex items-start gap-6">
              <Avatar size="xl" name={user.name} />
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                    Full Name
                  </span>
                  <p className="font-bold text-lg">{user.name}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                    Email Address
                  </span>
                  <p className="font-medium text-[var(--ds-text-headline)]">
                    {user.email}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                    Role
                  </span>
                  <p className="mt-1">
                    <Tag
                      color={
                        user.role === "Admin"
                          ? "purple"
                          : user.role === "Seller"
                            ? "blue"
                            : "default"
                      }
                    >
                      {user.role}
                    </Tag>
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                    Member Since
                  </span>
                  <p className="font-medium text-[var(--ds-text-headline)]">
                    {user.joined}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Engagement Metrics">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">{user.ordersCount}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Total Orders
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">${user.totalSpent}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Total Spent
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-lg font-bold truncate">{user.lastLogin}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Last Login
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Security & Compliance">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Account Status</span>
                <Badge variant="success">{user.status}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Email Verified</span>
                <span
                  className={
                    user.verified
                      ? "text-green-500 text-sm font-bold"
                      : "text-gray-400 text-sm"
                  }
                >
                  {user.verified ? "YES" : "NO"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">KYC Status</span>
                <Badge variant="default">{user.kycStatus}</Badge>
              </div>
            </div>
          </Card>

          <Card title="Administrative Notes">
            <p className="text-xs text-[var(--ds-text-paragraph)] leading-relaxed italic">
              User has no reported violations. Account is in good standing.
            </p>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
