import type { NavItem } from "@/types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "/dashboard.svg", // This is now a string path
    section: "main",
  },
  {
    id: "timeline",
    label: "Daily Timeline",
    href: "/timeline",
    icon: "/daily.svg",
    section: "main",
  },
  {
    id: "projects",
    label: "Projects & Languages",
    href: "/projects",
    icon: "/projects.svg",
    section: "main",
  },
  {
    id: "goals",
    label: "Goal Settings",
    href: "/goals",
    icon: "/goal.svg",
    section: "main",
  },
  {
    id: "team",
    label: "Team Workspace",
    href: "/team",
    icon: "/team.svg",
    section: "team",
  },
  {
    id: "leaderboard",
    label: "Leaderboard",
    href: "/leaderboard",
    icon: "/leader.svg",
    section: "team",
  },
  {
    id: "profile",
    label: "Profile & Privacy",
    href: "/profile",
    icon: "/profile.svg",
    section: "settings",
  },
  {
    id: "integrations",
    label: "Integrations",
    href: "/integrations",
    icon: "integrate.svg",
    section: "settings",
  },
  {
    id: "notifications",
    label: "Notifications",
    href: "/notifications",
    icon: "notification.svg",
    section: "settings",
  },
];

export const TEAMS = [
  { id: "frontend", name: "Frontend Team" },
  { id: "backend", name: "Backend Squad" },
  { id: "devops", name: "DevOps Crew" },
];

export const ACTIVITY_TYPES = [
  { id: "coding", label: "Coding", icon: "Code" },
  { id: "meeting", label: "Meeting", icon: "Users" },
  { id: "planning", label: "Planning", icon: "Target" },
  { id: "learning", label: "Learning", icon: "BookOpen" },
];
