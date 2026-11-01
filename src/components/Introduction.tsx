import { Flame, Leaf, Users, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { RESTAURANT } from '@/data/restaurant';

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: Flame,
    title: 'Fired in the Tandoor',
    text: 'Our clay oven sears meats and breads at high heat for a smoky char that is impossible to fake.',
  },
  {
    icon: Leaf,
    title: 'Spices Ground Daily',
    text: 'Whole spices are roasted and ground in-house each morning, so every curry tastes vivid and fresh.',
  },
  {
    icon: Users,
    title: 'Made for Gatherings',
    text: `Family celebrations, business dinners and quiet date nights, each welcomed at ${RESTAURANT.name} with warmth.`,
  },
];

export default function Introduction() {
  return (
    <section id="intro" className="scroll-mt-20 bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Welcome to Zaika"
            title="A living tradition, served on every plate"
            description="Zaika means taste in Hindi, and that is our promise. We pair time-honoured recipes from across India with a modern dining room, so every visit feels both familiar and special."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="group h-full rounded-3xl border border-ink-900/5 bg-cream-100 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-900/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-700 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-ink-900">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
