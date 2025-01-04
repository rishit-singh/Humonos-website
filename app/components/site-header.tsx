import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          Playex
        </Link>
        <nav className="flex items-center gap-4">
          <div className="flex items-center rounded-full bg-white/90 px-6 py-2 backdrop-blur">
            {["Product", "Services", "About", "Resources"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-gray-900"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="/signin"
            className="rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-gray-900 backdrop-blur"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  )
}

