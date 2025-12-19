const UserCard = ({
  user,
}: {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
    address: { city: string };
  };
}) => {
  return (
    <div
      className="
        bg-[#18181c]
        rounded-2xl
        p-6
        hover:bg-[#1f1f24]
        transition
        w-full
        min-w-0
        overflow-hidden
        
      "
    >
      {/* Name */}
      <h3 className="text-lg font-semibold truncate">{user.name}</h3>

      <p className="text-sm text-gray-400 truncate">@{user.username}</p>

      {/* Details */}
      <div className="mt-4 space-y-2 text-sm text-gray-400">
        <p className="break-all">
          <span className="font-medium">Email:</span> {user.email}
        </p>

        <p className="break-all">
          <span className="font-medium">Phone:</span> {user.phone}
        </p>

        <p className="truncate">
          <span className="font-medium">City:</span> {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
