"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TEAMS } from "@/lib/constants";

interface InviteTeammatesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InviteTeammatesModal({
  open,
  onOpenChange,
}: InviteTeammatesModalProps) {
  const [formData, setFormData] = useState({
    emails: "",
    team: "frontend",
    role: "member",
    message: "",
    sendCopy: false,
  });

  const handleSendInvitations = () => {
    const emailList = formData.emails
      .split("\n")
      .filter((email) => email.trim());
    console.log("Sending invitations:", { ...formData, emails: emailList });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invite Teammates</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium">Email Addresses</Label>
            <Textarea
              placeholder="Enter email addresses (one per line)"
              value={formData.emails}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, emails: e.target.value }))
              }
              className="mt-2 min-h-[100px]"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Select Team</Label>
            <Select
              value={formData.team}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, team: value }))
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TEAMS.map((team) => (
                  <SelectItem key={team.id} value={team.id}>
                    {team.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium">Role</Label>
            <RadioGroup
              value={formData.role}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, role: value }))
              }
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="member" id="member" />
                <Label htmlFor="member" className="text-sm">
                  Member
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin" className="text-sm">
                  Admin
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-sm font-medium">
              Add a personal message (optional)
            </Label>
            <Textarea
              placeholder="Write a welcome message..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="mt-2 min-h-[80px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="send-copy"
              checked={formData.sendCopy}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  sendCopy: checked as boolean,
                }))
              }
            />
            <Label htmlFor="send-copy" className="text-sm">
              Send me a copy of the invitation email
            </Label>
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
              onClick={handleSendInvitations}
              className="bg-[#1f2937] hover:bg-[#374151]"
            >
              Send Invitations
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
