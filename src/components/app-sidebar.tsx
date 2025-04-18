"use client";

import { Flower, Globe, Home, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Buddha 35",
    url: "/buddha-35",
    icon: Flower,
  },
  {
    title: "Aksobhya Buddha",
    url: "/aksobhyabuddha",
    icon: Star,
  },
  {
    title: "Ta Cia Che Yin",
    url: "/ta-cia-che-yin",
    icon: Globe,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpen, setOpenMobile } = useSidebar();

  const onClick = () => {
    setOpen(false);
    setOpenMobile(false);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} onClick={onClick}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        "flex items-center gap-3 px-2.5 py-2 rounded-md text-sm transition-colors",
                        pathname === item.url
                          ? "bg-muted text-primary font-semibold"
                          : "hover:bg-muted/50 text-muted-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
