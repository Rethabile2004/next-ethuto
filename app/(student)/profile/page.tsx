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

export default function ProfilePage() {
  const [name, setName] = useState("RETHABILE ERIC SIASE")
  const [studentId, setStudentId] = useState("222052986")

  return (
    <>
      <PageTitle
        title="Profile"
      />
      <div className="max-w-4xl mx-auto py-12 px-4 bg-white min-h-screen font-sans">
        <div className="flex items-center space-x-4 mb-10 p-4 border rounded-sm">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/global/default.png" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-bold tracking-tight">{name}</h1>
            <p className="text-sm text-muted-foreground">{studentId}</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Additional Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow label="Gender" value="Male" />
              <EditRow label="Additional Name" value="Add additional name" isPlaceholder />
              <EditRow label="Date of Birth" value="Add birthday" isPlaceholder />
              <EditRow label="Education Level" value="Not disclosed" />
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Contact Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow label="Mailing Address" value="Add mailing address" isPlaceholder />
              <EditRow label="Phone Number" value="Add phone number" isPlaceholder />
            </div>
          </section>
          <section>
            <h2 className="text-base font-semibold mb-4 text-slate-800">Job Information</h2>
            <div className="border divide-y rounded-sm">
              <EditRow label="Company" value="Add company" isPlaceholder />
              <EditRow label="Job Title" value="Add job title" isPlaceholder />
              <EditRow label="Job Department" value="Add department" isPlaceholder />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

function EditRow({ label, value, isPlaceholder }: { label: string; value: string; isPlaceholder?: boolean }) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState(isPlaceholder ? "" : value)

  const fieldId = `edit-${label.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className="grid grid-cols-3 py-4 px-6 items-center hover:bg-slate-50 transition-colors">
      <span className="text-sm font-medium text-slate-600">{label}</span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={`text-sm text-left col-span-2 hover:underline decoration-blue-400 ${isPlaceholder ? "text-blue-500 italic" : "text-blue-600"
              }`}
          >
            {value}
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">    
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log(`Saving ${label}: ${tempValue}`)
              toast.success(fieldId)
              setOpen(false)
            }}
          >
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
                  <AvatarImage src="/global/default.png" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <span className="text-sm font-bold tracking-tight">RETHABILE ERIC SIASE</span>
              </div>
            </div>

            <DialogFooter className="gap-3 sm:gap-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-black text-white hover:bg-slate-800" >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}