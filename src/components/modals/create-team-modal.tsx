"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { X, Plus } from "lucide-react";
import type { TeamMember } from "@/types";

interface CreateTeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateTeamModal({ open, onOpenChange }: CreateTeamModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    inviteMethod: "email",
    members: [
      { email: "", role: "member" },
      { email: "", role: "member" },
    ] as TeamMember[],
    settings: {
      allowInviteOthers: false,
      makeTeamVisible: false,
      enableLeaderboard: false,
    },
  });

  const addMember = () => {
    setFormData((prev) => ({
      ...prev,
      members: [
        ...prev.members,
        {
          email: "",
          role: "member",
          userId: "",
          joinedAt: new Date().toISOString(),
        },
      ],
    }));
  };

  const removeMember = (index: number) => {
    if (formData.members.length > 1) {
      setFormData((prev) => ({
        ...prev,
        members: prev.members.filter((_, i) => i !== index),
      }));
    }
  };

  const updateMember = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      ),
    }));
  };

  const handleCreateTeam = () => {
    const validMembers = formData.members.filter((member) =>
      member.email.trim()
    );
    console.log("Creating team:", { ...formData, members: validMembers });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium">Team Name</Label>
            <Input
              placeholder="Enter team name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-2"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Team Description</Label>
            <Textarea
              placeholder="Brief description of your team"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="mt-2 min-h-[80px]"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Invite Members</Label>
            <div className="flex gap-2 mt-2 mb-4">
              <Button
                variant={
                  formData.inviteMethod === "email" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, inviteMethod: "email" }))
                }
              >
                Email
              </Button>
              <Button
                variant={
                  formData.inviteMethod === "wallet" ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, inviteMethod: "wallet" }))
                }
              >
                Wallet Address
              </Button>
            </div>

            <div className="space-y-3">
              {formData.members.map((member, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    placeholder={
                      formData.inviteMethod === "email"
                        ? "Enter email address"
                        : "Enter wallet address"
                    }
                    value={member.email}
                    onChange={(e) =>
                      updateMember(index, "email", e.target.value)
                    }
                    className="flex-1"
                  />
                  <Select
                    value={member.role}
                    onValueChange={(value) =>
                      updateMember(index, "role", value)
                    }
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="member">Member</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.members.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeMember(index)}
                      className="h-10 w-10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={addMember}
                className="w-full text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add another member
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium">Team Settings</Label>
            <div className="space-y-3 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allow-invite"
                  checked={formData.settings.allowInviteOthers}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      settings: {
                        ...prev.settings,
                        allowInviteOthers: checked as boolean,
                      },
                    }))
                  }
                />
                <Label htmlFor="allow-invite" className="text-sm">
                  Allow members to invite others
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="team-visible"
                  checked={formData.settings.makeTeamVisible}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      settings: {
                        ...prev.settings,
                        makeTeamVisible: checked as boolean,
                      },
                    }))
                  }
                />
                <Label htmlFor="team-visible" className="text-sm">
                  Make team visible to all workspace members
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="enable-leaderboard"
                  checked={formData.settings.enableLeaderboard}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      settings: {
                        ...prev.settings,
                        enableLeaderboard: checked as boolean,
                      },
                    }))
                  }
                />
                <Label htmlFor="enable-leaderboard" className="text-sm">
                  Enable team leaderboard
                </Label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateTeam}
              className="bg-[#1f2937] hover:bg-[#374151]"
              disabled={!formData.name.trim()}
            >
              Create Team
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
