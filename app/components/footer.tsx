import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-white py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
        <div className="text-2xl font-medium">humonos</div>
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Humonos. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

