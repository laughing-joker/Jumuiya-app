"use client";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Image from "next/image";
import { AppSidebar } from "./app-sidebar";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <Separator />
        </SidebarProvider>
      </div>
    </header>
  );
};

export default Header;
