import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <header className="border-b border-stone-100 bg-stone-50/50">
          <div className="container mx-auto px-4 py-12 md:py-16 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-stone-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
              <span aria-hidden>/</span>
              <span className="text-stone-900 font-medium">Our Philosophy</span>
            </nav>
            <p className="text-sm font-medium text-rebuttl-blue uppercase tracking-widest mb-3">
              Our Philosophy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight max-w-4xl mx-auto leading-[1.35]">
              The Lumi6 Manifesto
            </h1>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              How we think about decisions, signals, and human potential.
            </p>
          </div>
        </header>

        <article className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto prose prose-lg prose-stone">
            <section className="mb-16">
              <figure className="mb-8 rounded-xl overflow-hidden bg-stone-50">
                <img
                  src="https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/philosophy/TA.svg"
                  alt="Decisions about people—who to hire, trust, promote"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="sr-only">Hiring and people decisions</figcaption>
              </figure>
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                Decisions about people should be made with clarity, not guesswork
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                Organizations run on decisions about people: who to hire, who to trust, who to promote, who to develop. Yet the signals behind these decisions are often noisy, subjective, and inconsistent.
              </p>
              <p className="text-stone-600 leading-[1.75] mb-6">
                Resumes summarise the past but rarely predict behaviour. Interviews tend to reward confidence over competence. Performance reviews capture perception more than reality. The result is not only inefficiency but misalignment—talent underutilised, potential overlooked, risk recognised too late.
              </p>
              <p className="text-stone-700 font-medium leading-[1.75]">
                We believe this is not a people problem. It is a measurement problem.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                Intelligence about human behaviour is now possible
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                Advances in behavioural science, psychometrics, and machine intelligence make it possible to observe patterns that were previously invisible—not to replace human judgement but to sharpen it; not to label people but to understand them; not to automate decisions but to illuminate them.
              </p>
            </section>

            <section className="mb-16">
              <figure className="mb-8 rounded-xl overflow-hidden bg-stone-50">
                <img
                  src="https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/philosophy/L%26D1.svg"
                  alt="Collaboration and training—assessment and development"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="sr-only">Collaboration and learning &amp; development</figcaption>
              </figure>
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                From opinions to signals
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                Lumi6 exists to change how organisations understand human capability. We turn subjective impressions into structured signals, behaviour into insight, and we connect assessment with development so that understanding leads to growth.
              </p>
              <p className="text-stone-700 font-medium leading-[1.75]">
                Insight without action is noise. Action without insight is risk.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                A future where potential is visible
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                We envision a world where decisions about people are transparent and evidence-based; where individuals understand their strengths with precision; and where organisations develop talent intentionally rather than reactively. Where hiring is not a gamble, leadership is not an accident, and growth is not left to chance.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                Our commitment
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                We build with rigour, measure with responsibility, and design for fairness. We prioritise understanding over automation—because behind every datapoint is a person, and every insight carries responsibility.
              </p>
            </section>

            <section className="mb-12">
              <figure className="mb-8 rounded-xl overflow-hidden bg-stone-50">
                <img
                  src="https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/philosophy/IC.svg"
                  alt="Winning—a new standard for how organisations see people"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="sr-only">Winning through better signals</figcaption>
              </figure>
              <h2 className="text-2xl font-bold text-stone-900 mt-0 mb-6">
                The shift
              </h2>
              <p className="text-stone-600 leading-[1.75] mb-6">
                The future of work will be defined not by more data but by better signals. Lumi6 is building the infrastructure for that future: clarity over assumption, insight over intuition alone, understanding over guesswork.
              </p>
              <p className="text-stone-700 font-medium leading-[1.75]">
                This is not just a product. It is a new standard for how organisations see people.
              </p>
            </section>

            <nav className="pt-8 border-t border-stone-200 flex items-center gap-2 text-sm text-stone-500" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
              <span aria-hidden>/</span>
              <span className="text-stone-900 font-medium">Our Philosophy</span>
            </nav>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Manifesto;
