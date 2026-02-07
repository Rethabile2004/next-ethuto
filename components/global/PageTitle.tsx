import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  desc?: string
  className?: string
}

export default function PageTitle({ title, desc, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-gray-200 pb-8 pt-2", className)}>
      <h1 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      {desc && (
        <p className="mt-2 text-[17px] text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  )
}
