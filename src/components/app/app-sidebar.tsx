
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FilePlus2, LayoutDashboard, Settings } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const logo = PlaceHolderImages.find((img) => img.id === "logo");
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, []);

  return (
    <Sidebar>
      <SidebarHeader className="h-14 items-center border-b">
         <div className="flex items-center gap-2">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={30}
              height={30}
              data-ai-hint={logo.imageHint}
              className="rounded-md"
            />
          )}
          <h1 className="font-semibold text-lg truncate">Portal de Visas</h1>
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      <SidebarContent className="flex-grow p-2">
        <SidebarMenu>
          {userRole === 'admin' && (
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
              >
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith("/application")}
              tooltip="Nueva Solicitud"
            >
              <Link href="/application">
                <FilePlus2 />
                <span>Nueva Solicitud</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Configuración">
                    <Settings />
                    <span>Configuración</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
