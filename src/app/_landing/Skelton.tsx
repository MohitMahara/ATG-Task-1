export const SkeletonRow1 = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Left square */}
      <div className="h-4 w-4 rounded bg-[#2d2e35]" />

      {/* Right lines */}
      <div className="flex flex-col gap-2">
        <div className="h-2 w-24 rounded bg-[#2d2e35]" />
        <div className="h-2 w-16 rounded bg-[#2d2e35]" />
      </div>
    </div>
  );
};


