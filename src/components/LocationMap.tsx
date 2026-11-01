import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL, RESTAURANT } from '@/data/restaurant';

export default function LocationMap() {
  return (
    <section id="location" className="scroll-mt-20 bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Find Us"
            title="Right in the heart of the city"
            description="Easy to reach by metro, cab or car, with valet parking available on weekends."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-cream-100 shadow-xl shadow-ink-900/5 ring-1 ring-ink-900/5">
            <div className="grid lg:grid-cols-[1fr_2fr]">
              <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-ink-900">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-ink-900">{RESTAURANT.name} Restaurant</h3>
                  <address className="mt-3 not-italic text-base leading-relaxed text-ink-600">
                    {RESTAURANT.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary self-start"
                >
                  Get directions
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <iframe
                title={`Map showing the location of ${RESTAURANT.name}`}
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[440px] lg:h-full lg:min-h-[400px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
