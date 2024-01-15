import { Instagram, Twitch, Twitter } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Twitter size={16} />
        <span className="text-sm text-muted-foreground">@lekzoth</span>
      </div>
      <div className="flex gap-2">
        <Twitch size={16} />
        <span className="text-sm text-muted-foreground">@lekzoth</span>
      </div>
      <div className="flex gap-2">
        <Instagram size={16} />
        <span className="text-sm text-muted-foreground">@lekzoth</span>
      </div>
    </div>
  )
}
