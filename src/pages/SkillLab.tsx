import React from 'react';
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
} from 'lucide-react';

type SkillTile = {
  title: string;
  tagline: string;
  why: string;
  subSkillCount: number;
  Icon: typeof Heart;
};

const skills: SkillTile[] = [
  {
    title: 'Emotional Intelligence',
    tagline: 'Lead with awareness',
    why:
      'Self-awareness and empathy shape how people collaborate, handle stress, and recover from setbacks. Strong EQ predicts trust, psychological safety, and better decisions under pressure.',
    subSkillCount: 6,
    Icon: Heart,
  },
  {
    title: 'AI Literacy',
    tagline: 'Work with AI, not against it',
    why:
      'Knowing when to delegate to models, how to verify outputs, and how to protect data turns AI from a distraction into leverage. Literacy keeps work accurate, ethical, and efficient.',
    subSkillCount: 4,
    Icon: Cpu,
  },
  {
    title: 'Critical Thinking',
    tagline: 'Question before you accept',
    why:
      'Clear reasoning reduces costly mistakes: separating facts from opinions, spotting weak arguments, and stress-testing plans before they ship.',
    subSkillCount: 5,
    Icon: Lightbulb,
  },
  {
    title: 'Problem Solving',
    tagline: 'Find the real problem first',
    why:
      'Reframing issues, narrowing root causes, and choosing practical experiments saves time. The best solutions target the actual constraint, not the loudest symptom.',
    subSkillCount: 4,
    Icon: Wrench,
  },
  {
    title: 'Adaptability',
    tagline: 'Thrive in change',
    why:
      'Priorities, tools, and teams shift constantly. Adaptability means learning quickly, updating mental models, and staying effective when the playbook changes.',
    subSkillCount: 4,
    Icon: RefreshCw,
  },
  {
    title: 'Creative Thinking',
    tagline: 'Make new connections',
    why:
      'Novel combinations of ideas fuel better products and processes. Creativity complements analysis—especially when standard answers are not enough.',
    subSkillCount: 4,
    Icon: Sparkles,
  },
  {
    title: 'Systems Thinking',
    tagline: 'See the whole picture',
    why:
      'Seeing feedback loops, dependencies, and unintended effects prevents local fixes that break elsewhere. It aligns short actions with long-term outcomes.',
    subSkillCount: 4,
    Icon: GitBranch,
  },
  {
    title: 'Communication & Influence',
    tagline: 'Ideas are nothing without buy-in',
    why:
      'Clear stories, active listening, and respectful persuasion turn insight into action. Influence is how good analysis becomes shared commitment.',
    subSkillCount: 4,
    Icon: MessageCircle,
  },
];

const SkillLab: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <header className="border-b border-stone-100 bg-stone-50/50">
          <div className="container mx-auto px-4 py-12 md:py-16 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-stone-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-stone-900 transition-colors">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-stone-900 font-medium">Skill Lab</span>
            </nav>
            <p className="text-sm font-medium text-rebuttl-blue uppercase tracking-widest mb-3">Skill Lab</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight max-w-4xl mx-auto leading-[1.35]">
              Skills for the future of work
            </h1>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Human capabilities that pair well with assessment and practice—so people grow where complexity, change, and collaboration matter most.
            </p>
          </div>
        </header>

        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold text-stone-900 mb-2">Skills</h2>
            <p className="text-stone-600 mb-10 max-w-2xl">
              Each area below maps to habits you can build over time. They matter because work is less about repeating fixed tasks and more about judgement,
              relationships, and learning in ambiguous environments.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {skills.map(({ title, tagline, why, subSkillCount, Icon }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-xl border border-stone-200 bg-white shadow-sm border-l-4 border-l-stone-800 pl-5 pr-5 pt-6 pb-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800" aria-hidden>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-stone-900 leading-snug">{title}</h3>
                      <p className="text-sm text-stone-500 mt-1">{tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed flex-grow">{why}</p>
                  <p className="mt-5 flex items-center gap-1.5 text-xs font-medium text-stone-500">
                    <Layers className="w-3.5 h-3.5 text-stone-400" aria-hidden />
                    <span>
                      {subSkillCount} sub-skills
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillLab;
