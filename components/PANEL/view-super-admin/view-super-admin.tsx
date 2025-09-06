"use client";

import { useSuperAdmin } from "@/components/Auth/superadmin/SuperAdminContext";
import { useRouter } from "next/navigation";

export default function ViewSuperAdmin() {
  const { superAdmins } = useSuperAdmin();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-50 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Super Admins</h2>

      {superAdmins.length === 0 ? (
        <p className="text-gray-500 text-center">No super admins created yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {superAdmins.map((admin) => (
            <div
              key={admin.adminId}
              onClick={() => router.push(`/super-admin-detail/${admin.adminId}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-2 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-sky-600">{admin.adminId}</h3>
              <p>
                <span className="font-semibold">Org ID:</span> {admin.orgId}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {admin.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
