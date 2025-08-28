"use client";
import { AppSidebar } from "@/components/layouts/AppSidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./AppHeader";
import { getBreadcrumbs } from "@/lib/breadcrumb";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);
  console.log({ breadcrumbs });
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader breadcrumbs={breadcrumbs} />
        <main className="">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
