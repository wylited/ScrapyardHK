// components/login_button.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import LoginDialog from "@/components/login_dialog"

export default function LoginButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)} className="font-grotesk">Login</Button>
      <LoginDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}
