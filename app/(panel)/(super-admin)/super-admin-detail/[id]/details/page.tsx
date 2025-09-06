"use client";

import { useParams } from "next/navigation";
import { useSuperAdmin } from "@/components/Auth/superadmin/SuperAdminContext";

export default function SuperAdminDetailsPage() {
  const { id } = useParams();
  const { superAdmins } = useSuperAdmin();

  const admin = superAdmins.find((a) => a.adminId === id);

  if (!admin) {
    return <p className="text-red-500">Super Admin not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Super Admin Details</h1>
      <p><span className="font-semibold">Admin ID:</span> {admin.adminId}</p>
      <p><span className="font-semibold">Org ID:</span> {admin.orgId}</p>
      <p><span className="font-semibold">Email:</span> {admin.email}</p>
    </div>
  );
}
