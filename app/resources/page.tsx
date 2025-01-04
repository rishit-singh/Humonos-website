export default function ResourcesPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      <section className="container py-24 space-y-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Resources & Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our guides, tutorials, and documentation to get the most out of our platform
          </p>
        </div>
      </section>
    </div>
  )
}

