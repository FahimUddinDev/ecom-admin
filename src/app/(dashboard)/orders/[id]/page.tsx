"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card } from "@/design-system";

export default function OrderDetailPage() {
  const order = {
    id: "#ORD-9821",
    status: "Delivered",
    customer: {
      name: "Alice Thompson",
      email: "alice@example.com",
      avatar: null,
    },
    items: [
      {
        id: 1,
        name: "iPhone 15 Pro",
        price: "$999.00",
        quantity: 1,
        seller: "Tech Haven",
      },
      {
        id: 2,
        name: "Silicone Case",
        price: "$50.00",
        quantity: 1,
        seller: "Tech Haven",
      },
    ],
    summary: {
      subtotal: "$1,049.00",
      shipping: "$0.00",
      total: "$1,049.00",
    },
    date: "March 5, 2024",
  };

  const actions = (
    <>
      <Button variant="ghost">Download Invoice</Button>
      <Button variant="primary">Print Order</Button>
    </>
  );

  return (
    <DetailLayout
      title={`Order ${order.id}`}
      description={`Placed on ${order.date}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Order Items">
            <div className="divide-y divide-[var(--ds-border)]">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="py-4 flex items-center justify-between first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--ds-bg-subtle)] rounded-lg flex items-center justify-center font-bold text-xs">
                      IMG
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-[var(--ds-text-paragraph)]">
                        via {item.seller}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{item.price}</p>
                    <p className="text-xs text-[var(--ds-text-paragraph)]">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Order Summary">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--ds-text-paragraph)]">
                  Subtotal
                </span>
                <span>{order.summary.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--ds-text-paragraph)]">
                  Shipping
                </span>
                <span>{order.summary.shipping}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-[var(--ds-border)] flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[var(--ds-primary)]">
                  {order.summary.total}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Customer">
            <div className="flex items-center gap-3 mb-4">
              <Avatar name={order.customer.name} />
              <div>
                <p className="font-medium">{order.customer.name}</p>
                <p className="text-xs text-[var(--ds-text-paragraph)]">
                  {order.customer.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" className="w-full">
              View Profile
            </Button>
          </Card>

          <Card title="Order Status">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="success">{order.status}</Badge>
              </div>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                Successfully delivered to the customer on March 8, 2024.
              </p>
              <Button className="w-full" variant="ghost">
                Manage Shipment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
