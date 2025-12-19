import Card from "@/components/ui/Card";

import featuresData from "@/assets/card_data";

const Features = () => {
  return (
    <section className="relative bg-black lg:layout-padding pt-20 px-8 lg:pt-[400px] pb-24 -z-10">
      {/* CONTENT */}

      <div className="relative z-0 max-w-6xl mx-auto">
        {/* Heading */}

        <div className="max-w-xl mb-14">
          <h1 className="poppins text-3xl lg:text-5xl text-white mb-4">Features Boxes</h1>

          <p className="poppins text-[#9E9E9E] leading-relaxed">
            A good design is not only aesthetically pleasing, but also
            functional.It should be able to solve the problem.
          </p>
        </div>

        {/* Cards */}

        <div className="flex flex-wrap items-center justify-center gap-12">
          {featuresData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
