import type React from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="flex-1 p-4 md:p-6">{children}</div>
      <MobileNav />
    </div>
  )
}
