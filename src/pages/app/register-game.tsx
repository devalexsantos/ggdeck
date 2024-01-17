import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

export default function RegisterGame() {
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

  async function handleSearchGame(data: RegisterForm) {
    console.log(data)
  }

  return (
    <div className="container mt-8 p-8 flex flex-col gap-8 items-center rounded-xl bg-zinc-900">
      <h1 className="text-2xl font-bold">Cadastrar Jogo</h1>
      <form
        onSubmit={handleSubmit(handleSearchGame)}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Input
          className="w-[300px] rounded"
          placeholder="Digite o nome do jogo"
          {...register('name')}
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
  )
}
