"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { LogTimeModal } from "@/components/modals/log-time-modal";
import { InviteTeammatesModal } from "@/components/modals/invite-teammates-modal";
import { CreateTeamModal } from "@/components/modals/create-team-modal";
import { Code, Database, Smartphone, FileText } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("week");
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

  const projects = [
    {
      id: 1,
      name: "Frontend Dashboard",
      technologies: ["React", "TypeScript", "Tailwind"],
      totalTime: "32h 45m",
      lastWorked: "Today",
      progress: 75,
      status: "active",
      icon: Code,
    },
    {
      id: 2,
      name: "API Development",
      technologies: ["Node.js", "Express", "MongoDB"],
      totalTime: "18h 20m",
      lastWorked: "Yesterday",
      progress: 60,
      status: "active",
      icon: Database,
    },
    {
      id: 3,
      name: "Mobile App",
      technologies: ["React Native", "TypeScript"],
      totalTime: "24h 10m",
      lastWorked: "3 days ago",
      progress: 45,
      status: "active",
      icon: Smartphone,
    },
    {
      id: 4,
      name: "Database Migration",
      technologies: ["SQL", "Python"],
      totalTime: "8h 15m",
      lastWorked: "1 week ago",
      progress: 90,
      status: "archived",
      icon: FileText,
    },
  ];

  const languageData = [
    { name: "TypeScript", percentage: 35, color: "bg-[#9CA3AF]" },
    { name: "JavaScript", percentage: 22, color: "bg-[#9CA3AF]" },
    { name: "HTML/CSS", percentage: 18, color: "bg-[#9CA3AF]" },
    { name: "Python", percentage: 10, color: "bg-[#9CA3AF]" },
    { name: "SQL", percentage: 8, color: "bg-[#9CA3AF]" },
    { name: "Other", percentage: 7, color: "bg-[#9CA3AF]" },
  ];

  //   const weeklyTrends = [
  //     { week: "Week 1", typescript: 40, javascript: 30, html: 20, other: 10 },
  //     { week: "Week 2", typescript: 35, javascript: 25, html: 25, other: 15 },
  //     { week: "Week 3", typescript: 38, javascript: 28, html: 22, other: 12 },
  //     { week: "Week 4", typescript: 35, javascript: 22, html: 18, other: 25 },
  //   ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex">
      <Sidebar
        user={user}
        onCreateTeam={() => openModal("createTeam")}
        onInviteTeammates={() => openModal("inviteTeammates")}
      />

      <div className="flex-1 flex flex-col">
        <Header
          title="Projects & Languages"
          subtitle="Tuesday, May 13, 2025"
          primaryAction={{
            label: "Add Project",
            onClick: () => console.log("Add project"),
            icon: Code,
          }}
        />

        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Project Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Tracked Projects</CardTitle>
                  <div className="flex gap-2">
                    {["All", "Active", "Archived"].map((filter) => (
                      <Button
                        key={filter}
                        variant={
                          activeFilter === filter.toLowerCase()
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setActiveFilter(filter.toLowerCase())}
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects
                  .filter(
                    (project) =>
                      activeFilter === "all" || project.status === activeFilter
                  )
                  .map((project) => {
                    const Icon = project.icon;
                    return (
                      <div
                        key={project.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#4b5563]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{project.name}</h3>
                            <Badge
                              variant={
                                project.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-[#9ca3af] mb-2">
                            {project.technologies.join(", ")}
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {project.totalTime} total
                          </div>
                          <div className="text-sm text-[#9ca3af]">
                            Last worked: {project.lastWorked}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Time Distribution */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Time Distribution</CardTitle>
                  <div className="flex gap-2">
                    {["Week", "Month", "Year"].map((period) => (
                      <Button
                        key={period}
                        variant={
                          timeFilter === period.toLowerCase()
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setTimeFilter(period.toLowerCase())}
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    {/* Pie Chart Placeholder */}
                    <div className="w-full h-full bg-[#4b5563] rounded-full relative">
                      <div className="absolute inset-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        name: "Frontend Dashboard",
                        percentage: 39,
                        color: "bg-blue-500",
                      },
                      {
                        name: "API Development",
                        percentage: 22,
                        color: "bg-green-500",
                      },
                      {
                        name: "Mobile App",
                        percentage: 29,
                        color: "bg-orange-500",
                      },
                      {
                        name: "Database Migration",
                        percentage: 10,
                        color: "bg-gray-500",
                      },
                    ].map((project) => (
                      <div
                        key={project.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-3 h-3 ${project.color} rounded`}
                          ></div>
                          <span className="text-sm">{project.name}</span>
                        </div>
                        <span className="text-sm font-medium">
                          {project.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Programming Languages */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Programming Languages</CardTitle>
                  <div className="flex gap-2">
                    {["Week", "Month", "Year"].map((period) => (
                      <Button key={period} variant="outline" size="sm">
                        {period}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languageData.map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">{lang.name}</span>
                          <span className="text-sm font-medium">
                            {lang.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                          <div
                            className={`${lang.color} h-2 rounded-full`}
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#9ca3af]">
                      <div className="w-2 h-2 bg-[#9ca3af] rounded-full"></div>
                      <span>Total coding time: 83 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Language Trends */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Weekly Language Trends</CardTitle>
                <Badge variant="default" className="p-1 px-2">
                  Last 4 Weeks
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between text-[#6B7280] text-xs items-center mb-32">
                    <span className="font-medium">week1</span>
                    <span className="font-medium">week2</span>
                    <span className="font-medium">week3</span>
                    <span className="font-medium">week4</span>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>HTML/CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                    <span>Other</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
