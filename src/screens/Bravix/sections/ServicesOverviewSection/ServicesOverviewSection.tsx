import { useInView } from "../../../../lib/useInView";

const servicesData = [
  {
    title: "Digital Strategy & Performance Marketing",
    image: "/images/misc/image 19.png",
    description: "We build powerful, insight-driven digital strategies that align with your business objectives. From market research to performance-driven advertising, we optimize every step to maximize ROI and ensure sustainable success.",
    background: "white",
  },
  {
    title: "Social Media Growth & Community Management",
    image: "/images/misc/Frame 6 (1).png",
    description: "Your brand's online presence is more than just posts—it's about building connections. We develop engaging content, manage social interactions, and foster an active community to boost brand loyalty and engagement across all platforms.",
    background: "gray",
  },
  {
    title: "Advanced Analytics & Reporting",
    image: "/images/misc/Frame 6 (2).png",
    description: "Understanding your marketing performance is crucial. We provide in-depth analytics and real-time reporting to help you make data-backed decisions, optimize campaigns, and track progress towards your goals.",
    background: "white",
  },
  {
    title: "Creative Content & Visual Identity",
    image: "/images/misc/Frame 6 (3).png",
    description: "From compelling graphics to immersive visuals, we craft high-quality creative assets that capture your brand's essence and tell your story in a way that resonates with your audience.",
    background: "gray",
  },
  {
    title: "Video Production & Motion Graphics",
    image: "/images/misc/image 15.png",
    description: "Video content is at the heart of digital engagement. We produce captivating videos and animations, from brand storytelling to product showcases, ensuring your message leaves a lasting impression.",
    background: "white",
  },
  {
    title: "UX/UI Design & User Experience Optimization",
    image: "/images/misc/Frame 6 (4).png",
    description: "A seamless user experience is key to customer retention. We design intuitive, visually appealing interfaces that enhance usability and drive conversions across websites and apps.",
    background: "gray",
  },
  {
    title: "Figma Prototyping & Web Design",
    image: "/images/misc/Frame 6 (5).png",
    description: "Bringing ideas to life with interactive prototypes, we streamline the design process using Figma and create stunning, high-performing websites tailored to your business needs.",
    background: "white",
  },
  {
    title: "Multilingual Content & Translation Services",
    image: "/images/misc/image 22.png",
    description: "Reaching a global audience requires precision. We offer professional translation services across multiple languages, ensuring that your content is culturally relevant and accurately conveys your brand message.",
    background: "gray",
  },
];

function ServiceCard({ service }: { service: typeof servicesData[0] }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`rounded-xl overflow-hidden reveal${inView ? " in-view" : ""} ${
        service.background === "gray" ? "bg-[#f6f6f6]" : "bg-white border border-gray-100"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 md:gap-12">
        <h3 className="font-heading font-normal text-black text-2xl md:text-3xl leading-tight md:w-1/3">
          {service.title}
        </h3>
        <div className="w-full md:w-[200px] h-[200px] bg-[#c0c0c0] rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            alt={service.title}
            src={service.image}
            loading="lazy"
          />
        </div>
        <p className="font-sans font-normal text-[#252525] text-sm md:text-base leading-relaxed md:w-1/3">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export const ServicesOverviewSection = (): JSX.Element => {
  const heading = useInView();
  return (
    <section className="bg-white py-20 px-6 md:px-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h2
          ref={heading.ref as React.Ref<HTMLHeadingElement>}
          className={`font-heading text-3xl md:text-4xl text-black font-medium mb-8 reveal reveal-left${heading.inView ? " in-view" : ""}`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
