"use client";

import type React from "react";

import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import { Plus } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ElementType;
  };
  actions?: React.ReactNode;
  modals?: {
    logTime: boolean;
    inviteTeammates: boolean;
    createTeam: boolean;
  };
  onOpenModal?: (modal: string) => void;
  onCloseModal?: (modal: string) => void;
}

export function DashboardLayout({
  children,
  title,
  subtitle,
  primaryAction,
  actions,
  modals,
  onOpenModal,
  onCloseModal,
}: DashboardLayoutProps) {
  const defaultPrimaryAction = {
    label: "Log Time",
    onClick: () => onOpenModal?.("logTime"),
    icon: Plus,
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex">
      <Sidebar
        onCreateTeam={() => onOpenModal?.("createTeam")}
        onInviteTeammates={() => onOpenModal?.("inviteTeammates")}
      />

      <div className="flex-1 flex flex-col">
        <Header
          title={title}
          subtitle={subtitle}
          primaryAction={primaryAction || defaultPrimaryAction}
          actions={actions}
        />

        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Modals */}
      <LogTimeModal
        open={modals?.logTime ?? false}
        onOpenChange={() => onCloseModal?.("logTime")}
      />
      <InviteTeammatesModal
        open={modals?.inviteTeammates ?? false}
        onOpenChange={() => onCloseModal?.("inviteTeammates")}
      />
      <CreateTeamModal
        open={modals?.createTeam ?? false}
        onOpenChange={() => onCloseModal?.("createTeam")}
      />
    </div>
  );
}
