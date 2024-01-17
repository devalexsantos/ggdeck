import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Separator } from './ui/separator'
import { Gamepad2, Home, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export default function DesktopMenu() {
  return (
    <NavigationMenu className="w-full hidden sm:flex">
      <NavigationMenuList className="flex gap-4 text-sm w-full">
        <NavigationMenuItem>
          <NavigationMenuLink className="flex items-center gap-2" href="/">
            <Home size={16} />
            Início
          </NavigationMenuLink>
        </NavigationMenuItem>
        <Separator
          orientation="vertical"
          className="h-[15px] border-zinc-300 border-opacity-90"
        />
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className="flex items-center gap-2">
            <Gamepad2 size={16} />
            Meus Jogos
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button asChild className="rounded">
            <Link to="/register-game" className="flex gap-2 items-center">
              <PlusCircle size={18} />
              Cadastrar Jogo
            </Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
