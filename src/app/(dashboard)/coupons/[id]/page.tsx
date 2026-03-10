"use client";

import { DetailLayout } from "@/components/shared";
import { Badge, Button, Card } from "@/design-system";

export default function CouponDetailPage() {
  const coupon = {
    id: 1,
    code: "SAVE20",
    type: "Percentage",
    value: "20%",
    minPurchase: 100,
    usageLimit: 500,
    usageCount: 145,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Active",
    createdAt: "2023-12-20",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Delete Coupon
      </Button>
      <Button variant="primary">Edit Coupon</Button>
    </>
  );

  return (
    <DetailLayout
      title="Coupon Detail"
      description={`Coupon ID #${coupon.id}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Coupon Configuration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Coupon Code
                </span>
                <p className="mt-1">
                  <code className="bg-[var(--ds-primary-subtle)] px-3 py-1 rounded-lg text-[var(--ds-primary)] font-black text-xl border border-[var(--ds-primary)] border-dashed">
                    {coupon.code}
                  </code>
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Discount Value
                </span>
                <p className="text-2xl font-bold">
                  {coupon.value}{" "}
                  <span className="text-sm font-normal text-[var(--ds-text-paragraph)]">
                    ({coupon.type})
                  </span>
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Min. Purchase
                </span>
                <p className="font-medium text-lg">${coupon.minPurchase}.00</p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Validity Period
                </span>
                <p className="font-medium">
                  {coupon.startDate} to {coupon.endDate}
                </p>
              </div>
            </div>
          </Card>

          <Card title="Traffic & Usage Analytics">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold">{coupon.usageCount}</p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    Redemptions
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {Math.round((coupon.usageCount / coupon.usageLimit) * 100)}%
                    Used
                  </p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    Limit: {coupon.usageLimit}
                  </p>
                </div>
              </div>
              <div className="h-2 w-full bg-[var(--ds-bg-subtle)] rounded-full overflow-hidden border border-[var(--ds-border)]">
                <div
                  className="h-full bg-[var(--ds-primary)] rounded-full"
                  style={{
                    width: `${(coupon.usageCount / coupon.usageLimit) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Lifecycle Status">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="success">{coupon.status}</Badge>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)] text-sm space-y-2">
                <p className="flex justify-between">
                  <span className="text-[var(--ds-text-paragraph)]">
                    Created On
                  </span>
                  <span className="font-medium">{coupon.createdAt}</span>
                </p>
              </div>
            </div>
          </Card>

          <Card title="Access Policy">
            <div className="flex items-center gap-2 mb-2 text-[var(--ds-primary)]">
              <span className="text-sm font-bold italic">PRO-COUPON</span>
            </div>
            <p className="text-xs text-[var(--ds-text-paragraph)] leading-relaxed">
              This code is globally available. Customers can apply this at
              checkout if they meet the minimum purchase requirement.
            </p>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
