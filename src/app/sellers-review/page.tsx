"use client";

import { Avatar, Badge, Button, Card, Tag } from "@/design-system";

const kycSubmissions = [
  {
    id: 1,
    seller: "Tech Haven",
    owner: "John Smith",
    document: "Business License.pdf",
    type: "Business",
    submittedAt: "2024-03-01 10:30",
    status: "Pending",
  },
  {
    id: 2,
    seller: "Fashion Forward",
    owner: "Sarah Jenkins",
    document: "ID_Card_Front.jpg",
    type: "Individual",
    submittedAt: "2024-03-02 14:15",
    status: "Pending",
  },
  {
    id: 3,
    seller: "Green Life",
    owner: "Mike Ross",
    document: "Tax_Certificate.pdf",
    type: "Business",
    submittedAt: "2024-03-03 09:45",
    status: "Pending",
  },
  {
    id: 4,
    seller: "Home Comforts",
    owner: "Emma Wilson",
    document: "Passport.pdf",
    type: "Individual",
    submittedAt: "2024-03-03 16:20",
    status: "Pending",
  },
  {
    id: 5,
    seller: "Gadget World",
    owner: "David Lee",
    document: "Trade_License.png",
    type: "Business",
    submittedAt: "2024-03-04 11:00",
    status: "Pending",
  },
];

export default function SellersReviewPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--ds-text-headline)]">
          Seller KYC Moderation
        </h1>
        <p className="text-[var(--ds-text-paragraph)]">
          Review and approve seller verification documents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card variant="flat" className="p-4 flex flex-col gap-1">
          <p className="text-sm text-[var(--ds-text-paragraph)]">
            Pending Approvals
          </p>
          <h3 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            12
          </h3>
        </Card>
        <Card variant="flat" className="p-4 flex flex-col gap-1">
          <p className="text-sm text-[var(--ds-text-paragraph)]">
            Reviewed Today
          </p>
          <h3 className="text-2xl font-bold text-[var(--ds-text-headline)]">
            8
          </h3>
        </Card>
      </div>

      <Card className="p-0 overflow-hidden" variant="flat">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--ds-bg-subtle)] border-b border-[var(--ds-border)]">
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Seller / Shop
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Document Type
              </th>
              <th className="text-left p-4 text-sm font-medium text-[var(--ds-text-paragraph)]">
                Submitted At
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
            {kycSubmissions.map((submission) => (
              <tr
                key={submission.id}
                className="border-b border-[var(--ds-border)] last:border-0 hover:bg-[var(--ds-bg-subtle)] transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" name={submission.seller} />
                    <div>
                      <p className="text-sm font-medium text-[var(--ds-text-headline)]">
                        {submission.seller}
                      </p>
                      <p className="text-xs text-[var(--ds-text-paragraph)]">
                        Owner: {submission.owner}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <Tag
                      color={
                        submission.type === "Business" ? "blue" : "default"
                      }
                    >
                      {submission.type}
                    </Tag>
                    <span className="text-xs text-[var(--ds-primary)] hover:underline cursor-pointer">
                      {submission.document}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm text-[var(--ds-text-paragraph)]">
                  {submission.submittedAt}
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="warning">{submission.status}</Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-green-500"
                    >
                      Approve
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      Reject
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
