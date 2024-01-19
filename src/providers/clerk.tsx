import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export default function AuthProvider() {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <div className="container p-8 flex flex-col items-center mt-20 gap-3 text-center">
          <h1 className="text-xl">
            Faça o login e comece a cadastrar seus games!
          </h1>
          <span className="text-muted-foreground">
            É de graça. E sempre será.
          </span>
          <SignInButton>
            <Button className="rounded flex items-center gap-3 mt-4">
              <LogIn />
              Fazer login
            </Button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  )
}
