"use client";

import * as React from "react";
import Image from "next/image";
import {
  IconBell,
  IconHome,
  IconSettings,
  IconUserCircle,
  IconBox,
} from "@tabler/icons-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Playfair_Display } from "next/font/google";

// ✅ Move font initialization outside the component
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const data = {
  user: {
    //user data stays here//
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Home", url: "/src/app/Dashboard", icon: IconHome },
    { title: "Account", url: "#", icon: IconUserCircle },
    { title: "Announcement", url: "#", icon: IconBell },
    { title: "Contribution", url: "#", icon: IconBox },
    { title: "Settings", url: "#", icon: IconSettings },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Sidebar Header with Image */}
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="relative w-18 h-14 rounded-full overflow-hidden shadow-md">
            <Image
              src="/Mt.Theresea wa calcuta .jpg"
              alt="Mt. Theresia wa Calcutta"
              fill
              className="object-cover"
            />
          </div>
          <span
            className={`${playfair.className} font-semibold text-lg tracking-wide`}
          >
            Mt. Theresia wa Calcutta
          </span>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
