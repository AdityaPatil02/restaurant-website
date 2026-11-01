import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import MenuCard from '@/components/MenuCard';
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from '@/data/menu';

type MenuFilter = 'All' | MenuCategory;

const FILTERS: MenuFilter[] = ['All', ...MENU_CATEGORIES];

export default function Menu() {
  const [filter, setFilter] = useState<MenuFilter>('All');

  const items = useMemo(
    () => (filter === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="menu" className="scroll-mt-20 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Menu"
            title="Signature dishes, prepared with patience"
            description="Every dish is cooked to order. Let us know about any allergies when you order and our kitchen will guide you."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {FILTERS.map((option) => {
              const active = filter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                    active
                      ? 'bg-ink-900 text-cream-50 shadow-md'
                      : 'bg-cream-50 text-ink-700 ring-1 ring-ink-900/10 hover:bg-gold-50 hover:text-ink-900'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={filter} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
