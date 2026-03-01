import { useState, useEffect, useRef } from "react";
 import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Link,
  Briefcase,
  ArrowUpRight,
  Terminal,
  Globe,
  Zap,
  Layers,
  Database,
  GitBranch,
  GraduationCap,
  ChevronRight
} from "lucide-react"; 
// ─── PALETTE ───────────────────────────────────────────────────────────────
const C = {
  bg: "#050510",
  surface: "#0d0d1f",
  card: "#10102a",
  border: "#1e1e40",
  pink: "#f72585",
  violet: "#7209b7",
  indigo: "#3a0ca3",
  blue: "#4361ee",
  cyan: "#4cc9f0",
  teal: "#06d6a0",
  yellow: "#ffd166",
  orange: "#f4a261",
  text: "#e0e0ff",
  muted: "#8888bb",
  dim: "#444477",
};

const GRADIENTS = {
  hero: `linear-gradient(135deg, ${C.pink} 0%, ${C.violet} 40%, ${C.blue} 100%)`,
  teal: `linear-gradient(135deg, ${C.teal} 0%, ${C.cyan} 100%)`,
  warm: `linear-gradient(135deg, ${C.yellow} 0%, ${C.orange} 100%)`,
  cool: `linear-gradient(135deg, ${C.blue} 0%, ${C.cyan} 100%)`,
  hot: `linear-gradient(135deg, ${C.pink} 0%, ${C.orange} 100%)`,
  purple: `linear-gradient(135deg, ${C.violet} 0%, ${C.indigo} 100%)`,
};

// ─── DATA ──────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "C / C++", icon: <Terminal size={16} />, color: C.orange, bg: "#1f1200" },
  { name: "HTML & CSS", icon: <Globe size={16} />, color: C.pink, bg: "#1f0012" },
  { name: "JavaScript", icon: <Zap size={16} />, color: C.yellow, bg: "#1f1a00" },
  { name: "TypeScript", icon: <Code2 size={16} />, color: C.blue, bg: "#00081f" },
  { name: "React", icon: <Layers size={16} />, color: C.cyan, bg: "#001a1f" },
  { name: "PHP", icon: <Code2 size={16} />, color: C.violet, bg: "#0d0019" },
  { name: "Supabase", icon: <Database size={16} />, color: C.teal, bg: "#001a10" },
  { name: "WordPress", icon: <Globe size={16} />, color: C.orange, bg: "#1f1200" },
  { name: "Git & GitHub", icon: <GitBranch size={16} />, color: C.pink, bg: "#1f0012" },
];

const PROJECTS = [
  {
    title: "URL Shortener",
    emoji: "🔗",
    desc: "A sleek link shortening web app with custom aliases, built with React and deployed on Vercel. Clean UI, instant results.",
    tags: ["React", "JavaScript", "Vercel"],
    gradient: GRADIENTS.cool,
    live: "https://shoternurl.vercel.app/",
    code: "https://github.com/anjali22-05",
    accent: C.cyan,
  },
  {
    title: "AI/ML Portfolio App",
    emoji: "🤖",
    desc: "Machine learning integration with a React frontend, showcasing model predictions and real-time data visualization for smart insights.",
    tags: ["React", "TypeScript", "Supabase"],
    gradient: GRADIENTS.hero,
    live: "#",
    code: "https://github.com/anjali22-05",
    accent: C.pink,
  },
  {
    title: "Flight Dashboard",
    emoji: "✈️",
    desc: "Full-stack admin dashboard built at The Jersey Flights internship. Role-based access, flight data management, and responsive design.",
    tags: ["PHP", "WordPress", "JavaScript"],
    gradient: GRADIENTS.warm,
    live: "#",
    code: "https://github.com/anjali22-05",
    accent: C.yellow,
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "The Jersey Flights",
    period: "2024 – Present",
    icon: <Briefcase size={18} />,
    color: C.teal,
    bg: "#001a10",
    desc: "Building responsive web interfaces, integrating APIs, and optimizing frontend performance for a modern travel-tech platform.",
    tags: ["PHP", "WordPress", "JavaScript"],
  },
  {
    role: "B.Tech — CSE (AI/ML)",
    company: "University · Final Year",
    period: "2021 – 2025",
    icon: <GraduationCap size={18} />,
    color: C.cyan,
    bg: "#001a1f",
    desc: "Specializing in AI & Machine Learning. Building full-stack projects, contributing to open source, and sharpening real-world skills.",
    tags: ["AI/ML", "React", "C++"],
  },
];

// ─── HOOKS ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", scale: "scale(0.9)" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[dir],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────
function GlowOrb({ color, size, top, left, right, bottom, opacity = 0.15 }) {
  return (
    <div style={{
      position: "absolute", width: size, height: size, borderRadius: "50%",
      background: color, filter: `blur(${size / 2}px)`, opacity,
      top, left, right, bottom, pointerEvents: "none",
    }} />
  );
}

function SectionLabel({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: C.pink, letterSpacing: "0.2em" }}>{num}</span>
      <div style={{ height: 1, width: 40, background: C.pink, opacity: 0.4 }} />
      <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function Tag({ label, color }) {
  return (
    <span style={{
      fontSize: "0.65rem", padding: "3px 10px", borderRadius: 99,
      border: `1px solid ${color}44`, color, background: `${color}11`,
      fontFamily: "monospace", letterSpacing: "0.05em",
    }}>{label}</span>
  );
}

function Button({ children, href, gradient, outline, small }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: small ? "8px 18px" : "13px 28px",
        borderRadius: 8, textDecoration: "none", cursor: "pointer",
        fontFamily: "monospace", fontSize: small ? "0.72rem" : "0.82rem", letterSpacing: "0.05em",
        fontWeight: 600, transition: "all 0.25s",
        ...(outline ? {
          border: `1px solid ${C.cyan}55`, color: hov ? "#fff" : C.cyan,
          background: hov ? `${C.cyan}22` : "transparent",
        } : {
          background: hov ? "transparent" : gradient,
          border: `1px solid transparent`,
          color: hov ? C.text : "#fff",
          boxShadow: hov ? "none" : `0 4px 24px ${C.pink}44`,
          backgroundImage: hov ? "none" : gradient,
          borderColor: hov ? `${C.pink}55` : "transparent",
        }),
      }}
    >{children}</a>
  );
}

function SkillChip({ skill }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
        borderRadius: 10, background: hov ? skill.bg : C.card,
        border: `1px solid ${hov ? skill.color + "55" : C.border}`,
        color: hov ? skill.color : C.muted, cursor: "default",
        transition: "all 0.2s", transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? `0 8px 24px ${skill.color}22` : "none",
      }}
    >
      <span style={{ color: skill.color }}>{skill.icon}</span>
      <span style={{ fontSize: "0.8rem", fontFamily: "monospace" }}>{skill.name}</span>
    </div>
  );
}

function ProjectCard({ p, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.12} dir="up">
      <div
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          background: C.card, borderRadius: 16, overflow: "hidden",
          border: `1px solid ${hov ? p.accent + "44" : C.border}`,
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
          transform: hov ? "translateY(-8px)" : "none",
          boxShadow: hov ? `0 24px 48px ${p.accent}22` : "0 2px 8px #00000066",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Image banner */}
        <div style={{
          height: 160, background: p.gradient, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.15,
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />
          <span style={{ fontSize: "3.5rem", filter: "drop-shadow(0 4px 12px #00000066)", position: "relative", zIndex: 1 }}>{p.emoji}</span>
          <div style={{
            position: "absolute", top: 12, right: 12,
            background: "#00000044", borderRadius: 6, padding: "4px 10px",
            fontSize: "0.65rem", color: "#fff", fontFamily: "monospace", backdropFilter: "blur(8px)",
          }}>PROJECT 0{i + 1}</div>
        </div>

        <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {p.tags.map(t => <Tag key={t} label={t} color={p.accent} />)}
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: C.text, marginBottom: 8 }}>{p.title}</h3>
          <p style={{ color: C.muted, fontSize: "0.82rem", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{p.desc}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <Button href={p.code} outline small><Github size={13} /> Code</Button>
            {p.live !== "#" && <Button href={p.live} gradient={p.gradient} small><ExternalLink size={13} /> Live</Button>}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── CURSOR GLOW ───────────────────────────────────────────────────────────
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div style={{
      position: "fixed", pointerEvents: "none", zIndex: 9999,
      width: 400, height: 400, borderRadius: "50%",
      background: `radial-gradient(circle, ${C.pink}0d 0%, transparent 70%)`,
      transform: "translate(-50%,-50%)",
      left: pos.x, top: pos.y,
      transition: "left 0.08s, top 0.08s",
    }} />
  );
}

// ─── ANIMATED COUNTER ──────────────────────────────────────────────────────
function Counter({ end, label, color }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += Math.ceil(end / 40);
      if (start >= end) { setVal(end); return; }
      setVal(start); requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView,end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.8rem", fontFamily: "'Syne', sans-serif", fontWeight: 800, background: color, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {val}+
      </div>
      <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: C.muted, letterSpacing: "0.1em" }}>{label}</div>
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { cursor: none; }
        a { cursor: none; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(${C.pink}, ${C.cyan}); border-radius: 2px; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor-dot {
          position: fixed; width: 10px; height: 10px; border-radius: 50%;
          background: ${C.pink}; pointer-events: none; z-index: 10000;
          transform: translate(-50%,-50%); transition: transform 0.1s;
        }
      `}</style>

      <CursorGlow />
      <CustomCursor />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 48px", height: 64, display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 20 ? "rgba(5,5,16,0.85)" : "transparent",
        backdropFilter: scrollY > 20 ? "blur(20px)" : "none",
        borderBottom: scrollY > 20 ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: GRADIENTS.hero, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.75rem", fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff",
          }}>AV</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
            Anjali<span style={{ color: C.pink }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {navItems.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{
              padding: "6px 16px", borderRadius: 6, textDecoration: "none",
              fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.05em",
              color: C.muted, transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.color = C.text; e.target.style.background = C.surface; }}
              onMouseLeave={e => { e.target.style.color = C.muted; e.target.style.background = "transparent"; }}
            >{n}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 48px 0", position: "relative", overflow: "hidden" }}>
        <GlowOrb color={C.pink} size={500} top="-100px" left="-100px" opacity={0.12} />
        <GlowOrb color={C.cyan} size={400} bottom="-100px" right="-50px" opacity={0.1} />
        <GlowOrb color={C.violet} size={300} top="40%" left="40%" opacity={0.08} />

        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${C.border}44 1px, transparent 1px), linear-gradient(90deg, ${C.border}44 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }} />

        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          <div>
            <FadeIn delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: `${C.teal}15`, border: `1px solid ${C.teal}33`, marginBottom: 28 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.teal, animation: "pulse-ring 1.5s infinite" }} />
                <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: C.teal, letterSpacing: "0.1em" }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
                <span style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)", color: C.muted, display: "block", fontWeight: 400, marginBottom: 8, fontFamily: "monospace" }}>
                  &gt; Hello, I'm
                </span>
                <span style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)", display: "block",
                  background: GRADIENTS.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundSize: "200% auto", animation: "shimmer 4s linear infinite",
                }}>
                  Anjali Verma
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: C.muted, maxWidth: 520, lineHeight: 1.75, marginBottom: 36 }}>
                Final-year <span style={{ color: C.cyan }}>CSE (AI/ML)</span> student & Web Developer Intern at{" "}
                <span style={{ color: C.yellow }}>The Jersey Flights</span> — crafting interactive, pixel-perfect web experiences.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <Button href="#projects" gradient={GRADIENTS.hero}>
                  <span>View My Work</span> <ArrowUpRight size={15} />
                </Button>
                <Button href="https://linktr.ee/Anjaliverma0522" outline>
                  <Link size={14} /> <span>Linktree</span>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div style={{ display: "flex", gap: 28 }}>
                <Counter end={9} label="TECHNOLOGIES" color={GRADIENTS.hero} />
                <div style={{ width: 1, background: C.border }} />
                <Counter end={3} label="PROJECTS" color={GRADIENTS.teal} />
                <div style={{ width: 1, background: C.border }} />
                <Counter end={1} label="INTERNSHIP" color={GRADIENTS.warm} />
              </div>
            </FadeIn>
          </div>

          {/* Avatar card */}
          <FadeIn delay={0.3} dir="left">
            <div style={{ animation: "float 5s ease-in-out infinite", position: "relative" }}>
              <div style={{
                width: 220, height: 280, borderRadius: 24,
                background: `linear-gradient(135deg, ${C.surface}, ${C.card})`,
                border: `1px solid ${C.border}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
                boxShadow: `0 40px 80px ${C.pink}22, 0 0 0 1px ${C.border}`,
              }}>
                <div style={{ position: "absolute", inset: 0, background: GRADIENTS.hero, opacity: 0.05 }} />
                <div style={{
                  width: 100, height: 100, borderRadius: "50%", marginBottom: 16,
                  background: GRADIENTS.hero, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.5rem", boxShadow: `0 0 30px ${C.pink}55`,
                }}>👩‍💻</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Anjali Verma</div>
                <div style={{ fontSize: "0.7rem", fontFamily: "monospace", color: C.cyan, letterSpacing: "0.05em", marginBottom: 16 }}>CSE · AI/ML · Final Year</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[C.pink, C.cyan, C.yellow, C.teal].map((c, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                {/* floating badge */}
                <div style={{
                  position: "absolute", bottom: -12, right: -12,
                  background: C.surface, border: `1px solid ${C.teal}44`,
                  borderRadius: 10, padding: "6px 12px",
                  fontSize: "0.65rem", fontFamily: "monospace", color: C.teal,
                  boxShadow: `0 8px 24px ${C.teal}22`,
                }}>✈️ @Jersey Flights</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section id="experience" style={{ padding: "120px 48px", position: "relative" }}>
        <GlowOrb color={C.teal} size={300} top="20%" right="-100px" opacity={0.08} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel num="02" label="Experience" />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 60 }}>
              My Journey <span style={{ background: GRADIENTS.teal, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>So Far</span>
            </h2>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={i} delay={i * 0.15} dir="left">
                <ExperienceCard e={e} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "120px 48px", background: C.surface, position: "relative" }}>
        <GlowOrb color={C.pink} size={400} top="-100px" left="30%" opacity={0.07} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel num="03" label="Projects" />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 60 }}>
              Selected <span style={{ background: GRADIENTS.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work</span>
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: "120px 48px", position: "relative" }}>
        <GlowOrb color={C.violet} size={350} bottom="-80px" left="-80px" opacity={0.1} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel num="04" label="Skills" />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
              Technical <span style={{ background: GRADIENTS.cool, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Arsenal</span>
            </h2>
            <p style={{ color: C.muted, fontSize: "0.88rem", maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
              Technologies I work with day-to-day — from low-level C++ to modern React ecosystems.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 12 }}>
            {SKILLS.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.07}>
                <SkillChip skill={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "120px 48px 80px", background: C.surface, position: "relative", overflow: "hidden" }}>
        <GlowOrb color={C.pink} size={500} top="50%" left="50%" opacity={0.06} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <SectionLabel num="05" label="Contact" />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
              Let's Build Something<br />
              <span style={{ background: GRADIENTS.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Awesome Together
              </span>
            </h2>
            <p style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 48px" }}>
              Open to internships, full-time roles, and exciting collaborations. Let's connect and create something meaningful.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
              <Button href="https://github.com/anjali22-05" gradient={GRADIENTS.purple}>
                <Github size={16} /> GitHub
              </Button>
              <Button href="https://www.linkedin.com/in/anjaliverma2205" gradient={GRADIENTS.cool}>
                <Linkedin size={16} /> LinkedIn
              </Button>
              <Button href="https://linktr.ee/Anjaliverma0522" gradient={GRADIENTS.teal}>
                <Link size={16} /> Linktree
              </Button>
              <Button href="https://shoternurl.vercel.app/" outline>
                <Globe size={16} /> URL Shortener
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontSize: "0.72rem", fontFamily: "monospace", color: C.dim }}>© 2025 Anjali Verma · CSE AI/ML</span>
              <span style={{ fontSize: "0.72rem", fontFamily: "monospace", color: C.dim }}>Built with React ✦ Designed with ♥</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ─── EXPERIENCE CARD ───────────────────────────────────────────────────────
function ExperienceCard({ e }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? e.bg : C.card, borderRadius: 16,
        border: `1px solid ${hov ? e.color + "44" : C.border}`,
        padding: "28px 32px",
        display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "0 24px", alignItems: "start",
        transition: "all 0.3s", boxShadow: hov ? `0 16px 48px ${e.color}18` : "none",
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: `${e.color}22`,
        border: `1px solid ${e.color}44`, display: "flex", alignItems: "center", justifyContent: "center",
        color: e.color, flexShrink: 0, marginTop: 2,
      }}>{e.icon}</div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>{e.role}</span>
          <ChevronRight size={14} color={e.color} />
          <span style={{ color: e.color, fontSize: "0.85rem", fontFamily: "monospace" }}>{e.company}</span>
        </div>
        <p style={{ color: C.muted, fontSize: "0.83rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 14 }}>{e.desc}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {e.tags.map(t => <Tag key={t} label={t} color={e.color} />)}
        </div>
      </div>

      <div style={{
        fontFamily: "monospace", fontSize: "0.7rem", color: C.dim,
        background: C.surface, border: `1px solid ${C.border}`, padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap",
      }}>{e.period}</div>
    </div>
  );
}

// ─── CUSTOM CURSOR ─────────────────────────────────────────────────────────
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div style={{
      position: "fixed", width: 10, height: 10, borderRadius: "50%",
      background: C.pink, pointerEvents: "none", zIndex: 10000,
      left: pos.x, top: pos.y, transform: "translate(-50%,-50%)",
      boxShadow: `0 0 12px ${C.pink}`,
      transition: "left 0.05s, top 0.05s",
    }} />
  );
}
