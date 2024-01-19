import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import GameItemSearched from '@/components/game-item-searched'

interface GameSearched {
  results: {
    id: number
    name: string
    background_image: string
  }[]
}

export default function RegisterGame() {
  const [searchText, setSearchText] = useState('')

  const { data, isLoading } = useQuery<GameSearched | null>({
    queryKey: ['search', searchText],
    queryFn: getGames,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 5,
  })

  const registerFormSchema = z.object({
    name: z.string(),
  })

  type RegisterForm = z.infer<typeof registerFormSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
    },
  })

  async function getGames() {
    if (searchText === '') {
      return null
    }

    const games = await api
      .get('/', {
        params: { search: searchText },
      })
      .then((res) => res.data)
    console.log(games)
    return games
  }

  function handleSearch(data: RegisterForm) {
    setSearchText(data.name)
  }

  return (
    <div className="flex flex-col gap-8 container">
      <div className="mt-8 p-8 flex flex-col gap-8 items-center rounded-xl bg-zinc-900">
        <h1 className="text-2xl font-bold">Cadastrar Jogo</h1>
        <form
          onSubmit={handleSubmit(handleSearch)}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Input
            className="w-[300px] rounded"
            placeholder="Digite o nome do jogo"
            {...register('name')}
            required
          />
          <Button
            disabled={isSubmitting}
            className="flex gap-2 rounded"
            type="submit"
          >
            <Search size={18} />
            Buscar
          </Button>
        </form>
      </div>
      <div className="container flex flex-wrap gap-4 justify-center">
        {isLoading && <p>Buscando jogos...</p>}
        {data &&
          data.results.map((game) => (
            <GameItemSearched
              key={game.id}
              name={game.name}
              background_image={game.background_image}
            />
          ))}
      </div>
    </div>
  )
}
