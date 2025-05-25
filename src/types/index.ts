import { LucideProps } from "lucide-react";

export interface User {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  plan: string;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  totalTime: string;
  lastWorked: string;
  progress: number;
  status: "active" | "archived" | "completed";
}

export interface TimeEntry {
  id: string;
  projectId: string;
  activityType: "coding" | "meeting" | "planning" | "learning";
  startTime: string;
  endTime: string;
  duration: number;
  notes?: string;
  tags: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  settings: TeamSettings;
}

export interface TeamMember {
  userId: string;
  email: string;
  role: "member" | "admin";
  joinedAt: string;
}

export interface TeamSettings {
  allowInviteOthers: boolean;
  makeTeamVisible: boolean;
  enableLeaderboard: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<LucideProps> | string; // Now supports string paths
  section: "main" | "team" | "settings";
}

export interface ActivityData {
  date: string;
  activities: {
    name: string;
    type: "coding" | "meeting" | "break" | "planning";
    startTime: string;
    endTime: string;
    project?: string;
    description?: string;
  }[];
}
