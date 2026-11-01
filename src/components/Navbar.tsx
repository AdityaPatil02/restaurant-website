import { useEffect, useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { RESTAURANT, whatsappLink } from '@/data/restaurant';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Introduction', href: '#intro' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  const linkClass = `text-sm font-medium transition-colors duration-300 ${
    solid ? 'text-ink-700 hover:text-gold-700' : 'text-cream-100/90 hover:text-gold-300'
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream-100/95 py-3 shadow-[0_1px_0_rgba(21,17,14,0.08)] backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className={`flex items-center gap-2.5 font-display text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            solid ? 'text-ink-900' : 'text-cream-50'
          }`}
        >
          <ChefHat className="h-7 w-7 text-gold-500" aria-hidden="true" />
          {RESTAURANT.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp !px-5 !py-2.5">
            Enquire on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`rounded-full p-2 transition-colors lg:hidden ${
            solid ? 'text-ink-900 hover:bg-ink-900/5' : 'text-cream-50 hover:bg-cream-50/10'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto mt-4 flex flex-col gap-1 px-5 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-gold-50 hover:text-gold-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp mt-3"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
