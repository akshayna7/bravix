import { ArrowUpRight } from "lucide-react";
import { useInView } from "../../../../lib/useInView";

const portfolioItems = [
  { title: "Proekta Inc.", src: "/images/ourwork/a95 1.png", bg: "#F7F7F7", textColor: "#FFFFFF", category: "Branding" },
  { title: "WeWork", src: "/images/ourwork/201711081946511055147744 1.png", bg: "#F7F7F7", textColor: "#FFFFFF", category: "Design" },
  { title: "Lemon8", src: "/images/ourwork/Frame 12.png", bg: "#FFF638", textColor: "#000000", category: "Marketing" },
  { title: "mobikasa", src: "/images/ourwork/Frame 14.png", bg: "#F7F7F7", textColor: "#FFFFFF", category: "Development" },
];

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const { ref, inView } = useInView();
  const delay = index % 2 === 0 ? "" : " reveal-delay-2";
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`group relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow reveal${delay}${inView ? " in-view" : ""}`}
    >
      <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-xs font-sans uppercase tracking-wider text-white mb-1 block drop-shadow-md">{item.category}</span>
          <h3 className="font-heading font-semibold text-xl text-white drop-shadow-md">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}

export const PortfolioGallerySection = (): JSX.Element => {
  const header = useInView();
  return (
    <section id="projects" className="w-full bg-white text-black py-20 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

        <div
          ref={header.ref as React.Ref<HTMLDivElement>}
          className={`flex justify-between items-center w-full border-b border-black/10 pb-6 reveal${header.inView ? " in-view" : ""}`}
        >
          <h2 className="font-heading font-medium text-2xl md:text-3xl tracking-tight">Selected Works</h2>
          <a href="#" className="flex items-center gap-2 text-sm font-sans font-medium hover:text-gray-600 transition-colors group">
            SEE ALL PROJECTS
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
