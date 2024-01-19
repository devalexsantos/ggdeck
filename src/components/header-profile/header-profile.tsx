import { useParams } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import SocialLinks from '../social-links-profile'

export default function HeaderProfile() {
  const { userId } = useParams()
  return (
    <div className="bg-zinc-900 w-full p-8 flex flex-col items-center gap-4 justify-center sm:flex-row">
      <div className="container bg-zinc-950 rounded-xl max-w-[800px] p-8">
        <div className="flex flex-col gap-3 items-center sm:flex-row justify-between">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <Avatar className="w-28 h-28">
              <AvatarImage src="https://github.com/devalexsantos.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold ">Alex Nascimento</span>
              <span className="font-bold">@{userId}</span>
              <div className="flex flex-col gap-2 sm:flex-row">
                <span className="text-sm text-muted-foreground">
                  Jogos zerados em 2024: <strong>32 / 325</strong>
                </span>
              </div>
            </div>
          </div>

          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
