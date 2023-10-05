'use client';

import '../app/globals.css'
import Navbar from '../../components/navbar/navbar'


import { Metadata } from "next"
import Image from "next/image"

import { cn } from "@/lib/utils"

import DemoCookieSettings from "../../components/cards/cookie-settings"
import DemoCreateAccount from "../../components/cards/create-account"
import DemoDatePicker from "../../components/cards/date-picker"
import DemoGithub from "../../components/cards/github-card"
import DemoNotifications  from "../../components/cards/notifications"
import DemoPaymentMethod from "../../components/cards/payment-method"
import DemoReportAnIssue from "../../components/cards/report-an-issue"
import DemoShareDocument from "../../components/cards/share-document"
import DemoTeamMembers from "../../components/cards/team-members"

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function CardsPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </div>
      <Navbar />
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1 lg:grid-cols-2 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  )
}