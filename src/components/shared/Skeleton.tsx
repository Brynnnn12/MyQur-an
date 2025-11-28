interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

export const SkeletonText = ({
  lines = 1,
  className,
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className="h-4 w-full" />
    ))}
  </div>
);

export const SkeletonCard = ({ className }: SkeletonProps) => (
  <div
    className={`p-6 border border-slate-100 rounded-3xl bg-white/90 shadow-lg shadow-emerald-100 ${className}`}
  >
    <div className="flex items-start justify-between">
      <div>
        <Skeleton className="h-4 w-16 mb-3" />
        <Skeleton className="h-8 w-32 mb-2" />
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-12 mb-1" />
        <Skeleton className="h-10 w-16" />
      </div>
    </div>
    <div className="mt-5 rounded-2xl bg-slate-50/80 px-4 py-3">
      <Skeleton className="h-4 w-full" />
    </div>
    <div className="mt-6 flex gap-3">
      <Skeleton className="h-10 flex-1 rounded-2xl" />
      <Skeleton className="h-10 flex-1 rounded-2xl" />
    </div>
  </div>
);

export const SkeletonAyatCard = ({ className }: SkeletonProps) => (
  <div
    className={`px-6 py-6 border border-slate-100 rounded-3xl bg-white/90 shadow-lg shadow-emerald-50 ${className}`}
  >
    <div className="flex items-center justify-between mb-4">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-6 w-12 rounded-full" />
    </div>
    <Skeleton className="h-12 w-full mb-4" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-3/4 mb-5" />
  </div>
);

export const LoadingSkeleton = ({
  label = "Memuat data...",
  fullscreen = false,
}: {
  label?: string;
  fullscreen?: boolean;
}) => {
  if (fullscreen) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <div className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            {label}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 flex flex-col items-center gap-4">
      <SkeletonText lines={3} className="w-full max-w-md" />
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
        {label}
      </p>
    </div>
  );
};

export default Skeleton;
