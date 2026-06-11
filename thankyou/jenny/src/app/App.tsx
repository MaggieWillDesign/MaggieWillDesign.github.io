import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { motion } from "motion/react";
import { MJLogo } from "./components/MJLogo";

const SECTIONS = [
  { id: "resonated", label: "What Resonated" },
  { id: "experience", label: "Experience" },
  { id: "excites", label: "What Excites Me" },
  { id: "questions", label: "Questions" },
  { id: "thankyou", label: "Thank You Jenny" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [heroInView, setHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf: number;
    let target = { x: -1000, y: -1000 };
    let current = { x: -1000, y: -1000 };

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      current.x = lerp(current.x, target.x, 0.07);
      current.y = lerp(current.y, target.y, 0.07);
      setMouse({ x: current.x, y: current.y });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark
      ? "dark"
      : "light";
  }, [isDark]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* SVG noise filter definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="glow-noise" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Mouse spotlight — hero only */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        animate={{
          scale: heroInView ? [1, 1.08, 1] : 1,
          opacity: heroInView ? [0.85, 1, 0.85] : 0,
        }}
        transition={{ duration: heroInView ? 4 : 0.6, repeat: heroInView ? Infinity : 0, ease: "easeInOut" }}
      >
        {/* Ring glow — subtle dark center, soft mid-ring */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px,
              rgba(96,130,220,0.06) 0%,
              rgba(147,197,253,0.14) 28%,
              rgba(147,197,253,0.06) 52%,
              transparent 68%)`,
          }}
        />
        {/* Noise layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            mixBlendMode: isDark ? "soft-light" : "multiply",
            opacity: 0.22,
            maskImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, black 0%, black 45%, transparent 68%)`,
            WebkitMaskImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, black 0%, black 45%, transparent 68%)`,
          }}
        />
      </motion.div>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(8,8,8,0.95), rgba(8,8,8,0))"
            : "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0))",
        }}
      >
        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs tracking-[0.1em] uppercase transition-colors"
              style={{
                color:
                  activeSection === id
                    ? "var(--foreground)"
                    : isDark
                      ? "rgba(242,239,232,0.6)"
                      : "rgba(10,10,10,0.6)",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-auto flex items-center gap-2 px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-300"
          style={{
            border: `1px solid ${isDark ? "rgba(242,239,232,0.3)" : "rgba(10,10,10,0.3)"}`,
            borderRadius: "2px",
            color: isDark
              ? "rgba(242,239,232,0.75)"
              : "rgba(10,10,10,0.75)",
            background: "transparent",
          }}
        >
          {isDark ? (
            <>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line
                  x1="18.36"
                  y1="18.36"
                  x2="19.78"
                  y2="19.78"
                />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line
                  x1="4.22"
                  y1="19.78"
                  x2="5.64"
                  y2="18.36"
                />
                <line
                  x1="18.36"
                  y1="5.64"
                  x2="19.78"
                  y2="4.22"
                />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Dark
            </>
          )}
        </button>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(color-mix(in srgb, var(--foreground) 3%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 3%, transparent) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center mb-12"
          >
            <MJLogo
              size={68}
              className="text-foreground opacity-100"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: fg(0.65), letterSpacing: "0.25em" }}
          >
            maggie williams / design engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5.5vw, 5.75rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Reflections After My
            <br />
            <em>Conversation</em> with Jenny
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroVisible ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "left",
              background: fg(0.3),
            }}
            className="h-px w-16 mx-auto mt-10 mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="max-w-xl mx-auto leading-relaxed"
            style={{ color: fg(0.78), fontSize: "1.05rem" }}
          >
            Thank you for taking the time to discuss the Design
            Engineer opportunity. The conversation reinforced my
            excitement and highlighted themes that strongly
            align with how I approach product development.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            onClick={() => scrollTo("resonated")}
            className="mt-12 inline-flex items-center gap-3 group px-8 py-4 transition-all duration-300"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              border: `1px solid ${fg(0.3)}`,
              borderRadius: "6px",
            }}
          >
            <span className="text-sm tracking-[0.12em] uppercase">
              Continue
            </span>
            <span
              className="inline-block transition-transform group-hover:translate-x-1.5 duration-300"
              style={{ fontSize: "1rem" }}
            >
              →
            </span>
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: fg(0.2) }}
        >
          <div
            className="w-px h-12 bg-current"
            style={{
              background: `linear-gradient(to bottom, transparent, ${fg(0.2)})`,
            }}
          />
        </motion.div>
      </section>

      {/* Section 1 — What Resonated */}
      <section id="resonated" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="01" />
          <SectionHeading>What Resonated</SectionHeading>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16"
            style={{
              border: `1px solid ${fg(0.1)}`,
            }}
          >
            {[
              {
                title: "Ownership & Initiative",
                body: "The emphasis on communicating intent, taking ownership, and moving ideas forward resonated deeply with me.",
              },
              {
                title: "Design Engineering",
                body: "Building systems, workflows, and tools that improve how products are built is exactly the type of work I enjoy most.",
              },
              {
                title: "Collaboration",
                body: "The relationship between design, engineering, and product felt highly collaborative and aligned with how I prefer to work.",
              },
            ].map((card, i) => (
              <ResonanceCard
                key={card.title}
                {...card}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <FullDivider />

      {/* Section 2 — Experience */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="02" />
          <SectionHeading>
            Areas Where My
            <br />
            <em>Experience</em> Aligns
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {[
              {
                title: "Design Systems",
                description:
                  "Maintaining consistency across Figma and code.",
                tag: "Systems",
              },
              {
                title: "Production UI",
                description:
                  "Shipping React experiences with attention to quality.",
                tag: "Engineering",
              },
              {
                title: "Workflow Optimization",
                description:
                  "Reducing friction between design and engineering.",
                tag: "Process",
              },
              {
                title: "AI-Assisted Development",
                description:
                  "Exploring practical ways to accelerate delivery.",
                tag: "Innovation",
              },
            ].map((item, i) => (
              <FeatureCard
                key={item.title}
                {...item}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <FullDivider />

      {/* Section 3 — What Excites Me */}
      <section id="excites" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="03" />
          <SectionHeading>What Excites Me Most</SectionHeading>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${fg(0.2)}, transparent)`,
                }}
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.13 } },
                }}
              >
                {[
                  { step: "Research", detail: "Understanding user needs and product strategy" },
                  { step: "Design", detail: "Translating insight into clear, intentional interfaces" },
                  { step: "Systems", detail: "Codifying patterns into scalable design systems" },
                  { step: "Implementation", detail: "Shipping production-quality React experiences" },
                  { step: "Iteration", detail: "Measuring impact and refining based on evidence" },
                ].map((item, i) => (
                  <TimelineItem
                    key={item.step}
                    {...item}
                    index={i}
                    isLast={i === 4}
                  />
                ))}
              </motion.div>
            </div>

            {/* Pull quote */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p
                style={{
                  fontFamily:
                    "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                  fontWeight: 400,
                  lineHeight: 1.55,
                  color: fg(0.85),
                  fontStyle: "italic",
                }}
              >
                "One thing I enjoy most is understanding the
                full lifecycle of a feature — from user research
                and product strategy through implementation and
                customer impact."
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="w-6 h-px"
                  style={{ background: fg(0.3) }}
                />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: fg(0.65) }}
                >
                  Maggie Williams
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <FullDivider />

      {/* Section 4 — Questions */}
      <section id="questions" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="04" />
          <SectionHeading>
            Questions I'm
            <br />
            <em>Excited</em> To Explore
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {[
              {
                number: "I",
                question:
                  "How does Luxury Presence measure design system adoption?",
                category: "Design Systems",
              },
              {
                number: "II",
                question:
                  "How do AI-assisted workflows evolve across teams?",
                category: "AI & Process",
              },
              {
                number: "III",
                question:
                  "What opportunities exist to further reduce friction between design and engineering?",
                category: "Collaboration",
              },
            ].map((item, i) => (
              <PropertyCard
                key={item.number}
                {...item}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <FullDivider />

      {/* Section 5 — Thank You */}
      <section id="thankyou" className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-14"
          >
            <MJLogo
              size={52}
              className="text-foreground opacity-100"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Thank You Jenny
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            className="h-px w-12 mx-auto my-10"
            style={{ background: fg(0.2) }}
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={3}
            className="leading-relaxed"
            style={{
              color: fg(0.78),
              fontSize: "1.05rem",
              maxWidth: "34rem",
              margin: "0 auto",
            }}
          >
            Thank you again for your time. I left our
            conversation energized by the opportunity to
            contribute to Luxury Presence and help shape how
            great products are designed and built.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={4}
            className="mt-10 text-sm tracking-[0.15em] uppercase"
            style={{ color: fg(0.65) }}
          >
            — Maggie Williams
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: fg(0.1) }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: fg(0.6) }}
        >
          Maggie Williams
        </span>
        <span className="text-xs" style={{ color: fg(0.55) }}>
          Design Engineer Candidate — Luxury Presence
        </span>
      </footer>
    </div>
  );
}

/* ── Sub-components ── */

const fg = (opacity: number) =>
  `color-mix(in srgb, var(--foreground) ${Math.round(opacity * 100)}%, transparent)`;

function SectionLabel({ number }: { number: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [bloomed, setBloomed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBloomed(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative inline-block mb-4">
      {/* Bloom glow */}
      <motion.div
        animate={bloomed ? { opacity: [0, 0.75, 0], scale: [0.6, 2.6, 3.2] } : { opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute pointer-events-none"
        style={{
          inset: "-60px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(147,197,253,0.85), rgba(99,168,252,0.4) 40%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />
      {/* Noise layer masked to bloom */}
      <motion.div
        animate={bloomed ? { opacity: [0, 0.45, 0], scale: [0.6, 2.6, 3.2] } : { opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute pointer-events-none"
        style={{
          inset: "-60px",
          borderRadius: "50%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          mixBlendMode: "soft-light",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative text-xs tracking-[0.25em] uppercase"
        style={{ color: fg(0.6) }}
      >
        {number}
      </motion.p>
    </div>
  );
}

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={1}
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </motion.h2>
  );
}

function FullDivider() {
  return (
    <div className="px-6">
      <div
        className="max-w-6xl mx-auto h-px"
        style={{ background: fg(0.07) }}
      />
    </div>
  );
}

function ResonanceCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      className="p-10 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRight:
          index < 2 ? `1px solid ${fg(0.08)}` : undefined,
        background: hovered ? fg(0.03) : "transparent",
        transition: "background 0.3s",
      }}
    >
      <div
        className="text-xs tracking-[0.2em] uppercase mb-6"
        style={{ color: fg(0.55) }}
      >
        0{index + 1}
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.35rem",
          fontWeight: 400,
          lineHeight: 1.3,
          marginBottom: "1rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: fg(0.78),
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

function FeatureCard({
  title,
  description,
  tag,
  index,
}: {
  title: string;
  description: string;
  tag: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index * 0.5}
      className="relative p-8 overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? fg(0.16) : fg(0.09)}`,
        borderRadius: "2px",
        background: hovered ? fg(0.04) : fg(0.02),
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <span
        className="inline-block text-xs tracking-[0.2em] uppercase mb-6 px-3 py-1"
        style={{
          color: fg(0.65),
          border: `1px solid ${fg(0.2)}`,
          borderRadius: "1px",
        }}
      >
        {tag}
      </span>
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.5rem",
          fontWeight: 400,
          marginBottom: "0.75rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: fg(0.78),
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
      <div
        className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at bottom right, ${fg(0.05)}, transparent)`,
        }}
      />
    </motion.div>
  );
}

function TimelineItem({
  step,
  detail,
  isLast,
}: {
  step: string;
  detail: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className="relative flex items-start gap-8 pl-12"
      style={{ paddingBottom: isLast ? 0 : "2.5rem" }}
    >
      <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "backOut", delay: 0.1 } },
        }}
        className="absolute left-0 top-1.5 w-8 h-8 flex items-center justify-center"
        style={{
          border: `1px solid ${fg(0.2)}`,
          borderRadius: "50%",
          background: "var(--background)",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: fg(0.6) }}
        />
      </motion.div>
      <div>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.15rem",
            fontWeight: 400,
            marginBottom: "0.35rem",
          }}
        >
          {step}
        </p>
        <p
          style={{
            color: fg(0.72),
            fontSize: "0.83rem",
            lineHeight: 1.6,
          }}
        >
          {detail}
        </p>
      </div>
    </motion.div>
  );
}

function PropertyCard({
  number,
  question,
  category,
  index,
}: {
  number: string;
  question: string;
  category: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index * 0.15}
      className="relative flex flex-col justify-between p-8 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? fg(0.16) : fg(0.09)}`,
        borderRadius: "2px",
        minHeight: "200px",
        background: hovered ? fg(0.04) : fg(0.02),
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: fg(0.12),
            lineHeight: 1,
          }}
        >
          {number}
        </span>
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: fg(0.65) }}
        >
          {category}
        </span>
      </div>
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.05rem",
          fontWeight: 400,
          lineHeight: 1.5,
          color: fg(0.88),
          fontStyle: "italic",
        }}
      >
        {question}
      </p>
    </motion.div>
  );
}