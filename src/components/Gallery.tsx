import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const px = (id: string) => `https://images.pexels.com/photos/${id}?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop`;

const GALLERY_IMAGES: GalleryImage[] = [
  { src: px('37968303/pexels-photo-37968303.jpeg'), alt: 'Romantic candlelit table with elegant tableware', span: 'md:row-span-2' },
  { src: px('5676266/pexels-photo-5676266.jpeg'), alt: 'Sleek bar counter with warm ambient lighting', span: '' },
  { src: px('5779781/pexels-photo-5779781.jpeg'), alt: 'Chef grilling over an open flame in the kitchen', span: 'md:row-span-2' },
  { src: px('15750725/pexels-photo-15750725.jpeg'), alt: 'Cosy seating in a dimly lit, modern dining room', span: '' },
  { src: px('13971183/pexels-photo-13971183.jpeg'), alt: 'Chefs working together in a busy kitchen', span: '' },
  { src: px('15189511/pexels-photo-15189511.jpeg'), alt: 'Beautifully set table with glassware and cutlery', span: 'md:col-span-2' },
  { src: px('31280796/pexels-photo-31280796.jpeg'), alt: 'Colourful Indian spices arranged in bowls', span: '' },
  { src: px('16935897/pexels-photo-16935897.jpeg'), alt: 'Elegant celebration table with floral centrepieces', span: '' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length));
      if (event.key === 'ArrowLeft') {
        setActiveIndex((i) => (i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const current = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section id="gallery" className="scroll-mt-20 bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse inside Zaika"
            description="From the open flame of our tandoor to the glow of the dining room, take a look before you visit."
          />
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={(index % 4) * 80} className={`h-full ${image.span}`}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View photo: ${image.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-ink-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 right-4 translate-y-2 text-left text-sm font-medium text-cream-50 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/92 p-4 backdrop-blur-sm animate-fade-up"
          style={{ animationDuration: '0.4s' }}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-8 sm:top-8"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            aria-label="Previous photo"
            className="absolute left-2 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={current.src.replace('w=1200&h=900', 'w=1800&h=1350')}
              alt={current.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-cream-200/90">{current.alt}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % GALLERY_IMAGES.length);
            }}
            aria-label="Next photo"
            className="absolute right-2 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
