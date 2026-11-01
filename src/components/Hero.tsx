import { ArrowRight, ChevronDown } from 'lucide-react';
import { RESTAURANT, whatsappLink } from '@/data/restaurant';

const HERO_IMAGE =
  'https://images.pexels.com/photos/28059309/pexels-photo-28059309.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1300&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 text-cream-50">
      <img
        src={HERO_IMAGE}
        alt="Candlelit dining table set for an evening at Zaika"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/75 to-ink-900/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            {RESTAURANT.tagline}
          </p>
          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-light leading-[1.1] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '150ms' }}
          >
            An Indian feast, <span className="italic text-gold-300">crafted</span> with royal flair.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-cream-200/90 sm:text-lg"
            style={{ animationDelay: '300ms' }}
          >
            Slow-cooked classics, tandoor-fresh breads and recipes passed down through generations, served in an
            atmosphere made for celebrations.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '450ms' }}
          >
            <a href="#menu" className="btn-primary">
              Explore the Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to introduction"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-cream-100/80 transition-colors hover:text-gold-300"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
