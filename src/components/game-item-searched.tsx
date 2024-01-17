/* eslint-disable camelcase */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from './ui/button'
import { PlusCircle } from 'lucide-react'

interface GameItemSearchedProps {
  name: string
  background_image: string
}

export default function GameItemSearched({
  name,
  background_image,
}: GameItemSearchedProps) {
  return (
    <div className="w-full h-[270px] border rounded-xl bg-zinc-900 flex flex-col gap-6 p-6 sm:max-w-[240px]">
      <div className="w-full h-[150px] overflow-hidden rounded-xl">
        <img
          className="w-full min-h-[150px]"
          src={background_image}
          alt="Capa do Jogo Final Fantasy XVI"
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="font-semibold text-center truncate">{name}</span>
          </TooltipTrigger>
          <TooltipContent>{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button
        className="flex items-center gap-2 rounded hover:bg-lime-700"
        variant="outline"
      >
        <PlusCircle size={18} />
        Cadastrar
      </Button>
    </div>
  )
}
