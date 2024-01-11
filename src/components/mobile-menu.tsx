import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Gamepad2, Home, LogOut, Menu } from 'lucide-react'

export default function MobileMenu() {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu size={28} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="mt-3 w-[200px]">
          <DropdownMenuItem className="flex gap-2">
            <Home size={12} /> Início
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2">
            <Gamepad2 size={12} />
            Meus Jogos
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2">
            <LogOut size={12} />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
