import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Gamepad2, Home, LogOut, Menu, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

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
          <DropdownMenuItem asChild>
            <Link to="/register-game" className="flex gap-2">
              <PlusCircle size={12} />
              Cadastrar Jogo
            </Link>
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
