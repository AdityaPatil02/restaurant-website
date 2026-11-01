import type { MenuItem } from '@/data/menu';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <div className="animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
      <article className="group h-full overflow-hidden rounded-3xl bg-cream-50 shadow-sm ring-1 ring-ink-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cream-50/95 px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-sm">
            <span
              className={`h-2.5 w-2.5 rounded-full ring-2 ring-white ${item.veg ? 'bg-green-600' : 'bg-clay-600'}`}
              aria-hidden="true"
            />
            {item.veg ? 'Vegetarian' : 'Non-vegetarian'}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink-900">{item.name}</h3>
            <p className="shrink-0 font-display text-xl font-semibold text-gold-700">{`₹${item.price}`}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
        </div>
      </article>
    </div>
  );
}
