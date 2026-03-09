"use client";

import { Badge, Button, Card, Input, Select, Tag } from "@/design-system";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    seller: "Tech Haven",
    category: "Electronics",
    price: "$999.00",
    stock: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    seller: "Fashion Forward",
    category: "Fashion",
    price: "$25.00",
    stock: 120,
    status: "Active",
  },
  {
    id: 3,
    name: "Organic Fertilizer",
    seller: "Green Life",
    category: "Home & Garden",
    price: "$15.00",
    stock: 8,
    status: "Pending",
  },
  {
    id: 4,
    name: "MacBook Pro M3",
    seller: "Tech Haven",
    category: "Electronics",
    price: "$1,999.00",
    stock: 12,
    status: "Active",
  },
  {
    id: 5,
    name: "Summer Dress",
    seller: "Fashion Forward",
    category: "Fashion",
    price: "$45.00",
    stock: 0,
    status: "Out of Stock",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            Product Moderation
          </h1>
          <p className="text-[var(--ds-text-paragraph)]">
            Review and manage all products listed by sellers.
          </p>
        </div>
      </div>

      <Card variant="flat" className="p-4 flex flex-wrap gap-4 items-center">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search products or sellers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-40">
          <Select
            defaultValue="all"
            options={[
              { label: "All Categories", value: "all" },
              { label: "Electronics", value: "electronics" },
              { label: "Fashion", value: "fashion" },
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
              { label: "Out of Stock", value: "out-of-stock" },
            ]}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Product
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Seller
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Category
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Price
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Stock
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
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] flex items-center justify-center overflow-hidden shrink-0">
                      <span className="text-xs text-[var(--ds-text-paragraph)]">
                        IMG
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[var(--ds-text-headline)] truncate max-w-[200px]">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {product.seller}
                </td>
                <td className="p-4">
                  <Tag color="info">{product.category}</Tag>
                </td>
                <td className="p-4 text-sm font-medium text-[var(--ds-text-headline)]">
                  {product.price}
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {product.stock}
                </td>
                <td className="p-4 text-sm">
                  <Badge
                    variant={
                      product.status === "Active"
                        ? "success"
                        : product.status === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {product.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      Suspend
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
