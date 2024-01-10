import { Outlet } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ResumeProfile from '@/components/resume-profile'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <aside className="bg-zinc-900 w-full p-8 flex flex-col items-center gap-4 sm:w-[300px]">
        <div className="flex flex-col gap-6">
          <Avatar className="w-28 h-28">
            <AvatarImage src="https://github.com/devalexsantos.png" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <span className="text-xl font-bold text-zinc-300">Alex Santos</span>
        </div>

        <ResumeProfile />
      </aside>
      <Outlet />
    </div>
  )
}
