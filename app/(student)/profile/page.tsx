"use client"

import React, { useState } from "react"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose,
  DialogDescription
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Field, FieldGroup } from "@/components/ui/field"
import { toast } from "sonner"
import PageTitle from "@/components/global/PageTitle"
import { userData, type UserProfile } from "@/lib/user_data"

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile>(userData)

  const updateUserField = (field: keyof UserProfile["profile"], value: string) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }))
  }

  const updateUserName = (value: string) => {
    setUser(prev => ({
      ...prev,
      name: value
    }))
  }

  const getInitials = (name: string | null) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <>
      <PageTitle title="Profile" />
      <div className="max-w-4xl mx-auto py-12 px-4 bg-white min-h-screen font-sans">
        <div className="flex items-center space-x-4 mb-10 p-4 border rounded-sm">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.profile.avatarUrl} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-bold tracking-tight">{user.name}</h1>
            <p className="text-sm text-muted-foreground">{user.profile.studentId}</p>
            <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Account Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow
                label="Full Name"
                value={user.name || "Add your name"}
                isPlaceholder={!user.name}
                onSave={(value) => updateUserName(value)}
                currentUser={user}
              />
              <EditRow
                label="Student ID"
                value={user.profile.studentId || "Add student ID"}
                isPlaceholder={!user.profile.studentId}
                onSave={(value) => updateUserField("studentId", value)}
                currentUser={user}
              />
              <EditRow
                label="Email Address"
                value={user.email}
                isPlaceholder={false}
                onSave={() => {}} // Email typically shouldn't be editable
                currentUser={user}
                disabled
              />
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Additional Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow
                label="Gender"
                value={user.profile.gender || "Add gender"}
                isPlaceholder={!user.profile.gender}
                onSave={(value) => updateUserField("gender", value)}
                currentUser={user}
              />
              <EditRow
                label="Additional Name"
                value={user.profile.additionalName || "Add additional name"}
                isPlaceholder={!user.profile.additionalName}
                onSave={(value) => updateUserField("additionalName", value)}
                currentUser={user}
              />
              <EditRow
                label="Date of Birth"
                value={user.profile.dateOfBirth || "Add birthday"}
                isPlaceholder={!user.profile.dateOfBirth}
                onSave={(value) => updateUserField("dateOfBirth", value)}
                currentUser={user}
              />
              <EditRow
                label="Education Level"
                value={user.profile.educationLevel || "Not disclosed"}
                isPlaceholder={!user.profile.educationLevel}
                onSave={(value) => updateUserField("educationLevel", value)}
                currentUser={user}
              />
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Contact Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow
                label="Mailing Address"
                value={user.profile.mailingAddress || "Add mailing address"}
                isPlaceholder={!user.profile.mailingAddress}
                onSave={(value) => updateUserField("mailingAddress", value)}
                currentUser={user}
              />
              <EditRow
                label="Phone Number"
                value={user.profile.phoneNumber || "Add phone number"}
                isPlaceholder={!user.profile.phoneNumber}
                onSave={(value) => updateUserField("phoneNumber", value)}
                currentUser={user}
              />
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Job Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow
                label="Company"
                value={user.profile.company || "Add company"}
                isPlaceholder={!user.profile.company}
                onSave={(value) => updateUserField("company", value)}
                currentUser={user}
              />
              <EditRow
                label="Job Title"
                value={user.profile.jobTitle || "Add job title"}
                isPlaceholder={!user.profile.jobTitle}
                onSave={(value) => updateUserField("jobTitle", value)}
                currentUser={user}
              />
              <EditRow
                label="Job Department"
                value={user.profile.jobDepartment || "Add department"}
                isPlaceholder={!user.profile.jobDepartment}
                onSave={(value) => updateUserField("jobDepartment", value)}
                currentUser={user}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

interface EditRowProps {
  label: string
  value: string
  isPlaceholder?: boolean
  onSave: (value: string) => void
  currentUser: UserProfile
  disabled?: boolean
}

function EditRow({ label, value, isPlaceholder, onSave, currentUser, disabled }: EditRowProps) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState(isPlaceholder ? "" : value)

  const fieldId = `edit-${label.toLowerCase().replace(/\s+/g, "-")}`

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(tempValue)
    toast.success(`${label} updated successfully`)
    setOpen(false)
  }

  const getInitials = (name: string | null) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  if (disabled) {
    return (
      <div className="grid grid-cols-3 py-4 px-6 items-center">
        <span className="text-sm font-medium text-slate-600">{label}</span>
        <span className="text-sm text-slate-500 col-span-2">{value}</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 py-4 px-6 items-center hover:bg-slate-50 transition-colors">
      <span className="text-sm font-medium text-slate-600">{label}</span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={`text-sm text-left col-span-2 hover:underline decoration-blue-400 ${
              isPlaceholder ? "text-blue-500 italic" : "text-blue-600"
            }`}
          >
            {value}
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleSave}>
            <DialogHeader>
              <DialogTitle>Edit {label}</DialogTitle>
              <DialogDescription>
                Update your {label.toLowerCase()}. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup className="py-6">
              <Field>
                <Label htmlFor={fieldId} className="text-xs font-bold uppercase text-slate-500">
                  {label}
                </Label>
                <Input
                  id={fieldId}
                  name="value"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  placeholder={`Provide your ${label.toLowerCase()}`}
                  className="rounded-none border-slate-300"
                  autoFocus
                />
              </Field>
            </FieldGroup>

            <div className="pt-2 pb-6">
              <Label className="text-xs font-bold uppercase text-slate-500 block mb-3">
                Card Preview
              </Label>
              <div className="flex items-center space-x-3 p-3 border rounded-sm bg-white">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser.profile.avatarUrl} />
                  <AvatarFallback>{getInitials(currentUser.name)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-bold tracking-tight">
                  {currentUser.name || "User Name"}
                </span>
              </div>
            </div>

            <DialogFooter className="gap-3 sm:gap-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-black text-white hover:bg-slate-800">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
