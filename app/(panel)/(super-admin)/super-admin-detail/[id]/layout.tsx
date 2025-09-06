"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Super Admin</h2>
        <nav className="flex flex-col space-y-3">
          <Link href={`/panel/super-admin/${id}`} className="text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href={`/panel/super-admin/${id}/details`} className="text-gray-700 hover:text-blue-600">
            Details
          </Link>
          <Link href={`/panel/super-admin/${id}/settings`} className="text-gray-700 hover:text-blue-600">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
