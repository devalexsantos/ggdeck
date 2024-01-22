/* eslint-disable camelcase */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { DialogClose } from '@radix-ui/react-dialog'

interface ModalRegisterGameProps {
  name: string
  id: number
  background_image: string
  platforms: {
    platform: {
      name: string
    }
  }[]
}

export default function ModalRegisterGame({
  name,
  background_image,
  platforms,
}: ModalRegisterGameProps) {
  return (
    <DialogContent className="p-8 overflow-y-scroll max-h-screen">
      <DialogHeader>
        <DialogTitle>{name}</DialogTitle>
        <DialogDescription>
          Adicione este jogo ao seu deck de jogos zerados:
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">
        <div className="w-full max-h-[300px] overflow-hidden rounded-xl">
          <img
            className="w-full max-h-[300px]"
            src={background_image}
            alt="Capa do Jogo Final Fantasy XVI"
          />
        </div>

        <form className="flex flex-col gap-6 mt-6">
          <Label className="flex flex-col gap-3">
            <span className="text-muted-foreground">
              O que você achou do jogo?
            </span>
            <Textarea
              className="outline-none rounded"
              id="resume"
              placeholder="Digite aqui o que você achou do jogo de forma resumida."
            />
          </Label>

          <Label className="flex flex-col gap-3">
            <span className="text-muted-foreground">Plataforma que zerou:</span>
            <Select required>
              <SelectTrigger className="rounded">
                <SelectValue placeholder="Selecione a plataforma" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((platform, index) => (
                  <SelectItem value={platform.platform.name} key={index}>
                    {platform.platform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
          <span>Defina uma nota para cada modalidade:</span>
          <div className="flex gap-4 w-full">
            <Label className="w-full flex flex-col gap-3">
              <span className="text-muted-foreground">Gráficos:</span>
              <Select defaultValue="10" required>
                <SelectTrigger className="rounded w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </Label>

            <Label className="w-full flex flex-col gap-3">
              <span className="text-muted-foreground">História:</span>
              <Select defaultValue="10" required>
                <SelectTrigger className="rounded w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </Label>

            <Label className="w-full flex flex-col gap-3">
              <span className="text-muted-foreground">Gameplay:</span>
              <Select defaultValue="10" required>
                <SelectTrigger className="rounded w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </Label>
          </div>
          <Button type="submit">Cadastrar</Button>
          <DialogClose asChild>
            <Button type="reset" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
        </form>
      </div>
    </DialogContent>
  )
}
