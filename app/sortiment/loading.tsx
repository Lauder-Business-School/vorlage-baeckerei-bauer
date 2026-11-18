export default function SortimentLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="grid md:grid-cols-2 md:h-[600px]">
        <div className="hidden md:block bg-surface" />
        <div className="bg-brand-dark min-h-[440px]" />
      </div>

      {/* Strip skeleton */}
      <div className="h-40 md:h-56 bg-surface" />

      {/* Nav skeleton */}
      <div className="sticky top-16 z-40 bg-page border-b border-rule h-14" />

      {/* Products skeleton */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-4 w-24 bg-surface rounded mb-6" />
          <div className="h-10 w-64 bg-surface rounded mb-4" />
          <div className="h-4 w-full max-w-2xl bg-surface rounded mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className="aspect-[4/3] bg-surface rounded mb-4" />
                <div className="h-6 w-40 bg-surface rounded mb-2" />
                <div className="h-4 w-full bg-surface rounded mb-1" />
                <div className="h-4 w-3/4 bg-surface rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
