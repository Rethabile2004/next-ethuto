"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card" // optional wrapper
import PageTitle from "@/components/global/PageTitle"

export default function FullWidthCalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
    <PageTitle
            title="Calender"
        />
    <div className="min-h-screen bg-white px-0 md:px-4 py-6 md:py-12">
      {/* Remove max-w-4xl / mx-auto from your root layout or this page */}
      <div className="w-full">
        <Card className="rounded-none border-0 shadow-none md:border md:shadow-sm">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full rounded-md border p-3 md:p-6"
            // Make days bigger / more spacious
            classNames={{
              day: "h-12 md:h-16 text-base md:text-lg",
              day_selected: "bg-black text-white",
              head_cell: "text-muted-foreground font-medium text-sm md:text-base",
              caption_label: "text-lg md:text-2xl font-bold",
            }}
            // Optional: show outside days faintly
            showOutsideDays={true}
          />
        </Card>

        {/* Debug selected date */}
        <div className="mt-8 text-center text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : "Nothing selected"}
        </div>
      </div>
    </div>
    </>
  )
}