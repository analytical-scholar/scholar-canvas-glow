import { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, MapPin, Linkedin, Instagram, Mail,
  GraduationCap, Users, Trophy, Calendar, Sparkles, Palette,
  Brain, Lightbulb, PenTool, Megaphone, Quote, Music2,
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
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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
        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
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
    <section className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div className="space-y-6">
          <p className="text-sm text-muted">Hello, I'm</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Shonibare AbdulGhaffar
          </h1>
          <p className="font-display text-xl sm:text-2xl text-accent">Analytical Scholar</p>
          <p className="text-sm sm:text-base text-muted">
            300-Level Chemistry Student at LASUED · AI Development Trainee at BELIGHT TECH · Graphic Designer
          </p>
          <div className="space-y-4 text-foreground/85 leading-relaxed max-w-xl">
            <p>
              I'm currently learning AI development while studying Chemistry at LASUED.
              Alongside my studies, I've explored graphic design, student leadership, and
              digital tools that improve productivity and solve everyday problems.
            </p>
            <p>
              This portfolio shares my academic journey, leadership experience, and the skills
              I'm developing as I continue learning and growing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#journey" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent transition">
              Explore My Journey
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-3">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted hover:text-accent transition"><Linkedin className="h-4 w-4" /></a>
            <a href="https://instagram.com/analytical_scholar" aria-label="Instagram" className="text-muted hover:text-accent transition"><Instagram className="h-4 w-4" /></a>
            <a href="https://tiktok.com/@analytical_scholar" aria-label="TikTok" className="text-muted hover:text-accent transition"><Music2 className="h-4 w-4" /></a>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5" /> Lagos, Nigeria
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full" style={{ background: "rgba(26,111,255,0.18)", filter: "blur(24px)" }} />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden border border-border ring-1 ring-accent/30">
              <img src={shonibareAsset.url} alt="Shonibare AbdulGhaffar" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 reveal">
        <p className="text-xs tracking-widest uppercase text-accent font-medium">About</p>
        <h2 className="font-display text-3xl sm:text-4xl mt-3">About Me</h2>
        <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
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
            I enjoy learning practical skills, taking on responsibilities, and working on projects
            that help me grow personally and professionally.
          </p>
          <p>
            I believe meaningful growth comes from staying curious, embracing challenges, and
            consistently improving every day.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-card border border-border">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Beyond Academics</p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
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
    <section id="leadership" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Leadership</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">Roles I currently hold.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {ROLES.map((r) => (
            <div key={r.title} className="reveal p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.12)" }}>
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
    <section id="journey" className="py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Timeline</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">My Journey</h2>
        </div>
        <div className="relative mt-10 pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-accent/30" />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <div key={i} className="relative reveal">
                <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" /> {t.date}
                </div>
                <p className="text-foreground/90 mt-1.5 leading-relaxed">{t.title}</p>
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
    <section id="learning" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 space-y-14">
        <div className="reveal">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Currently Learning</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">Skills I'm building on.</h2>
          <div className="flex flex-wrap gap-2 mt-7">
            {SKILLS.map((s) => (
              <span key={s} className="text-sm px-4 py-2 rounded-full bg-card border border-border text-foreground/85 hover:border-accent hover:text-accent transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>

        <blockquote className="reveal relative p-7 rounded-xl bg-card border border-border">
          <Quote className="absolute -top-3 left-6 h-6 w-6 text-accent bg-background p-1" />
          <p className="font-display text-xl sm:text-2xl text-foreground leading-snug">
            "Growth comes from staying curious and showing up consistently."
          </p>
        </blockquote>

        <div className="reveal p-7 rounded-xl border border-accent/30" style={{ background: "rgba(26,111,255,0.06)" }}>
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Current Training</p>
          <h3 className="font-display text-2xl mt-3">BELIGHT TECH</h3>
          <p className="text-sm text-foreground/80 mt-1">AI Development Trainee · Started June 2026</p>
          <p className="text-muted mt-4 leading-relaxed">
            Learning practical AI tools, prompt engineering, and digital solution building.
          </p>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { icon: Sparkles, title: "Personal Portfolio Website", desc: "Building a professional online portfolio using modern web technologies and AI-assisted development tools." },
  { icon: PenTool, title: "Graphic Design Collection", desc: "Event flyers, social media graphics, branding materials, and visual content projects." },
  { icon: Brain, title: "AI Learning Experiments", desc: "Practicing prompt engineering, productivity workflows, and digital problem-solving using AI tools." },
];

function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-accent font-medium">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">Learning Projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {PROJECTS.map((p) => (
            <div key={p.title} className="reveal p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.12)" }}>
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="font-display text-lg mt-4">{p.title}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
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
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 reveal">
        <p className="text-xs tracking-widest uppercase text-accent font-medium">Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl mt-3">Let's Connect</h2>
        <p className="text-foreground/85 mt-5 leading-relaxed max-w-2xl">
          Interested in collaboration, internships, design projects, or conversations about
          technology and innovation? I'd be glad to connect.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {CONTACTS.map((c) => (
            <a key={c.label} href={c.href} className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: "rgba(26,111,255,0.12)" }}>
                <c.icon className="h-5 w-5 text-accent" />
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
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm text-foreground">© 2026 Shonibare AbdulGhaffar</p>
        <p className="text-sm text-accent font-display">Analytical Scholar</p>
        <p className="text-xs text-muted">Chemistry Student • AI Development Trainee • Graphic Designer</p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  useReveal();
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
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
