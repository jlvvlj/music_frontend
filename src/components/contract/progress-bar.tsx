"use client"

import React, { useState, useEffect } from "react"

import { Progress } from "@/registry/default/ui/progress"

const totalSteps = 4

export default function ProgressBar({step} : { step: number}) {
  const [progress, setProgress] = useState(25)
  
  useEffect(() => {
    const calculateProgress = () => {
      const _progress = step * 100 / totalSteps
      setProgress(_progress)
    }
    calculateProgress()
  }, [step]);
  
  return <Progress value={progress} className="" />
}
