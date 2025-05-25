"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ElementType;
  };
  actions?: React.ReactNode;
}

export function Header({
  title,
  subtitle,
  primaryAction,
  actions,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-[#e5e7eb] px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          {subtitle && <p className="text-[#9ca3af]">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          {primaryAction && (
            <Button
              onClick={primaryAction.onClick}
              className="bg-[#1f2937] hover:bg-[#374151] cursor-pointer"
            >
              {primaryAction.icon && (
                <primaryAction.icon className="w-4 h-4 mr-2" />
              )}
              {primaryAction.label}
            </Button>
          )}
          {actions}
          <Button variant="ghost" size="icon" className=" cursor-pointer">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className=" cursor-pointer">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
