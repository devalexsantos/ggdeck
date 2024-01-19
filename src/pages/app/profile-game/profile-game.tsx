import GameItem from '@/components/game-item'
import {
  Gamepad2,
  LayoutGrid,
  MonitorCheck,
  ScrollText,
  ThumbsUp,
} from 'lucide-react'

export default function ProfileGame() {
  return (
    <div className="container p-8 flex flex-col gap-8 items-center sm:flex-row sm:gap-8 sm:items-start">
      <GameItem />
      <div className="w-full border rounded-xl bg-zinc-900 p-8">
        <div className="flex flex-col gap-6">
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-bold">O que eu achei?</span>
              <p className="text-muted-foreground">
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span>Média:</span>
              <span className="text-2xl font-bold text-lime-500 sm:text-5xl">
                8.9
              </span>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            <div className="w-[100px] h-[100px] border border-l-2 rounded-xl border-zinc-500 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <LayoutGrid size={30} />
                <span className="text-muted-foreground text-sm">
                  Plataforma
                </span>
                <span className="font-bold">PS5</span>
              </div>
            </div>

            <div className="w-[100px] h-[100px] border border-l-2 rounded-xl border-zinc-500 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <ScrollText size={30} />
                <span className="text-muted-foreground">História</span>
                <span className=" text-lime-500 font-bold">9.0</span>
              </div>
            </div>

            <div className="w-[100px] h-[100px] border border-l-2 rounded-xl border-zinc-500 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <MonitorCheck size={30} />
                <span className="text-muted-foreground">Gráficos</span>
                <span className=" text-amber-500 font-bold">7.0</span>
              </div>
            </div>

            <div className="w-[100px] h-[100px] border border-l-2 rounded-xl border-zinc-500 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Gamepad2 size={30} />
                <span className="text-muted-foreground">Gameplay</span>
                <span className=" text-lime-500 font-bold">9.0</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2 max-w-[240px]">
              <span className="font-bold">Plataformas disponíveis:</span>
              <p className="text-sm text-muted-foreground">
                PC (Microsoft Windows) | PlayStation 4 | Xbox One | Nintendo
                Switch | PlayStation 5
              </p>
            </div>
            <ThumbsUp size={50} className="text-lime-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
