import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Separator } from './ui/separator'
import { Gamepad2, Home } from 'lucide-react'

export default function DesktopMenu() {
  return (
    <NavigationMenu className="w-full">
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}
