const UserCardSkeleton = () => {
  return (
    <div className="bg-[#18181c] rounded-2xl p-6 animate-pulse">

      {/* Name */}
      <div className="h-5 w-40 bg-[#2a2a2f] rounded mb-2"></div>

      {/* Username */}
      <div className="h-4 w-24 bg-[#2a2a2f] rounded mb-6"></div>

      {/* Details */}
      <div className="space-y-3">
        <div className="h-4 w-full bg-[#2a2a2f] rounded"></div>
        <div className="h-4 w-3/4 bg-[#2a2a2f] rounded"></div>
        <div className="h-4 w-1/2 bg-[#2a2a2f] rounded"></div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
