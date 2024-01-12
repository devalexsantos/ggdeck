import GameItem from '@/components/game-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-6">
        <div className="w-full flex justify-center items-center">
          <span>Últimos jogos adicionados:</span>
        </div>
        <div className="container">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-0">
              <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <GameItem />
              </CarouselItem>
              <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <GameItem />
              </CarouselItem>
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
  )
}
