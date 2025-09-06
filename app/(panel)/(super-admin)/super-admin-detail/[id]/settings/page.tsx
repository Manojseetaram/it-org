"use client";

import { useParams } from "next/navigation";

export default function SuperAdminSettingsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Settings</h1>
      <p className="text-gray-600">Here you can configure Super Admin {id} preferences.</p>
    </div>
  );
}
