const Card = ({ icon, title, description }:{icon:string,title:string,description:string}) => {
  return (
    <div className=" w-85 h-90 bg-[#18181c] rounded-3xl p-12 ">
      
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
          
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

export default Card;
