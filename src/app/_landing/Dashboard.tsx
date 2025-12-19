import React from "react";

const Dashboard = () => {
  return (
    <div className="relative">
      <div className="lg:absolute lg:-top-30 w-full max-w-8xl h-1/8">
        <section className="relative flex justify-center px-4 lg:pb-40">
          <img
            src="/images/Subtract.svg"
            alt=""
            aria-hidden
            className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 opacity-100  w-full h-auto"
          />

          {/* MAIN CONTAINER */}
          <div className="lg:absolute lg:-top-30 z-30 w-[95%] min-w-[300px] lg:w-full max-w-4xl rounded-4xl bg-[#18181c] p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <aside className="hidden md:flex flex-col justify-between rounded-3xl bg-[#1f2026] p-5 shadow-xl min-h-[420px]">
                <div className="flex justify-center">
                  <img
                    src="/images/dashboardLogo.png"
                    alt="logo"
                    className="h-10 w-10"
                  />
                </div>

                <div className="my-4 h-px bg-[#2d2e35]" />

                <div className="space-y-6 flex-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-4">
                      <span className="h-4 w-4 rounded bg-[#2d2e35]" />
                      <div className="space-y-2 flex-1">
                        <div className="h-2 w-3/4 rounded bg-[#2d2e35]" />
                        <div className="h-2 w-1/2 rounded bg-[#2d2e35]" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  <img
                    src="/images/lady.png"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="h-2 w-24 rounded bg-[#2d2e35]" />
                  <div className="h-2 w-16 rounded bg-[#2d2e35]" />
                </div>
              </aside>

              {/* circles */}
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] rounded-2xl bg-[#1A1C22] shadow-lg overflow-hidden p-4">
                  <HeaderPlaceholder />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 aspect-square">
                      <div
                        className="w-25 h-25 md:w-25 md:h-25 rounded-full flex items-center justify-center"
                        style={{
                          background: `conic-gradient(#F9959D 0%,#A465B8 80%,#313139 80% 100%)`,
                        }}
                      >
                        <div className="bg-[#1A1C22] rounded-full w-[93%] h-[93%] md:w-[87%] md:h-[87%] flex items-center justify-center text-[25px] font-bold text-white">
                          {/* inner circle */}
                          <div className="w-13 h-13 md:w-13 md:h-13 rounded-full flex items-center justify-center bg-[#313139]">
                            <div className="bg-[#1A1C22] rounded-full w-[80%] h-[80%] md:w-[80%] md:h-[80%] flex items-center justify-centertext-white"></div>
                          </div>
                        </div>
                      </div>

                      {/* <img
                        src="/images/ring.png"
                        className="absolute inset-0 w-full h-full object-contain"
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl bg-[#1A1C22] shadow-lg overflow-hidden p-4">
                  <HeaderPlaceholder />
                  <div className="absolute bottom-6 left-1/2 w-4/5 -translate-x-1/2">
                    <img
                      src="/images/graph.png"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col gap-6">
                <div className="relative rounded-2xl bg-[#1A1C22] shadow-lg p-4">
                  <HeaderPlaceholder />
                  <div className="mt-12 space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 opacity-[0.9]"
                      >
                        <img
                          src="/images/lady.png"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="space-y-2 flex-1">
                          <div className="h-2 w-1/2 rounded bg-white/20" />
                          <div className="h-2 w-2/3 rounded bg-white/10" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex h-28 rounded-2xl bg-[#1A1C22] shadow-lg opacity-80" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

// /* ================= SMALL HELPER ================= */
const HeaderPlaceholder = () => (
  <>
    <div className="space-y-2">
      <div className="h-2 w-20 rounded bg-white/10" />
      <div className="h-2 w-14 rounded bg-white/10" />
    </div>
    <div className="absolute top-4 right-4 h-6 w-6 rounded bg-white/10" />
  </>
);
