"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Plus,
} from "lucide-react";

export default function Timeline() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, setSelectedDate] = useState("May 13, 2025");
  const [viewMode, setViewMode] = useState<"daily" | "weekly">("daily");
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

  const timelineData = [
    {
      time: "8:00 AM",
      activity: "Frontend Development",
      project: "React, TypeScript",
      duration: "8:30 - 10:00 AM",
      type: "coding",
    },
    {
      time: "9:00 AM",
      activity: "Daily Standup",
      project: "Team Meeting",
      duration: "10:30 - 11:00 AM",
      type: "meeting",
    },
    {
      time: "10:00 AM",
      activity: "Bug Fixes",
      project: "API Integration",
      duration: "11:00 - 11:30 AM",
      type: "coding",
    },
    {
      time: "11:00 AM",
      activity: "Coffee Break",
      project: "",
      duration: "11:30 - 12:00 PM",
      type: "break",
    },
    {
      time: "12:00 PM",
      activity: "Planning",
      project: "Project Requirements",
      duration: "12:00 - 1:00 PM",
      type: "planning",
    },
    {
      time: "1:00 PM",
      activity: "Feature Implementation",
      project: "User Authentication",
      duration: "1:00 - 2:30 PM",
      type: "coding",
    },
    {
      time: "2:00 PM",
      activity: "Lunch Break",
      project: "",
      duration: "2:30 - 3:00 PM",
      type: "break",
    },
    {
      time: "3:00 PM",
      activity: "Code Review",
      project: "Pull Request #42",
      duration: "3:00 - 4:00 PM",
      type: "coding",
    },
    {
      time: "4:00 PM",
      activity: "",
      project: "",
      duration: "",
      type: "",
    },
    {
      time: "5:00 PM",
      activity: "API Documentation",
      project: "",
      duration: "",
      type: "coding",
    },
  ];

  const todaysProjects = [
    {
      name: "Dashboard Redesign",
      category: "Frontend",
      time: "2h 45m",
      progress: 41,
    },
    {
      name: "API Integration",
      category: "Backend",
      time: "1h 35m",
      progress: 24,
    },
    {
      name: "User Authentication",
      category: "Security",
      time: "1h 30m",
      progress: 22,
    },
    { name: "Documentation", category: "Other", time: "55m", progress: 13 },
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case "coding":
        return "bg-[#4b5563]";
      case "meeting":
        return "bg-[#374151]";
      case "break":
        return "bg-[#9ca3af]";
      case "planning":
        return "bg-[#6b7280]";
      default:
        return "bg-[#e5e7eb]";
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
        <Header
          title="Daily Timeline"
          subtitle="Tuesday, May 13, 2025"
          primaryAction={{
            label: "Log Time",
            onClick: () => openModal("logTime"),
            icon: Plus,
          }}
          actions={
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          }
        />

        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Date Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "daily" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("daily")}
                  >
                    Daily
                  </Button>
                  <Button
                    variant={viewMode === "weekly" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("weekly")}
                  >
                    Weekly
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="font-medium">{selectedDate}</span>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Time Summary */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: "Total Time", value: "6h 45m" },
                { label: "Coding", value: "4h 20m" },
                { label: "Meetings", value: "1h 30m" },
                { label: "Breaks", value: "55m" },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4">
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Activity Timeline</CardTitle>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#4b5563] rounded"></div>
                      <span>Coding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#374151] rounded"></div>
                      <span>Meetings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#9ca3af] rounded"></div>
                      <span>Breaks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#6b7280] rounded"></div>
                      <span>Manual Logs</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 text-sm text-[#9ca3af]">
                        {item.time}
                      </div>
                      {item.activity ? (
                        <div
                          className={`flex-1 ${getActivityColor(
                            item.type
                          )} rounded p-3 text-white`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{item.activity}</div>
                              <div className="text-sm opacity-80">
                                {item.project}
                              </div>
                            </div>
                            <div className="text-sm">{item.duration}</div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 h-12"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{"Today's Projects"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todaysProjects.map((project, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-1 h-12 bg-[#010101] rounded"></div>
                      <div className="flex-1">
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-[#9ca3af]">
                          {project.category}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{project.time}</div>
                        <div className="text-sm text-[#9ca3af]">
                          {project.progress}%
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Productivity Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Productivity Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Focus Time</span>
                    <span className="font-medium">4h 20m</span>
                  </div>
                  <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                    <div
                      className="bg-[#514947] h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Meeting Time</span>
                    <span className="font-medium">1h 30m</span>
                  </div>
                  <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Break Time</span>
                    <span className="font-medium">55m</span>
                  </div>
                  <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                    <div
                      className="bg-gray-500 h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Productivity Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">85</span>
                        <span className="text-sm text-[#9ca3af]">/100</span>
                      </div>
                    </div>
                    <div className="text-sm text-green-600 mt-1">
                      ↑ 5% from yesterday
                    </div>
                  </div>
                </CardContent>
              </Card>
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
