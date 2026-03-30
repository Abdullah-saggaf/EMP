export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-charcoal-950 px-6 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full animate-pulse">
        {/* Breadcrumb Skeleton */}
        <div className="h-4 w-32 bg-charcoal-800 rounded-lg mb-10" />

        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div className="flex-1 space-y-4">
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-charcoal-800 rounded-full" />
              <div className="h-6 w-24 bg-charcoal-800 rounded-full" />
            </div>
            <div className="h-12 w-3/4 max-w-2xl bg-charcoal-800 rounded-xl" />
            <div className="h-6 w-1/2 max-w-sm bg-charcoal-800 rounded-lg" />
          </div>
          <div className="space-y-3 md:text-right">
            <div className="h-4 w-16 bg-charcoal-800 rounded-lg md:ml-auto" />
            <div className="h-12 w-48 bg-charcoal-800 rounded-xl md:ml-auto" />
          </div>
        </div>

        {/* Gallery Slider Skeleton */}
        <div className="w-full aspect-[16/10] md:aspect-[21/9] bg-charcoal-800 rounded-2xl mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-charcoal-800 rounded-xl" />
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-8 w-48 bg-charcoal-800 rounded-xl" />
              <div className="h-4 w-full bg-charcoal-800 rounded-lg" />
              <div className="h-4 w-5/6 bg-charcoal-800 rounded-lg" />
              <div className="h-4 w-4/6 bg-charcoal-800 rounded-lg" />
            </div>
          </div>
          <div>
            <div className="h-64 bg-charcoal-800 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
