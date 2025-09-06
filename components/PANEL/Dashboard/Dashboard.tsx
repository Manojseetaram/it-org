"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        {/* Create Super Admin Card */}
        <div
          className="cursor-pointer bg-sky-500 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center py-12 hover:scale-105 transition-transform duration-200"
          onClick={() => router.push("/create")}
        >
          <div className="text-5xl mb-4">➕</div>
          <h2 className="text-xl font-bold text-center">Create Super Admin</h2>
        </div>

        {/* View Super Admin Card */}
        <div
          className="cursor-pointer bg-sky-500 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center py-12 hover:scale-105 transition-transform duration-200"
          onClick={() => router.push("/view")}
        >
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-xl font-bold text-center">View Super Admin</h2>
        </div>
      </div>
    </div>
  );
}
