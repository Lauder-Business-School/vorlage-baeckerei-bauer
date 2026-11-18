export default function FilialenLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-brand-dark min-h-[400px]" />

      {/* Cards skeleton */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-4 w-24 bg-surface rounded mb-6" />
          <div className="h-10 w-64 bg-surface rounded mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-rule">
                <div className="h-48 bg-surface" />
                <div className="p-6">
                  <div className="h-6 w-48 bg-surface rounded mb-3" />
                  <div className="h-4 w-full bg-surface rounded mb-2" />
                  <div className="h-4 w-3/4 bg-surface rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
