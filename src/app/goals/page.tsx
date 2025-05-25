"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import { Plus, Bell, Calendar, Target, Users } from "lucide-react";

export default function GoalSettings() {
  const [goals, setGoals] = useState({
    daily: {
      codingTime: 4,
      learningTime: 1,
      documentation: 0.5,
    },
    weekly: {
      totalCodingHours: 20,
      projectCompletion: 2,
      learningNewSkills: 1,
    },
  });

  const [reminders, setReminders] = useState({
    dailyProgress: true,
    weeklySummary: true,
    idleTime: true,
    shareProgress: true,
  });

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
          title="Goal Settings"
          subtitle="Tuesday, May 13, 2025"
          primaryAction={{
            label: "New Goal",
            onClick: () => console.log("New goal"),
            icon: Plus,
          }}
        />

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Daily Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      key: "codingTime",
                      label: "Coding Time",
                      desc: "Time spent actively writing code",
                      unit: "hours",
                    },
                    {
                      key: "learningTime",
                      label: "Learning Time",
                      desc: "Time spent on tutorials and courses",
                      unit: "hours",
                    },
                    {
                      key: "documentation",
                      label: "Documentation",
                      desc: "Time spent writing documentation",
                      unit: "hours",
                    },
                  ].map((goal) => (
                    <div
                      key={goal.key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <Label className="font-medium">{goal.label}</Label>
                        <p className="text-sm text-[#9ca3af]">{goal.desc}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          step={goal.key === "documentation" ? "0.5" : "1"}
                          value={
                            goals.daily[goal.key as keyof typeof goals.daily]
                          }
                          onChange={(e) =>
                            setGoals((prev) => ({
                              ...prev,
                              daily: {
                                ...prev.daily,
                                [goal.key]: Number(e.target.value),
                              },
                            }))
                          }
                          className="w-16 text-center"
                        />
                        <span className="text-sm text-[#9ca3af]">
                          {goal.unit}
                        </span>
                        <div className="w-4 h-4 bg-[#9ca3af] rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weekly Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      key: "totalCodingHours",
                      label: "Total Coding Hours",
                      desc: "Weekly coding target",
                      unit: "hours",
                    },
                    {
                      key: "projectCompletion",
                      label: "Project Completion",
                      desc: "Weekly project targets",
                      unit: "projects",
                    },
                    {
                      key: "learningNewSkills",
                      label: "Learning New Skills",
                      desc: "New technologies to explore",
                      unit: "skills",
                    },
                  ].map((goal) => (
                    <div
                      key={goal.key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <Label className="font-medium">{goal.label}</Label>
                        <p className="text-sm text-[#9ca3af]">{goal.desc}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={
                            goals.weekly[goal.key as keyof typeof goals.weekly]
                          }
                          onChange={(e) =>
                            setGoals((prev) => ({
                              ...prev,
                              weekly: {
                                ...prev.weekly,
                                [goal.key]: Number(e.target.value),
                              },
                            }))
                          }
                          className="w-16 text-center"
                        />
                        <span className="text-sm text-[#9ca3af]">
                          {goal.unit}
                        </span>
                        <div className="w-4 h-4 bg-[#9ca3af] rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reminder Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Reminder Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      key: "dailyProgress",
                      label: "Daily progress notification",
                      icon: Bell,
                    },
                    {
                      key: "weeklySummary",
                      label: "Weekly summary email",
                      icon: Calendar,
                    },
                    {
                      key: "idleTime",
                      label: "Idle time reminder",
                      icon: Target,
                    },
                    {
                      key: "shareProgress",
                      label: "Share progress with team",
                      icon: Users,
                    },
                  ].map((setting) => {
                    const Icon = setting.icon;
                    return (
                      <div
                        key={setting.key}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-[#9ca3af]" />
                          <Label>{setting.label}</Label>
                        </div>
                        <Switch
                          checked={
                            reminders[setting.key as keyof typeof reminders]
                          }
                          onCheckedChange={(checked) =>
                            setReminders((prev) => ({
                              ...prev,
                              [setting.key]: checked,
                            }))
                          }
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Streaks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="font-medium">Coding Streak</Label>
                      <Badge variant="secondary">4 days</Badge>
                    </div>
                    <Progress value={80} className="h-2" />
                    <p className="text-xs text-[#9ca3af] mt-1">
                      3 days until new record
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="font-medium">Goal Completion</Label>
                      <Badge variant="secondary">2 weeks</Badge>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-[#9ca3af] mt-1">
                      Halfway to monthly badge
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Performance</CardTitle>
                  <p className="text-sm text-[#9ca3af]">Last 30 Days</p>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[#9ca3af] mb-3">
                    18/30 days on target
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {Array.from({ length: 35 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          i < 5
                            ? "bg-[#e5e7eb]"
                            : i % 3 === 0
                            ? "bg-[#1f2937]"
                            : i % 2 === 0
                            ? "bg-[#4b5563]"
                            : "bg-[#9ca3af]"
                        }`}
                      ></div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Best Streak</span>
                      <span className="font-medium">9 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">
                        Average Daily Hours
                      </span>
                      <span className="font-medium">3.5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">
                        Goal Completion Rate
                      </span>
                      <span className="font-medium">72%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Public Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="font-medium">
                      Share your goals publicly
                    </Label>
                    <Switch />
                  </div>
                  <p className="text-sm text-[#9ca3af] mb-4">
                    Make your progress visible to others
                  </p>
                  <Button variant="outline" className="w-full">
                    Generate Public Profile Link
                  </Button>
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
