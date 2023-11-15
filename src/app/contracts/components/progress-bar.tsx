"use client"

import * as React from "react"

import { Progress } from "@/registry/default/ui/progress"

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(80)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[600px]" />
}
