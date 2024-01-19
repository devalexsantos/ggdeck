import { Outlet } from 'react-router-dom'
import DesktopMenu from '@/components/desktop-menu'
import MobileMenu from '@/components/mobile-menu'
import { UserButton, SignInButton, SignedOut } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'

export default function AppLayout() {
  return (
    <>
      <div className="w-full flex p-3 bg-zinc-950 border-b border-b-zinc-500 border-opacity-50">
        <div className="flex-1 flex w-full px-8 items-center justify-between">
          <span className="text-2xl italic font-extrabold">ggdeck.</span>
          <DesktopMenu />
          <MobileMenu />
          <SignedOut>
            <Button className="rounded" variant="outline">
              <SignInButton>Entrar</SignInButton>
            </Button>
          </SignedOut>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center">
        <Outlet />
      </div>
    </>
  )
}
