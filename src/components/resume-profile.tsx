export default function ResumeProfile() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between px-5 py-2 bg-zinc-950 rounded-xl">
        <span>Jogos zerados:</span>
        <span>32</span>
      </div>

      <div className="flex flex-col gap-4 px-5 py-2 bg-zinc-950 rounded-xl">
        <span>Jogando atualmente:</span>
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground">Final Fantasy XVI</span>
        </div>
      </div>
    </div>
  )
}
