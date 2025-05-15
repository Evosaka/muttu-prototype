"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Users, BarChart2, Settings } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Escalas", href: "/escalas", icon: FileText },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Relatórios", href: "/relatorios", icon: BarChart2 },
  { name: "Perfil", href: "/perfil", icon: Settings },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white md:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="mt-1 text-xs">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
