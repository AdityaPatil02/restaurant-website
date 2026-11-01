import { ChefHat } from 'lucide-react';
import { RESTAURANT } from '@/data/restaurant';

const FOOTER_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-display text-2xl font-semibold text-cream-50">
            <ChefHat className="h-7 w-7 text-gold-500" aria-hidden="true" />
            {RESTAURANT.name}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-200/70">{RESTAURANT.tagline}, served with warmth since 2009.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-cream-200/80 transition-colors hover:text-gold-300">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-cream-100/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-cream-200/60 sm:px-8">
          © {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
