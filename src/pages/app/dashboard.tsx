import GameItem from '@/components/game-item'
import { Button } from '@/components/ui/button'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Dashboard() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      breakpoints: {
        '(min-width: 100px)': {
          slides: { perView: 1, spacing: -90 },
        },
        '(min-width: 764px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 986px)': {
          slides: { perView: 3, spacing: 5 },
        },
        '(min-width: 1246px)': {
          slides: { perView: 4, spacing: 5 },
        },
        '(min-width: 1500px)': {
          slides: { perView: 6, spacing: 5 },
        },
      },
    },
    [
      // add plugins here
    ],
  )

  function handleNextSlide() {
    if (instanceRef && instanceRef.current) {
      instanceRef.current?.next()
    }
  }

  function handlePrevSlide() {
    if (instanceRef && instanceRef.current) {
      instanceRef.current?.prev()
    }
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Últimos jogos adicionados:</span>
          <div className="flex items-center px-2 gap-3 sm:px-8">
            <Button
              onClick={handlePrevSlide}
              className="p-2 flex items-center"
              variant="outline"
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              onClick={handleNextSlide}
              className="p-2 flex items-center"
              variant="outline"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            ref={sliderRef}
            className="keen-slider items-center flex justify-start"
          >
            <div className="keen-slider__slide">
              <GameItem />
            </div>
            <div className="keen-slider__slide">
              <GameItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
