import React from "react";
import Button from "../../components/ui/Button";
const Guide = () => {
  return (
    <div className="">
      {" "}
      {/* Navbar offset */}
      <section>
        <div className="bg-black pt-10 pb-10 px-8 md:layout-padding poppins flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          {/* <div className="rounded-full bg-gray-500 w-[50%] h-[500px]" /> */}
          <div className="relative w-[350px] h-[350px] md:w-[520px] md:h-[520px] flex items-center justify-center">
            {/* EXTRA BIG OUTER CIRCLE */}
            <div className="absolute w-full h-full rounded-full border border-gray-300/10"></div>

            {/* OUTER BANGLE */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-gray-300/10"></div>

            {/* MIDDLE BANGLE (IMAGE ORBIT) */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-gray-300/10"></div>

            {/* INNER BANGLE */}
            <div className="absolute w-[40%] h-[40%] rounded-full border border-gray-300/10"></div>

            {/* IMAGE ORBIT (6 images on middle ring) */}
            <div className="absolute w-[60%] h-[60%] rounded-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[url('/Ellipse3.png')] bg-cover bg-center"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[url('/Ellipse2.png')] bg-cover bg-center"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[url('/Ellipse4.png')] bg-cover bg-center"></div>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[url('/Ellipse4.png')] bg-cover bg-center"></div>
              <div className="absolute top-[12%] right-[10%] w-10 h-10 rounded-full bg-[url('/Ellipse4.png')] bg-cover bg-center"></div>
              <div className="absolute bottom-[15%] left-[3%] w-10 h-10 rounded-full bg-[url('/Ellipse1.png')] bg-cover bg-center"></div>
            </div>

            {/* CENTER FILLED CIRCLE */}
            <div className="absolute w-[20%] h-[20%] rounded-full bg-[#18181c] flex items-center justify-center">
              {/* CENTER IMAGE */}
              <div className="w-16 h-16 rounded-full bg-[url('/Ellipse_center.png')] bg-cover bg-center"></div>
            </div>
          </div>

          <div className="lg:w-[400px]">
            <h1 className="text-3xl lg:text-[48px] pb-5 text-white">
              We're here to guide and help you at all times
            </h1>

            <p className="text-md poppins text-[#9E9E9E] pb-5">
              A good design is not only aesthetically pleasing, but also
              functional.
            </p>

            <Button className="px-6 py-4">Download</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
