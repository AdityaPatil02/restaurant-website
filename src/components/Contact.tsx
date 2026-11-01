import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { RESTAURANT, whatsappLink } from '@/data/restaurant';

interface EnquiryForm {
  name: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
}

const EMPTY_FORM: EnquiryForm = { name: '', phone: '', date: '', guests: '2', message: '' };

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+'];

const inputClass =
  'w-full rounded-2xl border border-ink-900/10 bg-cream-100 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-600/60 transition focus:border-gold-500 focus:bg-cream-50 focus:outline-none focus:ring-4 focus:ring-gold-200/60';

export default function Contact() {
  const [form, setForm] = useState<EnquiryForm>(EMPTY_FORM);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      `Hello ${RESTAURANT.name}, I would like to make an enquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date || 'Not specified'}`,
      `Guests: ${form.guests}`,
      `Message: ${form.message || 'None'}`,
    ].join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Plan your visit with us"
            description="Reserve a table, ask about private dining or send us a question. Our team replies on WhatsApp during opening hours."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-ink-900 p-8 text-cream-100 sm:p-10">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Call us</p>
                    <a href={RESTAURANT.phoneHref} className="mt-1 block text-lg text-cream-50 transition-colors hover:text-gold-300">
                      {RESTAURANT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Email</p>
                    <a href={`mailto:${RESTAURANT.email}`} className="mt-1 block break-all text-lg text-cream-50 transition-colors hover:text-gold-300">
                      {RESTAURANT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Visit us</p>
                    <p className="mt-1 text-lg text-cream-50">{RESTAURANT.addressLines.join(', ')}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="w-full">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Opening hours</p>
                    <dl className="mt-2 space-y-2">
                      {RESTAURANT.hours.map((slot) => (
                        <div key={slot.label} className="flex justify-between gap-4 text-sm">
                          <dt className="text-cream-200/80">{slot.label}</dt>
                          <dd className="font-medium text-cream-50">{slot.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp mt-10 w-full">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-cream-50 p-8 shadow-sm ring-1 ring-ink-900/5 sm:p-10">
              <h3 className="font-display text-3xl font-semibold text-ink-900">Send an enquiry</h3>
              <p className="mt-2 text-sm text-ink-600">
                Fill in the details below. Your message opens in WhatsApp, ready to send.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-800">Full name</span>
                  <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-800">Phone number</span>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} required autoComplete="tel" className={inputClass} placeholder="+91" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-800">Preferred date</span>
                  <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-800">Number of guests</span>
                  <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
                    {GUEST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-ink-800">Message</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Occasion, dietary needs, private dining..." />
                </label>
              </div>

              <button type="submit" className="btn-whatsapp mt-8 w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
