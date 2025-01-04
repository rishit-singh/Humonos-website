export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,var(--green-500)_0,transparent_100%)] opacity-20" />
      <div className="container pt-32">
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-8">
            <h2 className="text-xl font-medium">
              Easily find and understand the information you need
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-full bg-black px-4 py-1 text-sm text-white">Search</button>
              <button className="rounded-full bg-black px-4 py-1 text-sm text-white">Explore</button>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="text-xl font-medium">
              Create & summarize content
            </h2>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="text-xl font-medium">
              Automate work
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

