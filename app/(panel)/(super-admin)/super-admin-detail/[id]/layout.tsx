"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import Link from "next/link";
import { LucideHome, LucideUsers, LucideSettings } from "lucide-react";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen">
      {/* ShadCN Sidebar */}
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/panel/super-admin/${id}`} className="flex items-center gap-2">
                      <LucideHome className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/panel/super-admin/${id}/details`} className="flex items-center gap-2">
                      <LucideUsers className="h-4 w-4" />
                      <span>Details</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/panel/super-admin/${id}/settings`} className="flex items-center gap-2">
                      <LucideSettings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
