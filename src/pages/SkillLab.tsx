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
  ChevronRight,
} from 'lucide-react';

/* ── Skill data ─────────────────────────────────────────────────────── */

type SkillTile = {
  title: string;
  tagline: string;
  why: string;
  subSkillCount: number;
  Icon: typeof Heart;
  gradient: string;       // gradient for icon bg
  iconBg: string;         // soft bg tint
  iconColor: string;      // icon text color
  borderHover: string;    // border on hover
};

const skills: SkillTile[] = [
  {
    title: 'Emotional Intelligence',
    tagline: 'Lead with awareness',
    why: 'Self-awareness and empathy shape how people collaborate, handle stress, and recover from setbacks. Strong EQ predicts trust, psychological safety, and better decisions under pressure.',
    subSkillCount: 6,
    Icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-600',
    borderHover: 'hover:border-rose-200',
  },
  {
    title: 'AI Literacy',
    tagline: 'Work with AI, not against it',
    why: 'Knowing when to delegate to models, how to verify outputs, and how to protect data turns AI from a distraction into leverage.',
    subSkillCount: 4,
    Icon: Cpu,
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-600',
    borderHover: 'hover:border-violet-200',
  },
  {
    title: 'Critical Thinking',
    tagline: 'Question before you accept',
    why: 'Clear reasoning reduces costly mistakes: separating facts from opinions, spotting weak arguments, and stress-testing plans before they ship.',
    subSkillCount: 5,
    Icon: Lightbulb,
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-600',
    borderHover: 'hover:border-amber-200',
  },
  {
    title: 'Problem Solving',
    tagline: 'Find the real problem first',
    why: 'Reframing issues, narrowing root causes, and choosing practical experiments saves time. The best solutions target the actual constraint, not the loudest symptom.',
    subSkillCount: 4,
    Icon: Wrench,
    gradient: 'from-blue-500 to-cyan-600',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
  },
  {
    title: 'Adaptability',
    tagline: 'Thrive in change',
    why: 'Priorities, tools, and teams shift constantly. Adaptability means learning quickly, updating mental models, and staying effective when the playbook changes.',
    subSkillCount: 4,
    Icon: RefreshCw,
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200',
  },
  {
    title: 'Creative Thinking',
    tagline: 'Make new connections',
    why: 'Novel combinations of ideas fuel better products and processes. Creativity complements analysis, especially when standard answers are not enough.',
    subSkillCount: 4,
    Icon: Sparkles,
    gradient: 'from-fuchsia-500 to-pink-600',
    iconBg: 'bg-fuchsia-500/10',
    iconColor: 'text-fuchsia-600',
    borderHover: 'hover:border-fuchsia-200',
  },
  {
    title: 'Systems Thinking',
    tagline: 'See the whole picture',
    why: 'Seeing feedback loops, dependencies, and unintended effects prevents local fixes that break elsewhere. It aligns short actions with long-term outcomes.',
    subSkillCount: 4,
    Icon: GitBranch,
    gradient: 'from-indigo-500 to-blue-600',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
    borderHover: 'hover:border-indigo-200',
  },
  {
    title: 'Communication & Influence',
    tagline: 'Ideas are nothing without buy-in',
    why: 'Clear stories, active listening, and respectful persuasion turn insight into action. Influence is how good analysis becomes shared commitment.',
    subSkillCount: 4,
    Icon: MessageCircle,
    gradient: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-600',
    borderHover: 'hover:border-sky-200',
  },
];

/* ── How it works steps ─────────────────────────────────────────────── */

const steps = [
  {
    Icon: Target,
    title: 'Assess',
    description: 'Take a contextual assessment tailored to your role, revealing strengths and growth areas across all 8 skill domains.',
    gradient: 'from-rebuttl-purple to-rebuttl-blue',
    number: '01',
  },
  {
    Icon: BarChart3,
    title: 'Understand',
    description: 'Get detailed insight reports mapping your capabilities, with personalised recommendations and sub-skill breakdowns.',
    gradient: 'from-rebuttl-blue to-cyan-500',
    number: '02',
  },
  {
    Icon: Zap,
    title: 'Practice & Grow',
    description: 'Engage with guided practice scenarios, micro learning, and real time nudges that build habits in the flow of work.',
    gradient: 'from-rebuttl-orange to-rebuttl-red',
    number: '03',
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
      { threshold: 0.1 }
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

          {/* Dot grid */}
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
              <nav className="flex items-center justify-center gap-2 text-sm text-stone-500 mb-8" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-stone-800 transition-colors">Home</Link>
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

              <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Human strengths paired with assessment and practice, so people grow where complexity, change, and collaboration matter most.
              </p>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent tabular-nums">8</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">Skill Areas</p>
                </div>
                <div className="w-px h-10 bg-stone-200" aria-hidden />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-orange bg-clip-text text-transparent tabular-nums">35+</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">Sub-Skills</p>
                </div>
                <div className="w-px h-10 bg-stone-200" aria-hidden />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rebuttl-orange to-rebuttl-red bg-clip-text text-transparent">Practice-Ready</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-1">Focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ SKILL GRID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-rebuttl-lightBg via-white to-white" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={gridFade.ref}
              className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
                gridFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Section header */}
              <div className="text-center mb-14 md:mb-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rebuttl-blue/10 rounded-full mb-5">
                  <Layers className="w-7 h-7 text-rebuttl-blue" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
                  What we develop
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Each area maps to habits you can build over time: judgement, relationships, and learning in ambiguous environments.
                </p>
              </div>

              {/* Skill cards: 3-col grid matching Education page style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {skills.map(({ title, tagline, why, subSkillCount, Icon, iconBg, iconColor, borderHover }) => (
                  <div
                    key={title}
                    className={`group bg-white rounded-2xl border border-stone-200 p-7 transition-all duration-300 hover:shadow-lg ${borderHover}`}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.7} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-stone-900 mb-1.5">{title}</h3>

                    {/* Tagline */}
                    <p className={`text-sm font-medium ${iconColor} mb-4`}>{tagline}</p>

                    {/* Description */}
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-5">{why}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500">
                        <Layers className="w-3.5 h-3.5" />
                        {subSkillCount} sub-skills
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold ${iconColor} opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ HOW IT WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-rebuttl-lightBg" />

          <div
            ref={howFade.ref}
            className={`relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
              howFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rebuttl-purple/10 rounded-full mb-5">
                <Zap className="w-7 h-7 text-rebuttl-purple" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-purple to-rebuttl-orange bg-clip-text text-transparent">
                How Skill Lab Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A three-step process that turns potential into practice, grounded in behavioural science and powered by AI.
              </p>
            </div>

            {/* Steps: horizontal timeline on desktop, vertical on mobile */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {steps.map(({ Icon: StepIcon, title, description, gradient, number }, i) => (
                  <div key={title} className="relative flex flex-col items-center text-center group">
                    {/* Connector line (desktop) */}
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
                        <div className="w-full h-full bg-gradient-to-r from-stone-200 to-stone-200 rounded-full" />
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-stone-300" />
                      </div>
                    )}

                    {/* Vertical connector (mobile) */}
                    {i < steps.length - 1 && (
                      <div className="md:hidden absolute top-[76px] left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-60px)] bg-gradient-to-b from-stone-200 to-stone-100" />
                    )}

                    {/* Step circle */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <StepIcon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>

                    {/* Number pill */}
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">{number}</span>

                    {/* Content */}
                    <div className="px-4 pb-12 md:pb-0">
                      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px] mx-auto">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-rebuttl-navy" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=")`,
            }}
          />
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-rebuttl-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-rebuttl-purple/20 rounded-full blur-3xl" />

          <div
            ref={ctaFade.ref}
            className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
              ctaFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to build the EQ advantage?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-10">
                Start measuring, building, and reinforcing emotional intelligence, exactly where work happens.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tally.so/r/wM0JlY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass h-12 px-8 text-base text-rebuttl-navy font-semibold min-w-[180px]"
                >
                  Get started free
                </a>
                <Link
                  to="/products"
                  className="btn-glass-outline h-12 px-8 text-base text-white font-semibold min-w-[180px] flex items-center justify-center gap-2"
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
