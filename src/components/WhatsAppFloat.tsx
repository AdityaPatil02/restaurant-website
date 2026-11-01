import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/data/restaurant';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="hidden translate-x-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-cream-50 opacity-0 shadow-lg transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Enquire on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-xl shadow-green-900/30 transition duration-300 group-hover:-translate-y-1 group-hover:bg-green-800">
        <span className="absolute inset-0 animate-ping rounded-full bg-green-600/40" aria-hidden="true" />
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      </span>
    </a>
  );
}
