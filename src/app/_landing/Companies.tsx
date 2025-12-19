
import CompanyCard from "@/components/ui/CompanyCard";
import companiesData from "../../assets/companiesData.js";

const Companies = () => {
  return (
    <section className="w-full bg-[#18181c] py-12 flex flex-col items-center gap-10 h-150">
      
      <h2 className="poppins text-white text-3xl leading-10 lg:text-5xl font-semibold text-center pt-20 lg:leading-15">
        Companies we Worked <br />
        With in Since 2015
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {companiesData.map((item) => (
          <CompanyCard key={item.id} logo={item.logo} />
        ))}
      </div>

    </section>
  );
};

export default Companies;
