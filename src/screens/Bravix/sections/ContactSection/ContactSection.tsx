import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useInView } from "../../../../lib/useInView";

const navigationLinks = [
  { label: "Projects" },
  { label: "About" },
  { label: "Contact" },
  { label: "Privacy" },
];

export const ContactSection = (): JSX.Element => {
  const heading = useInView();
  const form = useInView();

  return (
    <section id="contact" className="relative w-full bg-[#161616] overflow-hidden py-20 px-6 md:px-10">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rotate-[-5.35deg] pointer-events-none opacity-50 md:opacity-100">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-white rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#fd6916] rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between h-full min-h-[500px]">
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-12">

          <div
            ref={heading.ref as React.Ref<HTMLDivElement>}
            className={`flex flex-col gap-6 reveal reveal-left${heading.inView ? " in-view" : ""}`}
          >
            <h2 className="font-heading font-medium text-white text-5xl md:text-[65px] leading-tight tracking-tight">
              Let's Connect
            </h2>
            <p className="font-sans font-normal text-white/80 text-sm md:text-base max-w-md leading-relaxed">
              Have a project in mind? Get in touch with us today to see how we can elevate your brand's digital presence.
            </p>
          </div>

          <form
            ref={form.ref as React.Ref<HTMLFormElement>}
            className={`flex flex-col gap-4 max-w-md w-full reveal${form.inView ? " in-view" : ""}`}
          >
            <Input
              type="email"
              placeholder="Email"
              className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white placeholder:text-white/50 focus:border-white transition-colors"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white placeholder:text-white/50 focus:border-white transition-colors"
            />
            <Button
              type="submit"
              className="w-fit rounded-full bg-[#f26721] px-8 py-3 text-sm font-medium hover:bg-[#f26721]/90 transition-colors mt-2"
            >
              SUBMIT
            </Button>
          </form>

          <footer className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-12 md:mt-0 pt-10 border-t border-white/10 md:border-0">
            <img className="h-8 w-auto object-contain" alt="Bravix Logo" src="/images/logo.png" />
            <nav className="flex flex-wrap items-center gap-6">
              {navigationLinks.map((link, index) => (
                <a key={index} href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </footer>

        </div>
      </div>
    </section>
  );
};
