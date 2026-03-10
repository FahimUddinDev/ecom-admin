"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card } from "@/design-system";

export default function AddressDetailPage() {
  const address = {
    id: 1,
    userId: 450,
    user: {
      name: "Alice Thompson",
      email: "alice@example.com",
    },
    street: "123 Maple Street",
    addressLine: "Apt 4B, Building 2",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    postalCode: "E1 6AN",
    latitude: 51.5074,
    longitude: -0.1278,
    status: "Active",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Delete Address
      </Button>
      <Button variant="primary">Edit Address</Button>
    </>
  );

  return (
    <DetailLayout
      title="Address Detail"
      description={`Record ID #${address.id}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Detailed Location">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Street
                </span>
                <p className="font-bold text-lg">{address.street}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Address Line
                </span>
                <p className="font-medium text-[var(--ds-text-headline)]">
                  {address.addressLine}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  City / State
                </span>
                <p className="font-medium">
                  {address.city}, {address.state}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--ds-text-paragraph)] uppercase tracking-wider">
                  Country / Postal Code
                </span>
                <p className="font-medium">
                  {address.country} {address.postalCode}
                </p>
              </div>
            </div>
          </Card>

          <Card title="Coordinates & Map Data">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[var(--ds-bg-subtle)] rounded-lg">
                <span className="text-xs text-[var(--ds-text-paragraph)]">
                  Latitude
                </span>
                <p className="font-mono text-sm">{address.latitude}</p>
              </div>
              <div className="p-3 bg-[var(--ds-bg-subtle)] rounded-lg">
                <span className="text-xs text-[var(--ds-text-paragraph)]">
                  Longitude
                </span>
                <p className="font-mono text-sm">{address.longitude}</p>
              </div>
              <div className="col-span-2 aspect-video bg-[var(--ds-bg-subtle)] rounded-xl border border-[var(--ds-border)] flex items-center justify-center text-[var(--ds-text-paragraph)] text-sm italic">
                Map view placeholder
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Associated User">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar name={address.user.name} />
                <div>
                  <p className="font-medium">{address.user.name}</p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    {address.user.email}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)] text-sm">
                <p className="flex justify-between">
                  <span className="text-[var(--ds-text-paragraph)]">
                    User ID
                  </span>
                  <span className="font-medium">#{address.userId}</span>
                </p>
              </div>
              <Button variant="ghost" className="w-full">
                View Customer Profile
              </Button>
            </div>
          </Card>

          <Card title="Status & Visibility">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="success">{address.status}</Badge>
              </div>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                This address is active and available for customer orders.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
