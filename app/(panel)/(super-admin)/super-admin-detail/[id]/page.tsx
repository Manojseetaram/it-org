// "use client";

// import { useParams } from "next/navigation";
// import { useSuperAdmin } from "@/components/Auth/superadmin/SuperAdminContext";

// export default function SuperAdminDetailPage() {
//   const params = useParams();
//   const { superAdmins } = useSuperAdmin();

//   const admin = superAdmins.find((a) => a.adminId === params.id);

//   if (!admin) {
//     return <p className="text-center text-red-500">Super Admin not found.</p>;
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
//       <h1 className="text-2xl font-bold text-blue-600 mb-6">Super Admin Detail</h1>
//       <div className="bg-white shadow rounded-xl p-6 w-full max-w-md space-y-3">
//         <p><span className="font-semibold">Admin ID:</span> {admin.adminId}</p>
//         <p><span className="font-semibold">Org ID:</span> {admin.orgId}</p>
//         <p><span className="font-semibold">Email:</span> {admin.email}</p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useParams } from "next/navigation";

export default function SuperAdminDashboardPage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Welcome, Super Admin {id}
      </h1>
      <p className="text-gray-600">This is your dashboard overview.</p>
    </div>
  );
}
