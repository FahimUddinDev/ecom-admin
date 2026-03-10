"use client";

import { DetailLayout } from "@/components/shared";
import { Badge, Button, Card, Tag } from "@/design-system";

export default function OfferDetailPage() {
  const offer = {
    id: 1,
    name: "New Year Sale 2024",
    sellerId: 1,
    offerType: "Global",
    discountType: "Percentage",
    discountValue: 50,
    status: "Closed",
    startDate: "2024-01-01",
    endDate: "2024-01-15",
    productCount: 450,
    variantCount: 1200,
    createdAt: "2023-12-25",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Delete Offer
      </Button>
      <Button variant="primary">Edit Offer</Button>
    </>
  );

  return (
    <DetailLayout
      title="Offer Detail"
      description={`Campaign #${offer.id}: ${offer.name}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Offer Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Campaign Name
                </span>
                <p className="font-bold text-lg">{offer.name}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Discount
                </span>
                <p className="flex items-center gap-2">
                  <span className="text-2xl font-black text-[var(--ds-primary)]">
                    {offer.discountValue}%
                  </span>
                  <Tag color="info">Off</Tag>
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Offer Period
                </span>
                <p className="font-medium">
                  {offer.startDate} to {offer.endDate}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Hierarchy Level
                </span>
                <p className="font-medium text-[var(--ds-text-headline)]">
                  {offer.offerType}
                </p>
              </div>
            </div>
          </Card>

          <Card title="Performance / Scale">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">{offer.productCount}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Products Joined
                </p>
              </div>
              <div className="p-4 bg-[var(--ds-bg-subtle)] rounded-lg text-center">
                <p className="text-2xl font-bold">{offer.variantCount}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  Total Variants
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Status & Control">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="default">{offer.status}</Badge>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)] text-sm space-y-2">
                <p className="flex justify-between">
                  <span className="text-[var(--ds-text-paragraph)]">
                    Created On
                  </span>
                  <span className="font-medium">{offer.createdAt}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[var(--ds-text-paragraph)]">
                    Seller ID
                  </span>
                  <span className="font-medium">#{offer.sellerId}</span>
                </p>
              </div>
            </div>
          </Card>

          <Card title="Campaign Tips">
            <p className="text-xs text-[var(--ds-text-paragraph)] leading-relaxed">
              Global offers apply to all selected products regardless of
              category. Ensure inventory levels can support the expected
              increase in traffic.
            </p>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
