"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import { Play, Pause, Square, Tag, Code, Users, Plus } from "lucide-react";
import WeeklyOverview from "@/components/weeekly-overview";

export default function Dashboard() {
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTime, setCurrentTime] = useState("02:47:15");
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

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex">
      <Sidebar
        user={user}
        onCreateTeam={() => openModal("createTeam")}
        onInviteTeammates={() => openModal("inviteTeammates")}
      />

      <div className="flex-1 flex flex-col">
        <Header
          title="Dashboard"
          subtitle="Tuesday, May 13, 2025"
          primaryAction={{
            label: "Log Time",
            onClick: () => openModal("logTime"),
            icon: Plus,
          }}
        />

        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Current Session */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Current Session</CardTitle>
                    <p className="text-sm text-[#9ca3af]">
                      Frontend Development - Track3 App
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-mono font-bold">
                      {currentTime}
                    </div>
                    <p className="text-sm text-[#9ca3af]">
                      Started at 09:15 AM
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Button
                      variant={isTimerRunning ? "secondary" : "default"}
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className=" cursor-pointer"
                    >
                      {isTimerRunning ? (
                        <Pause className="w-4 h-4 mr-2" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {isTimerRunning ? "Pause" : "Resume"}
                    </Button>
                    <Button variant="outline" className="cursor-pointer">
                      <Square className="w-4 h-4 mr-2" />
                      Stop
                    </Button>
                  </div>
                  <Button variant="secondary" className="cursor-pointer">
                    <Tag className="w-4 h-4 mr-2" />
                    Add Tag
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#9ca3af]">
                    Total Coding Time Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4h 35m</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Code className="w-4 h-4 text-[#9ca3af]" />
                    <span className="text-sm text-green-600">
                      ↑ 18% from yesterday
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#9ca3af]">
                    Weekly Goal Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/15 hrs</div>
                  <Progress value={80} className="mt-2" />
                  <p className="text-sm text-[#9ca3af] mt-1">
                    {"You're 3 hours ahead of schedule"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#9ca3af]">
                    Days Tracked This Week
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4/5</div>
                  <div className="flex gap-4 mt-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div
                        key={day}
                        className={`w-8 h-8 rounded text-xs flex items-center justify-center ${
                          i < 4
                            ? "bg-[#E5E7EB] text-black"
                            : "bg-[#e5e7eb] text-[#9ca3af]"
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Overview & Recent Activity */}
            <WeeklyOverview />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Frontend Development",
                      tech: "React.js, TypeScript",
                      time: "2h 15m",
                      icon: Code,
                      color: "blue",
                    },
                    {
                      name: "Team Standup",
                      tech: "Daily Meeting",
                      time: "30m",
                      icon: Users,
                      color: "green",
                    },
                    {
                      name: "API Integration",
                      tech: "Node.js, Express",
                      time: "1h 50m",
                      icon: Code,
                      color: "purple",
                    },
                  ].map((activity, i) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={i}
                        className="flex rounded-lg space-y-2 gap-3 bg-[#E5E7EB] p-2"
                      >
                        <div
                          className={`w-8 h-8 bg-${activity.color}-100 rounded-full flex items-center justify-center`}
                        >
                          <Icon
                            className={`w-4 h-4 text-${activity.color}-600`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {activity.name}
                          </div>
                          <div className="text-xs text-[#9ca3af]">
                            {activity.tech}
                          </div>
                        </div>
                        <div className="text-sm text-[#9ca3af]">
                          {activity.time}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Language Breakdown</CardTitle>
                  <p className="text-sm text-[#9ca3af]">This Week</p>
                </CardHeader>

                <div className="bg-[#E5E7EB] h-36 w-36 p-2 mx-auto rounded-full border-8 border-[#D1D5DB]"></div>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "TypeScript", percentage: 40 },
                      { name: "JavaScript", percentage: 35 },
                      { name: "HTML/CSS", percentage: 25 },
                    ].map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between items-center">
                          <div className="space-x-1.5 flex items-center">
                            <div className="w-1 h-1  bg-[#E5E7EB] px-1.5 rounded-[2px] py-1.5"></div>
                            <span className="text-sm">{lang.name}</span>
                          </div>
                          <span className="text-sm font-medium">
                            {lang.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
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
