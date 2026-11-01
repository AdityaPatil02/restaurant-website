export const RESTAURANT = {
  name: 'Zaika',
  tagline: 'Royal Indian Fine Dining',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappNumber: '919876543210',
  email: 'hello@zaikadining.in',
  addressLines: ['12, MG Road', 'Bengaluru, Karnataka 560001'],
  mapQuery: '12 MG Road Bengaluru Karnataka 560001',
  hours: [
    { label: 'Monday to Thursday', value: '12:00 PM - 11:00 PM' },
    { label: 'Friday to Sunday', value: '12:00 PM - 12:00 AM' },
  ],
} as const;

export function whatsappLink(message = `Hello ${RESTAURANT.name}, I would like to make an enquiry.`) {
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(RESTAURANT.mapQuery)}&output=embed`;

export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.mapQuery)}`;
