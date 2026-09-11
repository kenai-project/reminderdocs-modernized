// Site-wide constants shared across pages.

export const BRAND = 'ReminderDocs';

export const SUPPORT = {
  phone: '+91 98453 24689',
  phoneHref: 'tel:+919845324689',
  email: 'support@reminderdocs.com',
};

export const NAV_LINKS = [
  { label: 'Features', to: '/#features' },
  { label: 'How it works', to: '/#how' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/contact' },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'How it works', to: '/#how' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Login', to: '/login' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/#about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact support', to: '/contact' },
      { label: SUPPORT.phone, to: SUPPORT.phoneHref },
      { label: SUPPORT.email, to: `mailto:${SUPPORT.email}` },
    ],
  },
];
