import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import {
  Heart,
  Cpu,
  Lightbulb,
  Wrench,
  RefreshCw,
  Sparkles,
  GitBranch,
  MessageCircle,
  Layers,
  ArrowRight,
  Target,
  BarChart3,
  Zap,
} from 'lucide-react';

/* ── Skill data ─────────────────────────────────────────────────────── */

type SkillTile = {
  title: string;
  tagline: string;
  why: string;
  subSkillCount: number;
  Icon: typeof Heart;
  accent: string;      // gradient from
  accentTo: string;    // gradient to
  bgTint: string;      // card icon bg
  iconColor: string;   // icon text color
};

const skills: SkillTile[] = [
  {
    title: 'Emotional Intelligence',
    tagline: 'Lead with awareness',
    why: 'Self-awareness and empathy shape how people collaborate, handle stress, and recover from setbacks. Strong EQ predicts trust, psychological safety, and better decisions under pressure.',
    subSkillCount: 6,
    Icon: Heart,
    accent: 'from-rose-500',
    accentTo: 'to-pink-600',
    bgTint: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    title: 'AI Literacy',
    tagline: 'Work with AI, not against it',
    why: 'Knowing when to delegate to models, how to verify outputs, and how to protect data turns AI from a distraction into leverage. Literacy keeps work accurate, ethical, and efficient.',
    subSkillCount: 4,
    Icon: Cpu,
    accent: 'from-violet-500',
    accentTo: 'to-purple-600',
    bgTint: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    title: 'Critical Thinking',
    tagline: 'Question before you accept',
    why: 'Clear reasoning reduces costly mistakes: separating facts from opinions, spotting weak arguments, and stress-testing plans before they ship.',
    subSkillCount: 5,
    Icon: Lightbulb,
    accent: 'from-amber-500',
    accentTo: 'to-orange-600',
    bgTint: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Problem Solving',
    tagline: 'Find the real problem first',
    why: 'Reframing issues, narrowing root causes, and choosing practical experiments saves time. The best solutions target the actual constraint, not the loudest symptom.',
    subSkillCount: 4,
    Icon: Wrench,
    accent: 'from-blue-500',
    accentTo: 'to-cyan-600',
    bgTint: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Adaptability',
    tagline: 'Thrive in change',
    why: 'Priorities, tools, and teams shift constantly. Adaptability means learning quickly, updating mental models, and staying effective when the playbook changes.',
    subSkillCount: 4,
    Icon: RefreshCw,
    accent: 'from-emerald-500',
    accentTo: 'to-teal-600',
    bgTint: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Creative Thinking',
    tagline: 'Make new connections',
    why: 'Novel combinations of ideas fuel better products and processes. Creativity complements analysis—especially when standard answers are not enough.',
    subSkillCount: 4,
    Icon: Sparkles,
    accent: 'from-fuchsia-500',
    accentTo: 'to-pink-600',
    bgTint: 'bg-fuchsia-50',
    iconColor: 'text-fuchsia-600',
  },
  {
    title: 'Systems Thinking',
    tagline: 'See the whole picture',
    why: 'Seeing feedback loops, dependencies, and unintended effects prevents local fixes that break elsewhere. It aligns short actions with long-term outcomes.',
    subSkillCount: 4,
    Icon: GitBranch,
    accent: 'from-indigo-500',
    accentTo: 'to-blue-600',
    bgTint: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Communication & Influence',
    tagline: 'Ideas are nothing without buy-in',
    why: 'Clear stories, active listening, and respectful persuasion turn insight into action. Influence is how good analysis becomes shared commitment.',
    subSkillCount: 4,
    Icon: MessageCircle,
    accent: 'from-sky-500',
    accentTo: 'to-blue-600',
    bgTint: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
];

/* ── How it works steps ─────────────────────────────────────────────── */

const steps = [
  {
    Icon: Target,
    title: 'Assess',
    description: 'Take a contextual EQ assessment tailored to your role, revealing strengths and growth areas across all 8 skill domains.',
    accent: 'from-rebuttl-purple to-rebuttl-blue',
  },
  {
    Icon: BarChart3,
    title: 'Understand',
    description: 'Get detailed insight reports mapping your capabilities, with personalised recommendations and sub-skill breakdowns.',
    accent: 'from-rebuttl-blue to-cyan-500',
  },
  {
    Icon: Zap,
    title: 'Practice & Grow',
    description: 'Engage with guided practice scenarios, micro-learning, and real-time nudges that build habits in the flow of work.',
    accent: 'from-rebuttl-orange to-rebuttl-red',
  },
];

/* ── Fade-in hook ───────────────────────────────────────────────────── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ── Component ──────────────────────────────────────────────────────── */

const SkillLab: React.FC = () => {
  const heroFade = useFadeIn();
  const gridFade = useFadeIn();
  const howFade = useFadeIn();
  const ctaFade = useFadeIn();

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900">
      <Navbar />
      <main className="flex-grow">

        {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.10),transparent)]" />

          {/* Decorative orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-rebuttl-purple/15 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute top-1/3 -right-24 w-80 h-80 bg-rebuttl-blue/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-rebuttl-orange/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '3s' }} />

          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div
            ref={heroFade.ref}
            className={`relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
              heroFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav
                className="flex items-center justify-center gap-2 text-sm text-stone-500 mb-8"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="hover:text-stone-800 transition-colors">
                  Home
                </Link>
                <span className="text-stone-300" aria-hidden>/</span>
                <span className="text-stone-800 font-medium">Skill Lab</span>
              </nav>

              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rebuttl-purple/10 to-rebuttl-blue/10 border border-rebuttl-purple/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rebuttl-purple mb-8">
                <Layers className="w-3.5 h-3.5" />
                Capability Map
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-stone-900">Skills for the </span>
                <span className="bg-gradient-to-r from-rebuttl-purple via-rebuttl-blue to-rebuttl-orange bg-size-200 animate-gradient-shift bg-clip-text text-transparent">
                  future of work
                </span>
              </h1>

              {/* Sub */}
              <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Human strengths paired with assessment and practice — so people grow where complexity, change, and collaboration matter most.
              </p>

              {/* Stats row */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent tabular-nums">
                    8
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">
                    Skill Areas
                  </p>
                </div>
                <div className="w-px h-10 bg-stone-200" aria-hidden />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-orange bg-clip-text text-transparent tabular-nums">
                    35+
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">
                    Sub-Skills
                  </p>
                </div>
                <div className="w-px h-10 bg-stone-200" aria-hidden />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-orange to-rebuttl-red bg-clip-text text-transparent">
                    Practice-Ready
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">
                    Focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ SKILL GRID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-stone-50/60 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={gridFade.ref}
              className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
                gridFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Section header */}
              <div className="text-center mb-14 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                  What we develop
                </h2>
                <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Each area maps to habits you can build over time. Work is less about repeating fixed tasks and more about judgement, relationships, and learning in ambiguous environments.
                </p>
              </div>

              {/* Cards grid */}
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 list-none p-0 m-0">
                {skills.map(({ title, tagline, why, subSkillCount, Icon, accent, accentTo, bgTint, iconColor }, index) => (
                  <li key={title}>
                    <article
                      className="group relative flex h-full flex-col rounded-2xl border border-stone-200/80 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-200/50"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {/* Top gradient accent bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${accent} ${accentTo}`} aria-hidden />

                      <div className="flex flex-col flex-grow p-6">
                        {/* Icon + index */}
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bgTint} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                            aria-hidden
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </div>
                          <span className="font-mono text-xs font-medium tabular-nums text-stone-300 pt-1 tracking-widest">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg text-stone-900 tracking-tight leading-snug mb-2">
                          {title}
                        </h3>

                        {/* Tagline */}
                        <p className={`text-sm ${iconColor} font-medium mb-4`}>
                          {tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-stone-600 flex-grow">
                          {why}
                        </p>

                        {/* Footer */}
                        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-600">
                            <Layers className="h-3 w-3 text-stone-400" aria-hidden />
                            {subSkillCount} sub-skills
                          </span>
                          <span className={`inline-flex items-center gap-1 text-xs font-medium ${iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            Explore <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ━━━ HOW IT WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rebuttl-navy via-[#1a2f6a] to-rebuttl-navy" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=")`,
            }}
          />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-rebuttl-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-rebuttl-purple/20 rounded-full blur-3xl" />

          <div
            ref={howFade.ref}
            className={`relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
              howFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm mb-6">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                From assessment to growth
              </h2>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                A three-step process that turns potential into practice — grounded in science, powered by AI.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map(({ Icon: StepIcon, title, description, accent }, i) => (
                <div key={title} className="group relative">
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(100%)] w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
                  )}

                  <div className="relative bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-1">
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} mb-6`}>
                      <StepIcon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{description}</p>

                    {/* Step indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <span className={`w-8 h-1 rounded-full bg-gradient-to-r ${accent}`} />
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                        Step {i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-stone-50">
          <div
            ref={ctaFade.ref}
            className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
              ctaFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                Ready to build the{' '}
                <span className="bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent">
                  EQ advantage
                </span>
                ?
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
                Start measuring, building, and reinforcing emotional intelligence — exactly where work happens.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tally.so/r/wM0JlY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass-primary h-12 px-8 text-base min-w-[180px]"
                >
                  Get started free
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-semibold rounded-xl border border-stone-200 text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 min-w-[180px]"
                >
                  View products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default SkillLab;
