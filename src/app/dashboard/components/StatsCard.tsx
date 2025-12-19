const StatsCard = ({ title, value }:{title:string,value:number}) => {
  return (
    <div className="bg-[#18181c] rounded-2xl p-6 hover:bg-[#1f1f24] transition">
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <h2 className="text-3xl font-semibold">{value}</h2>
    </div>
  );
};

export default StatsCard;
