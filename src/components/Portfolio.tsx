import { useEffect, useState } from "react";
import {
  Sun, Moon, Menu, X, ArrowRight, Clock, User, Sparkles,
  MessageSquareQuote, Github, Wrench, GraduationCap, Users,
  Trophy, Calendar, Briefcase, Palette, Video, Mail,
} from "lucide-react";
import shonibareAsset from "@/assets/shonibare.jpg.asset.json";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#learning", label: "Learning" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
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

function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg">
          Analytical <span className="text-accent">Scholar</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center rounded-full bg-accent text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Let's Connect
          </a>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
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
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <span className="h-px w-4 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              BSc Chemistry Student — AI Dev Trainee — Designer
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fade-up" style={{ animationDelay: "100ms" }}>
            <span className="text-foreground">Shonibare</span>
            <br />
            <span className="text-accent">AbdulGhaffar</span>
          </h1>
          <div className="space-y-1 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <p className="text-lg text-foreground">Also known as Analytical Scholar.</p>
            <p className="text-sm text-muted">BSc Chemistry 300L · LASUED</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium animate-fade-up"
            style={{ background: "rgba(26,111,255,0.1)", border: "1px solid rgba(26,111,255,0.3)", color: "#1a6fff", animationDelay: "300ms" }}>
            <Clock className="h-3.5 w-3.5" /> Available for Internship
          </div>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a href="#connect" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#journey" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-foreground hover:text-accent transition">
              My Journey <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "500ms" }}>
            {[
              ["300L", "BSc Chemistry"],
              ["3+", "Leadership Roles"],
              ["20+", "Design Projects"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-foreground">{n}</div>
                <div className="text-xs text-muted mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo card */}
        <div className="relative animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="relative rounded-xl border border-border bg-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Started BELIGHT TECH · Jun 20 2026
            </div>
            <img src={shonibareAsset.url} alt="Shonibare AbdulGhaffar" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5 text-[11px] text-foreground w-fit">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="flex justify-center mt-16">
        <span className="block h-12 w-px bg-accent animate-scroll-line" />
      </div>
    </section>
  );
}

const SKILLS = ["AI Tools", "Prompt Engineering", "Graphic Design", "PixelLab", "Logical Problem Solving", "Digital Creativity"];
const ROLES = [
  { icon: GraduationCap, title: "Head of Class (HOC)", sub: "BSc Chemistry 300L · LASUED" },
  { icon: Users, title: "Welfare I", sub: "MSSN · LASUED" },
  { icon: Trophy, title: "Assistant Sports Director", sub: "NULASS · LASUED" },
];

function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">Science meets design & code.</h2>
          <p className="text-muted mt-5 leading-relaxed">
            I'm Shonibare AbdulGhaffar, an AI Development trainee at <span className="text-foreground font-medium">BELIGHT TECH</span> and a student at{" "}
            <span className="text-foreground font-medium">LASUED</span>. I blend analytical thinking with creative design and digital solution building.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {SKILLS.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Leadership</p>
          <div className="mt-5 space-y-3">
            {ROLES.map((r) => (
              <div key={r.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors">
                <div className="h-10 w-10 shrink-0 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.12)" }}>
                  <r.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-foreground">{r.title}</div>
                  <div className="text-sm text-muted mt-0.5">{r.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { date: "June 20, 2026", title: "Joined BELIGHT TECH AI Development Program", desc: "Started AI development training, prompt engineering, and digital solution building." },
  { date: "2025 – Present", title: "BSc Chemistry 300L · LASUED", desc: "Head of Class, active in SCSN and MSSN communities." },
  { date: "Ongoing", title: "Graphic Design & Branding (20+ Projects)", desc: "Brand identities, event flyers, and social media assets for Lagos clients." },
  { date: "Ongoing", title: "Content Creation — TikTok & Instagram", desc: "@analytical_scholar on both platforms." },
];

function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Timeline</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">The journey so far.</h2>
        </div>
        <div className="relative mt-12 pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-accent/40" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <div key={i} className="relative reveal">
                <span className="absolute -left-[26px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" /> {t.date}
                </div>
                <div className="font-display text-lg mt-1 text-foreground">{t.title}</div>
                <p className="text-sm text-muted mt-1 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const LEARNING = [
  { icon: Sparkles, title: "AI Tools", desc: "Practical usage for real problems" },
  { icon: MessageSquareQuote, title: "Prompt Engineering", desc: "Precise effective AI prompting" },
  { icon: Github, title: "GitHub", desc: "Version control and projects" },
  { icon: Wrench, title: "Digital Solutions", desc: "Problem to working product" },
];

function Learning() {
  return (
    <section id="learning" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Currently Learning</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">What I'm building on.</h2>
          <p className="text-muted mt-5 leading-relaxed">
            Through the BELIGHT TECH program I'm deepening practical skills in AI development, prompt engineering, and shipping digital solutions that actually solve problems.
          </p>
          <blockquote
            className="mt-6 p-5 italic text-foreground rounded-lg"
            style={{ background: "rgba(26,111,255,0.07)", border: "1px solid rgba(26,111,255,0.2)", borderLeft: "3px solid #1a6fff" }}
          >
            "To build practical AI and digital skills that connect education with real-world problem solving — because theory alone was never enough."
          </blockquote>
        </div>
        <div className="grid grid-cols-2 gap-4 reveal">
          {LEARNING.map((l) => (
            <div key={l.title} className="p-5 rounded-[9px] bg-card border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all">
              <div className="h-9 w-9 grid place-items-center rounded-md mb-4" style={{ background: "rgba(26,111,255,0.12)" }}>
                <l.icon className="h-4 w-4 text-accent" />
              </div>
              <div className="font-medium text-foreground">{l.title}</div>
              <div className="text-xs text-muted mt-1">{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIALS = [
  { icon: Video, label: "TikTok", href: "https://tiktok.com/@analytical_scholar" },
  { icon: Palette, label: "Instagram", href: "https://instagram.com/analytical_scholar" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

function Footer() {
  return (
    <footer id="connect" className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-xs text-muted">
          © 2026 Shonibare AbdulGhaffar · Analytical Scholar. Learning, Building, Growing.
        </p>
        <div className="flex items-center gap-5">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors">
              <s.icon className="h-3.5 w-3.5" /> {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Learning />
      </main>
      <Footer />
    </div>
  );
}
