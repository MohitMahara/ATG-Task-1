const ProfileCard = () => {
  return (
    <div className="bg-[#18181c] rounded-2xl p-6 text-center">
      
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto rounded-full bg-[#2a2a31] flex items-center justify-center text-xl font-semibold mb-4">
        L
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold">Lalit Mehra</h3>
      <p className="text-sm text-gray-400">Frontend Developer</p>

      {/* Button */}
      <button className="mt-4 px-4 py-2 bg-[#A465B8] rounded-lg text-sm hover:opacity-90">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
