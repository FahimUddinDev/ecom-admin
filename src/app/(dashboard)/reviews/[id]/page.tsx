"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card } from "@/design-system";

export default function ReviewDetailPage() {
  const review = {
    id: 1,
    product: {
      id: 123,
      name: "iPhone 15 Pro",
      image: null,
    },
    user: {
      name: "Alice Thompson",
      email: "alice@example.com",
    },
    orderId: "#ORD-9821",
    rating: 5,
    comment:
      "Amazing camera and build quality! I've been using it for a week and the battery life is also impressive.",
    images: [],
    status: "Public",
    createdAt: "March 5, 2024",
    updatedAt: "March 5, 2024",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Delete Review
      </Button>
      <Button variant="primary">Edit Review</Button>
    </>
  );

  return (
    <DetailLayout
      title="Review Details"
      description={`Review ID #${review.id}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Review Content">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Rating:</span>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? "opacity-100" : "opacity-20"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium block mb-1">Comment:</span>
                <p className="text-[var(--ds-text-paragraph)] bg-[var(--ds-bg-subtle)] p-4 rounded-lg italic">
                  "{review.comment}"
                </p>
              </div>
              {review.images.length > 0 && (
                <div>
                  <span className="text-sm font-medium block mb-2">
                    Attached Images:
                  </span>
                  <div className="flex gap-2">
                    {/* Image placeholders */}
                    <div className="w-20 h-20 bg-[var(--ds-bg-subtle)] rounded-lg border border-[var(--ds-border)]"></div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card title="Product Information">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[var(--ds-bg-subtle)] rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                IMG
              </div>
              <div>
                <p className="font-bold text-lg">{review.product.name}</p>
                <p className="text-sm text-[var(--ds-text-paragraph)]">
                  Product ID: {review.product.id}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 p-0 h-auto text-[var(--ds-primary)]"
                >
                  View Product
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Author & Context">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar name={review.user.name} />
                <div>
                  <p className="font-medium">{review.user.name}</p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    {review.user.email}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)]">
                <p className="text-sm font-medium mb-1">Associated Order</p>
                <p className="text-sm text-[var(--ds-primary)] font-medium cursor-pointer">
                  {review.orderId}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Submitted On</p>
                <p className="text-sm text-[var(--ds-text-paragraph)]">
                  {review.createdAt}
                </p>
              </div>
            </div>
          </Card>

          <Card title="Moderation Status">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge
                  variant={review.status === "Public" ? "success" : "warning"}
                >
                  {review.status}
                </Badge>
              </div>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                This review is currently visible to all customers on the product
                page.
              </p>
              <Button className="w-full" variant="ghost">
                Hide Review
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
