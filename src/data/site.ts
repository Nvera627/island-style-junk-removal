// One place for business details. Update here and every page changes.
export const site = {
  name: 'Island Style Junk Removal',
  shortName: 'Island Style',
  tagline: "If we can move it, we'll haul it.",
  phone: '[PHONE NUMBER]',
  phoneShort: '[PHONE]',
  // Digits only, used for tel: and sms: links. Replace when Duane approves.
  phoneDigits: '0000000000',
  email: '[EMAIL]',
  hours: 'Call anytime',
  city: 'Charlotte',
  state: 'NC',
  // Placeholder. Replace with the Formspree or Web3Forms endpoint once the account exists.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  description:
    "Island Style Junk Removal hauls furniture, appliances, mattresses and full cleanouts in the Charlotte, NC area. Call, text, or request a free quote.",
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

// Prefix an internal path with the configured base.
export const url = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
};
