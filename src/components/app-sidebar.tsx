"use client";

import {
  Flower,
  Globe,
  Home,
  School,
  Settings,
  Star,
  StretchHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
    title: "Ta Cia Che Yin",
    url: "/ta-cia-che-yin",
    icon: Globe,
  },
  {
    title: "Aksobhya Buddha",
    url: "/aksobhyabuddha",
    icon: Star,
  },
  {
    title: "Padmasambhava",
    url: "/om-a-hung",
    icon: StretchHorizontal,
  },
  {
    title: "Xiong Cher San Hua",
    url: "/xiong-cher-san-hua",
    icon: School,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
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
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-3">
          <Image
            height={40}
            width={40}
            src="/Logo.png"
            alt="FBC Logo"
            className="rounded-full w-10 h-10 object-cover ring-1 ring-sidebar-border"
          />
          <div className="flex flex-col">
            <p className="font-serif text-base font-semibold leading-tight text-sidebar-foreground">
              Flourishing Buddhist Center
            </p>
            <p className="text-xs text-sidebar-foreground/60">
              Chant companion
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-2.5 text-xs uppercase tracking-wider text-sidebar-foreground/60">
            Chants
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title} onClick={onClick}>
                    <SidebarMenuButton asChild isActive={isActive} size="lg">
                      <Link
                        href={item.url}
                        className={cn(
                          "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60"
                        )}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary" />
                        )}
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-4 text-xs text-sidebar-foreground/50">
        Read along, tap to count.
      </SidebarFooter>
    </Sidebar>
  );
}
