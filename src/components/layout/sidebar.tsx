"use client";

import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS, TEAMS } from "@/lib/constants";
import { Plus, UserPlus, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import boy1 from "../../../public/boy1.svg";

interface SidebarProps {
  onCreateTeam?: () => void;
  onInviteTeammates?: () => void;
  user?: {
    name: string;
    plan: string;
    walletAddress: string;
  };
}

export function Sidebar({
  onCreateTeam,
  onInviteTeammates,
  user,
}: SidebarProps) {
  const pathname = usePathname();

  const defaultUser = {
    name: "Alex Morgan",
    plan: "Pro Plan",
    walletAddress: "0x7E5F...4E3D",
  };

  const currentUser = user || defaultUser;

  const isActive = (href: string) => pathname === href;

  const groupedItems = NAVIGATION_ITEMS.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, typeof NAVIGATION_ITEMS>);

  return (
    <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <div>
            <div className="font-semibold text-black">Track 3</div>
            <div className="text-xs text-[#9ca3af]">Developer Edition</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {Object.entries(groupedItems).map(([section, items]) => (
          <div key={section} className="space-y-1 mb-8">
            <div className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider mb-3">
              {section}
            </div>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-[#f3f4f6] text-black"
                      : "text-[#4b5563] hover:bg-[#f3f4f6]"
                  }`}
                >
                  {typeof Icon === "string" ? (
                    <Image
                      src={Icon}
                      alt={item.label}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  ) : typeof Icon === "function" ? (
                    <Icon className="w-4 h-4" />
                  ) : null}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}

        {/* Teams Section */}
        <div className="mt-8">
          <div className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider mb-3">
            Your Teams
          </div>
          <div className="space-y-2">
            {TEAMS.map((team) => (
              <div key={team.id} className="text-sm text-[#4b5563]">
                {team.name}
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-[#4b5563] h-8"
              onClick={onCreateTeam}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Team
            </Button>
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-[#e5e7eb]">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={boy1}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-black">
              {currentUser.name}
            </div>
            <div className="text-xs text-[#9ca3af]">{currentUser.plan}</div>
          </div>
        </div>
        <div className="text-xs text-[#9ca3af] mb-2">
          {currentUser.walletAddress}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={onInviteTeammates}>
            <UserPlus className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <HelpCircle className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
