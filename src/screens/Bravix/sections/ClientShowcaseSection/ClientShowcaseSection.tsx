import { useState } from "react";
import { cn } from "../../../../lib/utils";
import { useInView } from "../../../../lib/useInView";

const clientsData = [
  { name: "Sovereign", number: "01" },
  { name: "Rusmice", number: "02" },
  { name: "WeWork", number: "03" },
  { name: "ROI Minds", number: "04" },
  { name: "Lemon8", number: "05" },
  { name: "Proekta Inc", number: "06" },
  { name: "mobikasa", number: "07" },
];

export const ClientShowcaseSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-20 px-6 md:px-10 w-full">
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={`max-w-7xl mx-auto rounded-3xl bg-[#161616] overflow-hidden min-h-[600px] flex flex-col md:flex-row relative reveal${inView ? " in-view" : ""}`}
      >
        <div className="absolute inset-0 md:left-1/3 opacity-40 md:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent z-10" />
          <img
            className="w-full h-full object-cover"
            alt="Client work showcase"
            src="/images/misc/a5f425eaee62e17bd9621771cb86a29da21d8080_2560 1.png"
          />
        </div>

        <div className="relative z-20 flex flex-col justify-between p-8 md:p-16 h-full w-full md:w-1/2">
          <h2 className="text-white font-sans text-sm tracking-widest uppercase mb-10">Our Clients</h2>

          <div className="flex flex-col gap-4">
            {clientsData.map((client, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);
              const opacity = isActive ? 1 : Math.max(0.2, 1 - distance * 0.3);
              return (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-6 cursor-pointer transition-all duration-300 transform origin-left hover:opacity-100",
                    isActive ? "translate-x-4" : ""
                  )}
                  style={{ opacity }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="font-heading font-normal text-3xl md:text-5xl lg:text-6xl text-white whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="font-heading font-medium text-sm text-white/50 pt-2">{client.number}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="h-[40px] w-[1px] bg-white/20 relative">
              <div
                className="absolute top-0 left-0 w-full bg-white transition-all duration-300"
                style={{ height: `${((activeIndex + 1) / clientsData.length) * 100}%` }}
              />
            </div>
            <div className="text-sm font-sans text-white/50">
              <span className="text-white">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(clientsData.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
