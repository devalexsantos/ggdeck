import { Outlet } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SocialLinks from '@/components/social-links-profile'
import DesktopMenu from '@/components/desktop-menu'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/components/mobile-menu'

export default function AppLayout() {
  return (
    <>
      <div className="w-full flex p-3 bg-zinc-950 border-b border-b-zinc-500 border-opacity-50">
        <div className="flex-1 flex w-full px-8 items-center justify-between">
          <span className="text-2xl italic font-extrabold">ggdeck.</span>
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
      <div className="min-h-screen flex flex-col items-center">
        <div className="bg-zinc-900 w-full p-8 flex flex-col items-center gap-4 justify-center sm:flex-row">
          <div className="container bg-zinc-950 rounded-xl max-w-[800px] p-8">
            <div className="flex flex-col gap-3 items-center sm:flex-row justify-between">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="https://github.com/devalexsantos.png" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold ">Alex Santos</span>
                  <span className="font-bold">@alexsantos</span>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <span className="text-sm text-muted-foreground">
                      Membro há: <strong>02 anos</strong>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Jogos zerados: <strong>32</strong>
                    </span>
                  </div>
                </div>
              </div>

              <SocialLinks />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
