import Image, { StaticImageData } from "next/image";


const CompanyCard = ({ logo }:{logo:StaticImageData}) => {
  return (
    <div className="px-6 py-4 bg-black rounded-sm flex items-center justify-center">
      <Image
        src={logo}
        width={110}
        height={60}
        alt="company logo"
        className="max-w-[60px] min-w-[60px] lg:min-w-[90px] lg:max-w-none"
        priority
      />
    </div>
  );
};

export default CompanyCard;
