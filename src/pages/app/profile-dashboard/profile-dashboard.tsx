import GameItem from '@/components/game-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Clock, Trophy } from 'lucide-react'

export default function Dashboard() {
  return (
    <>
      <div className="w-full flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-center items-center">
            <span className="flex gap-2 items-center">
              <Clock size={18} /> Últimos jogos zerados:
            </span>
          </div>
          <div className="container">
            <Carousel
              opts={{
                align: 'center',
              }}
              className="w-full"
            >
              <CarouselContent className="flex gap-0">
                <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <GameItem />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-center items-center">
            <span className="flex gap-2 items-center">
              <Trophy size={18} /> Melhores avaliados:
            </span>
          </div>
          <div className="container">
            <Carousel
              opts={{
                align: 'center',
              }}
              className="w-full"
            >
              <CarouselContent className="flex gap-0">
                <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <GameItem />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
