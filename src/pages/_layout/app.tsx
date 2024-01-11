import { Outlet } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ResumeProfile from '@/components/resume-profile'
import DesktopMenu from '@/components/desktop-menu'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/components/mobile-menu'

export default function AppLayout() {
  return (
    <>
      <div className="w-full flex p-3 bg-zinc-950 border-b border-b-zinc-500 border-opacity-50">
        <div className="w-full max-w-[300px] flex justify-center">
          <span className="text-2xl italic font-extrabold">ggdeck.</span>
        </div>
        <div className="flex-1 flex w-full px-8 justify-end items-center sm:justify-between">
          <DesktopMenu />
          <MobileMenu />
          <Button
            variant="outline"
            className="items-center gap-2 rounded-xl px-2 py-2 hidden sm:flex"
          >
            <LogOut size={16} /> Sair
          </Button>
        </div>
      </div>
      <div className="min-h-screen flex flex-col sm:flex-row">
        <aside className="bg-zinc-900 w-full p-8 flex flex-col items-center gap-4 sm:w-[300px]">
          <div className="flex flex-col gap-6">
            <Avatar className="w-28 h-28">
              <AvatarImage src="https://github.com/devalexsantos.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold ">Alex Santos</span>
          </div>

          <ResumeProfile />
        </aside>
        <div className="w-full overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}
