import { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, MapPin, Linkedin, Instagram, Mail,
  GraduationCap, Users, Trophy, Calendar, Sparkles,
  Brain, PenTool, Quote, Music2, Sun, Moon,
} from "lucide-react";
import shonibareAsset from "@/assets/shonibare.jpg.asset.json";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#journey", label: "Journey" },
  { href: "#learning", label: "Learning" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as "light" | "dark" | null;
    const initial = stored ?? "dark";
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Navbar({ theme, toggle }: { theme: "light" | "dark"; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container-narrow h-16 flex items-center justify-between">
        <a href="#" className="font-display text-base tracking-tight">
          Analytical <span className="text-accent">Scholar</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            Let's Connect
          </a>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm text-muted">Hello, I'm</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Shonibare AbdulGhaffar
          </h1>
          <div className="border-l-2 border-accent pl-3">
            <p className="font-display text-2xl md:text-3xl font-semibold text-accent leading-tight">
              Analytical Scholar
            </p>
          </div>
          <p className="text-base md:text-lg font-semibold text-foreground/90 leading-snug max-w-xl">
            300-Level Chemistry Student at <span className="text-accent">LASUED</span>
            <span className="text-muted font-normal"> | </span>
            AI Development Trainee at <span className="text-accent">BELIGHT TECH</span>
            <span className="text-muted font-normal"> | </span>
            <span className="text-accent">Graphic Designer</span>
          </p>
          <p className="text-foreground/80 leading-relaxed max-w-xl">
            I'm learning AI development while studying Chemistry. Alongside my studies, I
            explore graphic design, student leadership, and digital tools that help me grow.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#journey" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent transition">
              Explore My Journey
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted hover:text-accent transition"><Linkedin className="h-4 w-4" /></a>
            <a href="https://instagram.com/analytical_scholar" aria-label="Instagram" className="text-muted hover:text-accent transition"><Instagram className="h-4 w-4" /></a>
            <a href="https://tiktok.com/@analytical_scholar" aria-label="TikTok" className="text-muted hover:text-accent transition"><Music2 className="h-4 w-4" /></a>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5" /> Lagos, Nigeria
            </span>
          </div>
        </div>

        <div className="flex md:justify-end justify-start">
          <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border border-border ring-1 ring-accent/20">
            <img src={shonibareAsset.url} alt="Shonibare AbdulGhaffar" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal">
      <p className="text-xs tracking-widest uppercase text-accent font-medium">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl mt-2">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="About" title="About Me" />
        <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed max-w-2xl">
          <p>My name is Shonibare AbdulGhaffar, and most people know me as Analytical Scholar.</p>
          <p>
            I'm a 300-level Chemistry student at Lagos State University of Education (LASUED).
            Beyond academics, I have a growing interest in technology, creativity, and continuous learning.
          </p>
          <p>
            My journey has led me into graphic design, student leadership, and AI development
            through my training at BELIGHT TECH.
          </p>
          <p>
            I believe meaningful growth comes from staying curious, embracing challenges, and
            consistently improving every day.
          </p>
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  return (
    <section className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="Personal" title="Beyond Academics" />
        <div className="mt-6 p-6 rounded-xl bg-card border border-border max-w-2xl">
          <p className="text-foreground/85 leading-relaxed">
            When I'm not studying Chemistry or learning AI development, I spend time designing
            graphics, exploring new digital tools, participating in student leadership activities,
            and continuously improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

const ROLES = [
  { icon: GraduationCap, title: "Head of Class (HOC)", org: "BSc Chemistry 300L, LASUED", desc: "Representing classmates, coordinating academic matters, and serving as a bridge between students and lecturers." },
  { icon: Users, title: "Welfare I", org: "MSSN LASUED", desc: "Supporting student welfare initiatives and helping organize activities that benefit members." },
  { icon: Trophy, title: "Assistant Sports Director", org: "NULASS LASUED", desc: "Assisting in planning and coordinating sporting activities that encourage participation and teamwork." },
];

function Leadership() {
  return (
    <section id="leadership" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="Leadership" title="Roles I currently hold" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
          {ROLES.map((r) => (
            <div key={r.title} className="reveal p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors flex flex-col h-full">
              <div className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.10)" }}>
                <r.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="font-display text-lg mt-4">{r.title}</div>
              <div className="text-xs text-accent mt-1">{r.org}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { date: "June 2026", title: "Started AI Development training at BELIGHT TECH." },
  { date: "2025 – Present", title: "Continuing studies as a Chemistry undergraduate at LASUED." },
  { date: "2026", title: "Serving in leadership positions and representing fellow students." },
  { date: "Current Focus", title: "Developing skills in AI, digital tools, graphic design, and problem-solving." },
];

function Journey() {
  return (
    <section id="journey" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="Timeline" title="My Journey" />
        <div className="relative mt-8 pl-6 border-l border-border max-w-2xl">
          <div className="space-y-7">
            {TIMELINE.map((t, i) => (
              <div key={i} className="relative reveal">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" /> {t.date}
                </div>
                <p className="text-foreground/90 mt-1 leading-relaxed">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = ["AI Tools", "Prompt Engineering", "Graphic Design", "Digital Problem Solving", "Content Creation", "Personal Branding"];

function Learning() {
  return (
    <section id="learning" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow space-y-12">
        <div>
          <SectionTitle eyebrow="Currently Learning" title="Skills I'm building on" />
          <div className="flex flex-wrap gap-2 mt-6">
            {SKILLS.map((s) => (
              <span key={s} className="text-sm px-4 py-2 rounded-full bg-card border border-border text-foreground/85 hover:border-accent hover:text-accent transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>

        <blockquote className="reveal relative p-6 rounded-xl bg-card border border-border max-w-2xl">
          <Quote className="absolute -top-3 left-5 h-6 w-6 text-accent bg-background p-1" />
          <p className="font-display text-lg sm:text-xl text-foreground leading-snug">
            "Growth comes from staying curious and showing up consistently."
          </p>
        </blockquote>

        <div>
          <SectionTitle eyebrow="Current Training" title="Where I'm training" />
          <div className="reveal mt-6 p-6 rounded-xl border border-border bg-card border-l-4 border-l-accent max-w-2xl">
            <h3 className="font-display text-xl">BELIGHT TECH</h3>
            <p className="text-sm text-foreground/85 mt-1">AI Development Trainee</p>
            <p className="text-xs text-muted mt-1">Started June 2026</p>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              Learning practical AI tools, prompt engineering, and digital solution building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { icon: Sparkles, title: "Personal Portfolio Website", desc: "Building a professional online portfolio to share my academic journey, leadership experience, and the skills I'm developing." },
  { icon: PenTool, title: "Graphic Design Collection", desc: "An ongoing collection of event flyers, social media graphics, and visual content I've worked on over time." },
  { icon: Brain, title: "AI Learning Experiments", desc: "Small practice projects exploring prompt engineering, productivity workflows, and digital problem-solving with AI tools." },
];

function Projects() {
  return (
    <section id="projects" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="Projects" title="Learning Projects" />
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {PROJECTS.map((p) => (
            <div key={p.title} className="reveal p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.10)" }}>
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="font-display text-lg">{p.title}</div>
              </div>
              <p className="text-sm text-muted mt-4 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONTACTS = [
  { icon: Mail, label: "Email", value: "abdulghaffaropeyemi@gmail.com", href: "mailto:abdulghaffaropeyemi@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "AbdulGhaffar Opeyemi", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", value: "@analytical_scholar", href: "https://instagram.com/analytical_scholar" },
  { icon: Music2, label: "TikTok", value: "@analytical_scholar", href: "https://tiktok.com/@analytical_scholar" },
];

function Contact() {
  return (
    <section id="contact" className="py-14 md:py-16 border-t border-border">
      <div className="container-narrow">
        <SectionTitle eyebrow="Contact" title="Let's Connect" />
        <p className="text-foreground/85 mt-4 leading-relaxed max-w-2xl">
          Interested in collaboration, internships, design projects, or conversations about
          technology and innovation? I'd be glad to connect.
        </p>
        <div className="mt-8 flex flex-col gap-3 max-w-xl">
          {CONTACTS.map((c) => (
            <a key={c.label} href={c.href} className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="h-9 w-9 grid place-items-center rounded-lg shrink-0" style={{ background: "rgba(26,111,255,0.10)" }}>
                <c.icon className="h-4 w-4 text-accent" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted">{c.label}</div>
                <div className="text-sm text-foreground mt-0.5 truncate group-hover:text-accent transition-colors">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-narrow text-center">
        <p className="text-xs text-muted">© 2026 Shonibare AbdulGhaffar · Analytical Scholar</p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const { theme, toggle } = useTheme();
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Beyond />
        <Leadership />
        <Journey />
        <Learning />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
