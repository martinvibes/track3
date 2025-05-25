"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Code, Users, Target, BookOpen, X, Plus, Clock } from "lucide-react";

interface LogTimeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ACTIVITY_TYPES = [
  { id: "coding", label: "Coding", icon: Code },
  { id: "meeting", label: "Meeting", icon: Users },
  { id: "planning", label: "Planning", icon: Target },
  { id: "learning", label: "Learning", icon: BookOpen },
];

const PROJECTS = [
  { id: "frontend-dashboard", label: "Frontend Dashboard" },
  { id: "api-integration", label: "API Integration" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "documentation", label: "Documentation" },
];

export function LogTimeModal({ open, onOpenChange }: LogTimeModalProps) {
  const [formData, setFormData] = useState({
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    activity: "coding",
    project: "frontend-dashboard",
    notes: "",
    tags: ["React", "TypeScript"],
  });
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSave = () => {
    console.log("Saving time entry:", formData);
    onOpenChange(false);
  };

  const handleStartTimer = () => {
    console.log("Starting timer with:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log Time</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Time Range */}
          <div>
            <Label className="text-sm font-medium">Time Range</Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                value={formData.startTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    startTime: e.target.value,
                  }))
                }
                className="text-center"
              />
              <span className="text-[#9ca3af]">to</span>
              <Input
                value={formData.endTime}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, endTime: e.target.value }))
                }
                className="text-center"
              />
            </div>
            <p className="text-sm text-[#9ca3af] mt-1">Duration: 1h 30m</p>
          </div>

          {/* Activity Type */}
          <div>
            <Label className="text-sm font-medium">Activity Type</Label>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {ACTIVITY_TYPES.map((activity) => {
                const Icon = activity.icon;
                return (
                  <button
                    key={activity.id}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        activity: activity.id,
                      }))
                    }
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      formData.activity === activity.id
                        ? "bg-[#1f2937] text-white border-[#1f2937]"
                        : "bg-[#f3f4f6] text-[#4b5563] border-[#e5e7eb] hover:bg-[#e5e7eb]"
                    }`}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs">{activity.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project */}
          <div>
            <Label className="text-sm font-medium">Project</Label>
            <Select
              value={formData.project}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, project: value }))
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PROJECTS.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div>
            <Label className="text-sm font-medium">Notes</Label>
            <Textarea
              placeholder="What did you work on?"
              value={formData.notes}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, notes: e.target.value }))
              }
              className="mt-2 min-h-[80px]"
            />
          </div>

          {/* Tags */}
          <div>
            <Label className="text-sm font-medium">Tags (optional)</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                  className="w-24 h-7 text-sm"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={addTag}
                  className="h-7 px-2"
                >
                  <Plus className="w-3 h-3" />
                  Add Tag
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={handleStartTimer}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Start Timer
            </Button>
            <Button
              onClick={handleSave}
              className="bg-[#1f2937] hover:bg-[#374151]"
            >
              Save Log
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
