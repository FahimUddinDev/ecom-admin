"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 shrink-0">
        <Header />
      </div>

      {/* Content area offset by header height */}
      <div className="flex pt-16 h-full">
        {/* Sidebar container */}
        <div className="h-[calc(100vh-4rem)]">
          <Sidebar />
        </div>

        {/* Main content container */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-4rem)] p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
