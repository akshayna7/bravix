import { useInView } from "../../../../lib/useInView";

const contentData = [
  {
    label: "VISION",
    primaryText: "To be the leading force in digital innovation, empowering brands with tailored marketing strategies that",
    secondaryText: " drive engagement, build trust, and accelerate growth in the ever-evolving digital landscape.",
  },
  {
    label: "MISSION",
    primaryText: "To create data-driven marketing solutions that connect brands with their audience, leveraging creativity and technology to deliver exceptional results.",
    secondaryText: "We aim to transform businesses through impactful digital experiences, ensuring sustainable growth and success.",
  },
];

const imageData = [
  { src: "/images/vision/Frame 26.png", alt: "Business office" },
  { src: "/images/vision/entrepreneurs-and-business-people-conference-in-me-2025-03-17-15-03-34-utc 1.png", alt: "Entrepreneurs and" },
];

function RevealDiv({ children, className, extraDelay }: { children: React.ReactNode; className: string; extraDelay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} reveal${extraDelay ? ` ${extraDelay}` : ""}${inView ? " in-view" : ""}`}
    >
      {children}
    </div>
  );
}

export const MarketingMessageSection = (): JSX.Element => {
  return (
    <section id="about" className="bg-[#161616] py-20 px-6 md:px-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

        <RevealDiv className="flex flex-col gap-6 justify-center" extraDelay="reveal-left">
          <h3 className="font-sans font-medium text-white text-sm tracking-widest uppercase opacity-70">{contentData[0].label}</h3>
          <p className="font-heading font-medium text-2xl md:text-4xl leading-tight">
            <span className="text-white">{contentData[0].primaryText}</span>
            <span className="text-white/40">{contentData[0].secondaryText}</span>
          </p>
        </RevealDiv>

        <RevealDiv className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]" extraDelay="reveal-right">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            alt={imageData[0].alt}
            src={imageData[0].src}
          />
        </RevealDiv>

        <RevealDiv className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] order-last lg:order-none" extraDelay="reveal-left">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            alt={imageData[1].alt}
            src={imageData[1].src}
          />
        </RevealDiv>

        <RevealDiv className="flex flex-col gap-6 justify-center" extraDelay="reveal-right">
          <h3 className="font-sans font-medium text-white text-sm tracking-widest uppercase opacity-70">{contentData[1].label}</h3>
          <p className="font-heading font-medium text-2xl md:text-4xl leading-tight">
            <span className="text-white">{contentData[1].primaryText}</span>
            <span className="text-white/40 block mt-4">{contentData[1].secondaryText}</span>
          </p>
        </RevealDiv>

      </div>
    </section>
  );
};
