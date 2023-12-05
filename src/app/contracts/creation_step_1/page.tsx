"use client";
import { useState, useEffect } from "react";
import CreateStepCards from "../components/CreateStepCards";

export default function Layout({ activeStep }: { activeStep: number }) {
  return (
    <>
      <CreateStepCards step={activeStep} />
    </>
  );
}
