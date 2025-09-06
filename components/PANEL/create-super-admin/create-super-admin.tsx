"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSuperAdmin } from "@/components/Auth/superadmin/SuperAdminContext";

export default function CreateSuperAdminForm() {
  const router = useRouter();
  const { addSuperAdmin } = useSuperAdmin();

  const [orgId, setOrgId] = useState("");
  const [adminId, setAdminId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSuperAdmin({ orgId, adminId, email, password });
    alert("Super Admin Created Successfully!");
    router.push("/Home/dashbord"); // Go back to dashboard
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Create Super Admin
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="orgId">Organization ID</Label>
            <Input id="orgId" value={orgId} onChange={(e) => setOrgId(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="adminId">Super Admin ID</Label>
            <Input id="adminId" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl">Create</Button>
        </form>
      </div>
    </div>
  );
}
