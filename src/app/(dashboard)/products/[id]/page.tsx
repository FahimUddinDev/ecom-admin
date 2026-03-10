"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card, Tag } from "@/design-system";

export default function ProductDetailPage() {
  const product = {
    id: 1,
    name: "Ultra HD Smart Camera 4K",
    sku: "CAM-4K-001",
    price: 299.99,
    category: "Electronics",
    subCategory: "Cameras",
    childCategory: "Action Cameras",
    status: "Active",
    stock: 154,
    sales: 1205,
    revenue: 361488.0,
    seller: "TechGadgets Inc.",
    rating: 4.8,
    reviews: 245,
    description:
      "High-performance action camera with 4K resolution, waterproof housing, and image stabilization.",
    createdAt: "2023-11-01",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Delete Product
      </Button>
      <Button variant="primary">Edit Product</Button>
    </>
  );

  return (
    <DetailLayout
      title="Product Intelligence"
      description={`SKU: ${product.sku} | ${product.name}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Product Analytics">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">${product.price}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Retail Price
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold text-green-500">
                  {product.stock}
                </p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  In Stock
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">{product.sales}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Total Sales
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold italic">★ {product.rating}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  {product.reviews} Reviews
                </p>
              </div>
            </div>
          </Card>

          <Card title="Catalog & Classification">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Seller
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar size="xs" name={product.seller} />
                  <p className="font-bold">{product.seller}</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Status
                </span>
                <p className="mt-1">
                  <Badge variant="success">{product.status}</Badge>
                </p>
              </div>
              <div className="col-span-2 space-y-2">
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Hierarchy
                </span>
                <div className="flex gap-2">
                  <Tag color="info">{product.category}</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag color="info">{product.subCategory}</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag color="info">{product.childCategory}</Tag>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Product Description">
            <p className="text-sm leading-relaxed text-[var(--ds-text-headline)]">
              {product.description}
            </p>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Media Assets">
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-[var(--ds-bg-subtle)] rounded border border-[var(--ds-border)] flex items-center justify-center text-xs text-gray-500">
                Main
              </div>
              <div className="aspect-square bg-[var(--ds-bg-subtle)] rounded border border-[var(--ds-border)] flex items-center justify-center text-xs text-gray-500">
                Angle 1
              </div>
              <div className="aspect-square bg-[var(--ds-bg-subtle)] rounded border border-[var(--ds-border)] flex items-center justify-center text-xs text-gray-500">
                Angle 2
              </div>
              <div className="aspect-square bg-[var(--ds-bg-subtle)] rounded border border-[var(--ds-border)] flex items-center justify-center text-xs text-gray-500">
                +1 more
              </div>
            </div>
          </Card>

          <Card
            title="Performance Chart"
            className="h-48 flex items-center justify-center bg-black/5"
          >
            <p className="text-xs text-gray-400">
              Revenue Velocity Chart Placeholder
            </p>
          </Card>

          <Card title="Lifecycle">
            <div className="text-xs space-y-2 text-[var(--ds-text-paragraph)]">
              <div className="flex justify-between font-medium">
                <span>Listed On</span>
                <span className="text-[var(--ds-text-headline)] uppercase tracking-tighter">
                  {product.createdAt}
                </span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Revenue</span>
                <span className="text-[var(--ds-primary)] font-black text-sm">
                  ${product.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
