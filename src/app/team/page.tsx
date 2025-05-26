"use client";

import { JSX, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sidebar } from "@/components/layout/sidebar";
// import { Header } from "@/components/layout/header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import {
  Settings,
  Share2,
  UserPlus,
  TrendingUp,
  TrendingDown,
  Circle,
} from "lucide-react";
import Image from "next/image";
import people from "../../../public/team.svg";
import { Progress } from "@/components/ui/progress";
import boy1 from "../../../public/boy1.svg";
import girl1 from "../../../public/girl1.svg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: JSX.Element;
  todayHours: string;
  weekHours: string;
  currentProject: string;
  status: string;
  awayTime?: string;
}

export default function TeamWorkspace() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activityFilter, setActivityFilter] = useState("today");
  const [modals, setModals] = useState({
    logTime: false,
    inviteTeammates: false,
    createTeam: false,
  });

  const user = {
    name: "Alex Morgan",
    plan: "Pro Plan",
    walletAddress: "0x7E5F...4E3D",
  };

  const openModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  const teamStats = [
    {
      title: "Total Team Hours This Week",
      value: "86.5",
      change: "+12%",
      trend: "up",
      subtitle: "vs last week",
    },
    {
      title: "Average Daily Focus Time",
      value: "4.2",
      unit: "hrs",
      change: "-3%",
      trend: "down",
      subtitle: "per member",
    },
    {
      title: "Team Goals Progress",
      value: "3/5",
      status: "On track",
      subtitle: "this month",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: <Image src={boy1} alt="icon" />,
      action: "Logged 3.5 hours on UI Redesign",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Sarah Chen",
      avatar: <Image src={girl1} alt="icon" />,
      action: "Completed goal Fix Critical Bugs",
      time: "4 hours ago",
    },
    {
      id: 3,
      user: "Miguel Ramirez",
      avatar: <Image src={boy1} alt="icon" />,
      action: "Logged 2 hours on API Integration",
      time: "5 hours ago",
    },
    {
      id: 4,
      user: "Jordan Lee",
      avatar: <Image src={boy1} alt="icon" />,
      action: "Created new goal Optimize Loading Times",
      time: "yesterday",
    },
    {
      id: 5,
      user: "Taylor Smith",
      avatar: <Image src={girl1} alt="icon" />,
      action: "Logged 5.5 hours on Component Library",
      time: "yesterday",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Developer",
      avatar: <Image src={girl1} alt="icon" />,
      todayHours: "3.5 hrs",
      weekHours: "18.2 hrs",
      currentProject: "UI Redesign",
      status: "active",
    },
    {
      id: 2,
      name: "Martin Vibes",
      role: "Frontend Developer",
      avatar: <Image src={boy1} alt="icon" />,
      todayHours: "4.2 hrs",
      weekHours: "20.5 hrs",
      currentProject: "Bug Fixes",
      status: "away",
      awayTime: "15m",
    },
    {
      id: 3,
      name: "Miguel Ramirez",
      role: "Backend Developer",
      avatar: <Image src={boy1} alt="icon" />,
      todayHours: "2.0 hrs",
      weekHours: "15.8 hrs",
      currentProject: "API Integration",
      status: "active",
    },
    {
      id: 5,
      name: "Taylor Smith",
      role: "Frontend Developer",
      avatar: <Image src={girl1} alt="icon" />,
      todayHours: "5.5 hrs",
      weekHours: "22.5 hrs",
      currentProject: "Component Library",
      status: "active",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "UX Designer",
      avatar: <Image src={boy1} alt="icon" />,
      todayHours: "0.5 hrs",
      weekHours: "12.0 hrs",
      currentProject: "User Testing",
      status: "offline",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600";
      case "away":
        return "text-yellow-600";
      case "offline":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (member: TeamMember) => {
    switch (member.status) {
      case "active":
        return "Active now";
      case "away":
        return `Away (${member.awayTime})`;
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex">
      <Sidebar
        user={user}
        onCreateTeam={() => openModal("createTeam")}
        onInviteTeammates={() => openModal("inviteTeammates")}
      />

      <div className="flex-1 flex flex-col">
        {/* <Header
          title="Frontend Team"
          primaryAction={{
            label: "Invite Member",
            onClick: () => openModal("inviteTeammates"),
            icon: UserPlus,
          }}
          actions={
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Team Settings
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Team Dashboard
              </Button>
            </div>
          }
        /> */}

        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Navigation Tabs */}

            <div className="bg-white rounded-lg p-4 flex justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#E5E7EB] p-1.5 rounded">
                  <Image src={people} alt="icon " />
                </div>

                <div className="space-y-1.5">
                  <h1 className="text-2xl font-semibold">Frontend Team</h1>

                  <div className="flex gap-6 border-b border-[#e5e7eb]">
                    {["Overview", "Members", "Projects", "Goals"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`pb-3 px-1 text-sm font-medium cursor-pointer transition-colors ${
                          activeTab === tab.toLowerCase()
                            ? "text-black border-b-2 border-black"
                            : "text-[#9ca3af] hover:text-[#4b5563]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Team Settings
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Team Dashboard
                </Button>
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="px-4 py-0">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-[#9ca3af]">{stat.title}</p>
                        <p className="text-xs text-[#9ca3af]">
                          {stat.subtitle}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">
                          {stat.value}
                          {stat.unit && (
                            <span className="text-sm"> {stat.unit}</span>
                          )}
                        </span>
                        {stat.change && (
                          <div
                            className={`flex items-center gap-1 text-sm ${
                              stat.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {stat.trend === "up" ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : (
                              <TrendingDown className="w-3 h-3" />
                            )}
                            {stat.change}
                          </div>
                        )}
                        {stat.status && (
                          <Badge variant="secondary" className="text-xs">
                            <Circle className="w-2 h-2 mr-1 fill-green-500 text-green-500" />
                            {stat.status}
                          </Badge>
                        )}
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Recent Activity */}
              <CardHeader className="px-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Activity</CardTitle>
                  <div className="flex gap-2">
                    {["Today", "This Week", "This Month"].map((filter) => (
                      <Button
                        key={filter}
                        variant={
                          activityFilter ===
                          filter.toLowerCase().replace(" ", "")
                            ? "outline"
                            : "secondary"
                        }
                        size="sm"
                        onClick={() =>
                          setActivityFilter(
                            filter.toLowerCase().replace(" ", "")
                          )
                        }
                        className="text-xs shadow cursor-pointer"
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <Card className="">
                <CardContent className="space-y-4 px-0">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 border-b px-6"
                    >
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-[#f3f4f6] text-[#4b5563]">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">
                            {activity.user}
                          </span>
                          <span className="text-xs text-[#9ca3af]">•</span>
                          <span className="text-xs text-[#9ca3af]">
                            {activity.time}
                          </span>
                        </div>
                        <p className="text-sm text-[#4b5563] mt-1">
                          {activity.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Team Members */}
              <div>
                <CardHeader className="px-0">
                  <div className="flex items-center justify-between">
                    <CardTitle>Team Members</CardTitle>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => openModal("inviteTeammates")}
                      className=" cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      Invite Member
                    </Button>
                  </div>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 px-6 text-xs font-medium text-[#6B7280] mb-2 uppercase tracking-wider">
                  <div className="col-span-4">Member</div>
                  <div className="col-span-2 text-center">Today</div>
                  <div className="col-span-2 text-center">This Week</div>
                  <div className="col-span-2">Current Project</div>
                  <div className="col-span-2">Status</div>
                </div>

                <Card>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Table Header */}

                      {/* Table Rows */}
                      <div className="space-y-3">
                        {teamMembers.map((member) => (
                          <div
                            key={member.id}
                            className="grid grid-cols-12 gap-4 items-center py-2"
                          >
                            <div className="col-span-4 flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="text-xs bg-[#f3f4f6] text-[#4b5563]">
                                  {member.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-sm">
                                  {member.name}
                                </div>
                                <div className="text-xs text-[#9ca3af]">
                                  {member.role}
                                </div>
                              </div>
                            </div>
                            <div className="col-span-2 text-center text-sm">
                              {member.todayHours}
                            </div>
                            <div className="col-span-2 text-center text-sm">
                              {member.weekHours}
                            </div>
                            <div className="col-span-2 text-sm">
                              {member.currentProject}
                            </div>
                            <div className="col-span-2">
                              <div
                                className={`flex items-center gap-2 text-sm ${getStatusColor(
                                  member.status
                                )}`}
                              >
                                <Circle className="w-2 h-2 fill-current" />
                                {getStatusText(member)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <LogTimeModal
        open={modals.logTime}
        onOpenChange={() => closeModal("logTime")}
      />
      <InviteTeammatesModal
        open={modals.inviteTeammates}
        onOpenChange={() => closeModal("inviteTeammates")}
      />
      <CreateTeamModal
        open={modals.createTeam}
        onOpenChange={() => closeModal("createTeam")}
      />
    </div>
  );
}
