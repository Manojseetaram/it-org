"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SuperAdmin {
  orgId: string;
  adminId: string;
  email: string;
  password: string;
}

interface SuperAdminContextType {
  superAdmins: SuperAdmin[];
  addSuperAdmin: (admin: SuperAdmin) => void;
}

const SuperAdminContext = createContext<SuperAdminContextType | undefined>(
  undefined
);

export function SuperAdminProvider({ children }: { children: ReactNode }) {
  const [superAdmins, setSuperAdmins] = useState<SuperAdmin[]>([]);

  const addSuperAdmin = (admin: SuperAdmin) => {
    setSuperAdmins((prev) => [...prev, admin]);
  };

  return (
    <SuperAdminContext.Provider value={{ superAdmins, addSuperAdmin }}>
      {children}
    </SuperAdminContext.Provider>
  );
}

export function useSuperAdmin() {
  const context = useContext(SuperAdminContext);
  if (!context) throw new Error("useSuperAdmin must be used inside Provider");
  return context;
}
