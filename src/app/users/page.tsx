"use client";

import {
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Select,
  Tag,
} from "@/design-system";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Alice Thompson",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    verified: true,
    joined: "2024-01-15",
  },
  {
    id: 2,
    name: "Bob Richards",
    email: "bob@example.com",
    role: "Seller",
    status: "Pending",
    verified: false,
    joined: "2024-02-10",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "User",
    status: "Banned",
    verified: true,
    joined: "2023-11-20",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    role: "Admin",
    status: "Active",
    verified: true,
    joined: "2023-05-01",
  },
  {
    id: 5,
    name: "Edward Norton",
    email: "edward@example.com",
    role: "User",
    status: "Active",
    verified: false,
    joined: "2024-03-05",
  },
];

export default function UsersPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            User Directory
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Manage all platform participants and their roles.
          </p>
        </div>
        <Button>Add New User</Button>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-40">
          <Select
            defaultValue="all"
            options={[
              { label: "All Roles", value: "all" },
              { label: "Admin", value: "admin" },
              { label: "Seller", value: "seller" },
              { label: "User", value: "user" },
            ]}
          />
        </div>
        <div className="w-full md:w-40">
          <Select
            defaultValue="all"
            options={[
              { label: "All Status", value: "all" },
              { label: "Active", value: "active" },
              { label: "Pending", value: "pending" },
              { label: "Banned", value: "banned" },
            ]}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                User
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Role
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Verification
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Joined
              </th>
              <th className="text-right p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" name={user.name} />
                    <div>
                      <p className="text-sm font-medium text-[var(--ds-text-headline)]">
                        {user.name}
                      </p>
                      <p className="text-xs text-[var(--ds-text-paragraph)]">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
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
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      user.status === "Active"
                        ? "success"
                        : user.status === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {user.status}
                  </Badge>
                </td>
                <td className="p-4 text-sm">
                  {user.verified ? (
                    <span className="flex items-center gap-1 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Verified
                    </span>
                  ) : (
                    <span className="text-[var(--ds-text-paragraph)]">
                      Unverified
                    </span>
                  )}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {user.joined}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-500">
                    Ban
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
