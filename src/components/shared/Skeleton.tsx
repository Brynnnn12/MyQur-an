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

export const SkeletonTafsirItem = () => (
  <div className="rounded-3xl border border-slate-100 bg-white/95 px-6 py-6 shadow-lg shadow-indigo-50">
    <Skeleton className="h-4 w-16 mb-4 bg-indigo-200" />
    <SkeletonText lines={3} />
  </div>
);

// Skeleton untuk header dengan gradient
interface SkeletonHeaderProps {
  variant?: "emerald" | "purple";
}

export const SkeletonDetailHeader = ({
  variant = "emerald",
}: SkeletonHeaderProps) => {
  const gradientClass =
    variant === "emerald"
      ? "from-emerald-600 via-teal-500 to-blue-600 shadow-[0_20px_60px_rgba(6,95,70,0.35)]"
      : "from-purple-600 via-indigo-600 to-blue-600 shadow-[0_20px_60px_rgba(79,70,229,0.35)]";

  return (
    <div
      className={`rounded-3xl bg-linear-to-r ${gradientClass} px-8 py-10 text-white`}
    >
      <div className="animate-pulse bg-white/20 rounded h-4 w-20 mb-4" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2" />
          <div className="animate-pulse bg-white/20 rounded h-4 w-32 mb-4" />
          <div className="animate-pulse bg-white/20 rounded h-4 w-40" />
        </div>
        <div className="rounded-2xl bg-white/15 px-6 py-4 text-center">
          <div className="animate-pulse bg-white/20 rounded h-4 w-16 mb-2" />
          <div className="animate-pulse bg-white/20 rounded h-8 w-20" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTafsirHeader = () => (
  <div className="rounded-3xl bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(79,70,229,0.35)]">
    <div className="animate-pulse bg-white/20 rounded h-4 w-12 mb-4" />
    <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2" />
    <div className="animate-pulse bg-white/20 rounded h-4 w-32" />
  </div>
);

export const SkeletonHeroSection = () => (
  <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-16 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)] text-center">
    <div className="animate-pulse bg-white/20 rounded h-12 w-96 mx-auto mb-6" />
    <div className="animate-pulse bg-white/20 rounded h-6 w-64 mx-auto mb-8" />
    <div className="animate-pulse bg-white/20 rounded h-12 w-48 mx-auto" />
  </div>
);

export const SkeletonContentSection = ({
  centered = false,
}: {
  centered?: boolean;
}) => (
  <div
    className={`rounded-3xl bg-white/90 px-8 py-12 shadow-lg shadow-emerald-100 ${
      centered ? "text-center" : ""
    }`}
  >
    <Skeleton className={`h-8 mb-6 ${centered ? "w-56 mx-auto" : "w-48"}`} />
    <SkeletonText lines={centered ? 2 : 4} className="mb-8" />
    <Skeleton className={`h-12 ${centered ? "w-48 mx-auto" : "w-40"}`} />
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
