
import Button from "@/components/ui/Button";

const NAVBAR_HEIGHT = 96; 

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* HERO BACKGROUND */}
      <div
        className="relative lg:min-h-[140vh] bg-black"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
       
        <div
          className="pointer-events-none absolute inset-0 opacity-50 md:opacity-100"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 120px)",
          }}
        />

        {/* MOON / BLOBS - Scaled down for mobile to prevent overflow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Center blob */}
          <div
            className="absolute left-1/2 top-1/2 h-[100px] w-[100px] md:h-[140px] md:w-[140px]
                       -translate-x-1/2 -translate-y-1/2
                       rounded-full blur-[35px] md:blur-[45px]"
            style={{
              background:
                "radial-gradient(circle, rgba(140,140,140,0.55) 0%, rgba(120,120,120,0.35) 35%, rgba(120,120,120,0.15) 55%, transparent 75%)",
            }}
          />

          {/* Left blob - Shifted and scaled */}
          <div
            className="absolute -left-10 md:left-[10%] top-[25%] md:top-[35%] h-[200px] w-[200px] md:h-[320px] md:w-[320px]
                       rounded-full blur-[60px] md:blur-[80px] opacity-70 md:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(140,140,140,0.50) 0%, rgba(120,120,120,0.30) 40%, rgba(120,120,120,0.15) 60%, transparent 78%)",
            }}
          />

          {/* Right blob - Shifted and scaled */}
          <div
            className="absolute -right-10 md:right-[10%] top-[45%] md:top-[40%] h-[200px] w-[200px] md:h-[320px] md:w-[320px]
                       rounded-full blur-[60px] md:blur-[80px] opacity-70 md:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(140,140,140,0.50) 0%, rgba(120,120,120,0.30) 40%, rgba(120,120,120,0.15) 60%, transparent 78%)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mt-20 md:mt-40 flex flex-col items-center text-center px-6 pb-20 md:pb-40">
          <h1 className="max-w-4xl text-4xl sm:text-2xl md:text-4xl lg:text-7xl font-semibold text-white leading-[1.1]">
            Beautiful Landing Page <br className="hidden sm:block" />
            Design for You
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-[18px] lg:text-[22px] leading-relaxed text-[#9E9E9E]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>

          <div className="mt-10 w-full sm:w-auto px-4 sm:px-0">
            <Button className="w-fit md:w-full sm:w-auto px-4 py-3 lg:px-8 lg:py-4 text-lg">
              Download Template
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;