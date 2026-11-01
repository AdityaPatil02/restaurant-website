import { Award, Flame, Leaf, Quote, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';

const VALUES = [
  { icon: Flame, label: 'Live-fire tandoor cooking' },
  { icon: Leaf, label: 'Fresh, seasonal produce' },
  { icon: Award, label: 'Recipes perfected over years' },
  { icon: Users, label: 'Warm, attentive hospitality' },
];

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/36539296/pexels-photo-36539296.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1200&fit=crop';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 overflow-hidden bg-ink-900 py-24 text-cream-50 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={ABOUT_IMAGE}
              alt="Chef flambéing a dish in a busy restaurant kitchen"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl sm:aspect-[5/4]"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-500 px-6 py-5 text-ink-900 shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold leading-none">Since 2009</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]">Family owned</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <p className="eyebrow text-gold-300">Our Story</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.15] sm:text-5xl">
              Born from a family kitchen, <span className="italic text-gold-300">raised</span> on hospitality.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream-200/85 sm:text-lg">
              Zaika started with a simple idea: serve the dishes we grew up with, cooked the way they were meant to be.
              Every recipe is tested in our own kitchen, every spice is hand-selected, and every guest is treated like
              family.
            </p>

            <figure className="mt-10 rounded-3xl border border-cream-100/10 bg-cream-50/5 p-7">
              <Quote className="h-8 w-8 text-gold-400" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-2xl italic leading-snug text-cream-50">
                Food is memory. Every plate we serve is an invitation to sit down, slow down and feel at home.
              </blockquote>
              <figcaption className="mt-4 text-sm text-cream-200/70">The Zaika family</figcaption>
            </figure>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {VALUES.map((value) => (
                <li key={value.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-cream-100">{value.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
