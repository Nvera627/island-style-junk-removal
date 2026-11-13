// One place for business details. Update here and every page changes.
export const site = {
  name: 'Island Style Junk Removal',
  shortName: 'Island Style',
  tagline: "If we can move it, we'll haul it.",
  phone: '(704) 277-8754',
  phoneShort: '(704) 277-8754',
  // Digits only, used for tel: and sms: links.
  phoneDigits: '7042778754',
  email: 'islandstlzcleaning@gmail.com',
  owner: 'Duane Douglas',
  hours: 'Calls 7am to 7pm',
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
