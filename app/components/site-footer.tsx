import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay up to date</h3>
          <div className="flex gap-2">
            <Input placeholder="Your email address" type="email" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

