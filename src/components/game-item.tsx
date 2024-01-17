import { Award, Clock } from 'lucide-react'

export default function GameItem() {
  return (
    <div className="w-[220px] h-[340px] border rounded-xl bg-zinc-900 flex flex-col gap-6 items-center p-6">
      <img
        className="rounded-xl"
        src="https://images.igdb.com/igdb/image/upload/t_thumb/co5w3k.jpg"
        width={166}
        height={166}
        alt="Capa do Jogo Final Fantasy XVI"
      />
      <div className="flex justify-start w-full flex-col gap-4">
        <h2 className="text-lg font-semibold truncate">Final Fantasy XVI</h2>
        <div className="flex justify-between">
          <span className="flex gap-2 items-center text-muted-foreground">
            <Clock size={16} />
            11h
          </span>
          <span className="flex gap-2 items-center text-muted-foreground">
            <Award size={18} />
            9.8
          </span>
        </div>
        <span className=" text-xs text-muted-foreground text-center">
          Zerado em: 04/01/2023
        </span>
      </div>
    </div>
  )
}
