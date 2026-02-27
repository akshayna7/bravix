import { ArrowDownCircle } from "lucide-react";
import { useInView } from "../../../../lib/useInView";

const navigationItems = ["Projects", "About", "Contact"];

const avatars = [
  { src: "/images/image 1.png", alt: "Avatar 1" },
  { src: "/images/image 5.png", alt: "Avatar 2" },
  { src: "/images/image 6.png", alt: "Avatar 3" },
];

const brandLogos = [
  { src: "/images/Frame 7.png", alt: "Brand 1" },
  { src: "/images/image (23).png", alt: "Brand 2" },
  { src: "/images/image (23)1.png", alt: "Brand 3" },
];

export const HeroSection = (): JSX.Element => {
  const nav = useInView(0.1);
  const text = useInView(0.1);
  const avatars2 = useInView(0.1);
  const logos = useInView(0.1);
  const about = useInView(0.1);
  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #161616;
        }

        .hero-orb {
          position: absolute;
          width: 2062px;
          height: 2062px;
          left: calc(50% - 1031px);
          top: 257px;
          background: linear-gradient(180deg, #FF5C00 8.13%, #FFFFFF 29.96%);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* ── DESKTOP (≥1024px): original absolute layout ── */
        @media (min-width: 1024px) {
          .hero-section {
            min-height: 1364px;
          }
          .hero-container {
            position: relative;
            padding: 0 20px;
          }
          .hero-nav {
            position: absolute;
            top: 30px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .hero-text-row {
            position: absolute;
            top: 210px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
          .hero-h1 {
            font-size: 65px;
            line-height: 65px;
            width: 587px;
          }
          .hero-subtitle {
            width: 278px;
          }
          .hero-avatars {
            position: absolute;
            top: 360px;
            left: 0;
            display: flex;
            flex-direction: row;
          }
          .hero-portfolio-link {
            position: absolute;
            top: 700.6px;
            left: 0;
          }
          .hero-brand-logos {
            position: absolute;
            top: 668.67px;
            left: calc(50% - 289px);
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }
          .hero-brand-logo {
            width: 186px;
            height: 100px;
            flex-shrink: 0;
          }
          .hero-scroll {
            position: absolute;
            top: 695.1px;
            right: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;
          }
          .hero-about-text {
            position: absolute;
            top: 1008.25px;
            left: 0;
            width: 502px;
            font-size: 35px;
            line-height: 40px;
          }
          .hero-about-col {
            position: absolute;
            top: 1050.25px;
            right: 0;
            width: 393px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
        }

        /* ── MOBILE / TABLET (<1024px): normal flow ── */
        @media (max-width: 1023px) {
          .hero-section {
            min-height: unset;
          }
          .hero-container {
            display: flex;
            flex-direction: column;
            gap: 56px;
            padding: 48px 24px 80px;
          }
          .hero-nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .hero-text-row {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .hero-h1 {
            font-size: clamp(38px, 10vw, 55px);
            line-height: 1.1;
            width: 100%;
          }
          .hero-subtitle {
            width: 100%;
            max-width: 400px;
          }
          .hero-avatars {
            display: flex;
            flex-direction: row;
          }
          .hero-brand-logos {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
          }
          .hero-brand-logo {
            width: calc(33% - 8px);
            min-width: 90px;
            height: 70px;
          }
          .hero-portfolio-link {
            display: inline-block;
          }
          .hero-scroll {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            justify-content: flex-end;
          }
          .hero-about-text {
            width: 100%;
            font-size: clamp(22px, 5vw, 32px);
            line-height: 1.3;
          }
          .hero-about-col {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
          }
        }
      `}</style>

      <div className="hero-orb" />

      <div className="hero-container">
        {/* Navbar */}
        <nav ref={nav.ref as React.Ref<HTMLElement>} className={`hero-nav reveal${nav.inView ? " in-view" : ""}`}>
          <img
            style={{ width: "123px", height: "30px", objectFit: "contain" }}
            alt="Bravix Logo"
            src="/images/logo.png"
          />
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero text row */}
        <div ref={text.ref as React.Ref<HTMLDivElement>} className={`hero-text-row reveal${text.inView ? " in-view" : ""}`}>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Elevate your brand<br />with digital excellence
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Cutting-edge design, innovative technology, and strategic solutions
            to take your brand to the next level
          </p>
        </div>

        {/* Avatars */}
        <div ref={avatars2.ref as React.Ref<HTMLDivElement>} className={`hero-avatars reveal reveal-delay-2${avatars2.inView ? " in-view" : ""}`}>
          {avatars.map((avatar, i) => (
            <div
              key={i}
              style={{
                boxSizing: "border-box",
                width: "50px",
                height: "50px",
                borderRadius: "35.7px",
                background: "#FFFFFF",
                border: "1.43px solid #000000",
                overflow: "hidden",
                marginLeft: i === 0 ? "0" : "-10px",
                position: "relative",
                zIndex: i,
              }}
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Brand logos */}
        <div ref={logos.ref as React.Ref<HTMLDivElement>} className={`hero-brand-logos reveal reveal-delay-1${logos.inView ? " in-view" : ""}`}>
          {brandLogos.map((logo, i) => (
            <div
              key={i}
              className="hero-brand-logo"
              style={{
                background: "#FFFFFF",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* SEE OUR PORTFOLIO + SCROLL NOW row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a
            href="#projects"
            className="hero-portfolio-link"
            style={{
              fontFamily: "'Hiragino Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "-0.03em",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            SEE OUR PORTFOLIO
          </a>

          <a
            href="#projects"
            className="hero-scroll"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "'Hiragino Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.03em",
                color: "#000000",
              }}
            >
              SCROLL NOW
            </span>
            <ArrowDownCircle style={{ width: "35px", height: "35px", color: "#000000" }} strokeWidth={1} />
          </a>
        </div>

        {/* About text */}
        <p
          ref={about.ref as React.Ref<HTMLParagraphElement>}
          className={`hero-about-text reveal reveal-left${about.inView ? " in-view" : ""}`}
          style={{
            fontFamily: "'Hiragino Sans', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          <span style={{ color: "#000000" }}>
            Bravix Marketing Management is a dynamic digital agency based in
            Dubai —{" "}
          </span>
          <span style={{ color: "#8E8E8E" }}>
            dedicated to driving business growth through innovative and
            data-driven marketing solutions.
          </span>
        </p>

        {/* About Us column */}
        <div className="hero-about-col">
          <span
            style={{
              fontFamily: "'Hiragino Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "-0.03em",
              color: "#000000",
            }}
          >
            ABOUT US
          </span>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
              letterSpacing: "-0.03em",
              color: "#252525",
              margin: 0,
            }}
          >
            We understand that in today's fast-paced digital landscape,
            businesses need more than just visibility—they need impact. Our team
            of strategists, creatives, and analysts collaborates closely with
            clients to craft bespoke marketing campaigns that deliver measurable
            results. Whether you're a startup or an established brand, we bring
            expertise, creativity, and cutting-edge technology to the table,
            ensuring your business stands out in the competitive digital world.
          </p>
        </div>
      </div>
    </section>
  );
};
