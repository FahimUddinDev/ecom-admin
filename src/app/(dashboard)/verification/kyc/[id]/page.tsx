"use client";

import { DetailLayout } from "@/components/shared";
import { Avatar, Badge, Button, Card } from "@/design-system";

export default function KYCRequestDetailPage() {
  const request = {
    id: 1,
    userId: 450,
    user: {
      name: "Alice Thompson",
      email: "alice@example.com",
    },
    title: "Passport Verification",
    status: "Pending",
    documentUrl: "#",
    createdAt: "March 8, 2024",
    notes: "Customer uploaded a high-quality scan of their UK passport.",
  };

  const actions = (
    <>
      <Button variant="ghost" className="text-red-500">
        Reject
      </Button>
      <Button variant="primary">Approve Request</Button>
    </>
  );

  return (
    <DetailLayout
      title="KYC Request Detail"
      description={`Submission ID #${request.id}`}
      actions={actions}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Submitted Document">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-[var(--ds-bg-subtle)] border-2 border-dashed border-[var(--ds-border)] rounded-xl flex flex-col items-center justify-center text-[var(--ds-text-paragraph)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2 opacity-50"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <p className="font-medium">passport_scan_alice.pdf</p>
                <p className="text-xs">2.4 MB</p>
                <Button variant="ghost" size="sm" className="mt-4">
                  Download Document
                </Button>
              </div>
              <div>
                <span className="text-sm font-medium block mb-1">
                  Additional Notes:
                </span>
                <p className="text-sm text-[var(--ds-text-paragraph)]">
                  {request.notes}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="User Information">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar name={request.user.name} />
                <div>
                  <p className="font-medium">{request.user.name}</p>
                  <p className="text-xs text-[var(--ds-text-paragraph)]">
                    {request.user.email}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--ds-border)]">
                <p className="text-sm font-medium mb-1">User ID</p>
                <p className="text-sm text-[var(--ds-text-paragraph)]">
                  #{request.userId}
                </p>
              </div>
              <Button variant="ghost" className="w-full">
                View User History
              </Button>
            </div>
          </Card>

          <Card title="Verification Status">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Current Status</span>
                <Badge variant="warning">{request.status}</Badge>
              </div>
              <p className="text-xs text-[var(--ds-text-paragraph)]">
                This request is waiting for manual review by an admin.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
}
