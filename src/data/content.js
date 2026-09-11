// Pricing plans and legal page content.

export const PLANS = [
  {
    name: 'Starter',
    note: 'For keeping one vehicle organised.',
    features: ['Vehicle document tracking', 'Expiry date management', 'Reminder notifications', 'Secure account access'],
    cta: { label: 'Get started', to: '/register' },
    featured: false,
  },
  {
    name: 'Family',
    note: 'For households with multiple vehicles.',
    features: ['Everything in Starter', 'Multiple vehicles', 'WhatsApp + email alerts', 'Central dashboard'],
    cta: { label: 'Get started', to: '/register' },
    featured: true,
  },
  {
    name: 'Business',
    note: 'For teams managing vehicle records.',
    features: ['Multi-vehicle workflows', 'Centralised document tracking', 'Reminder visibility', 'Support for larger setups'],
    cta: { label: 'Talk to us', to: '/contact' },
    featured: false,
  },
];

export const LEGAL_SECTIONS = {
  privacy: [
    { heading: '1. Overview', text: 'ReminderDocs provides a service for tracking vehicle documents and expiry dates. This page is a redesigned presentation of the existing site content and should be reviewed against your current legal text before production deployment.' },
    { heading: '2. Use of the service', text: 'Use the service only for lawful purposes and keep account information accurate. Do not attempt to interfere with the service or access data that does not belong to you.' },
    { heading: '3. Accounts and information', text: 'You are responsible for protecting your login credentials and for the information you submit to the service.' },
    { heading: '4. Notifications', text: 'Reminder notifications are intended to help you plan renewals. They should not be treated as a replacement for checking official records or renewal requirements.' },
    { heading: '5. Contact', text: 'For questions, contact support@reminderdocs.com or +91 98453 24689.' },
  ],
  terms: [
    { heading: '1. Overview', text: 'ReminderDocs provides a service for tracking vehicle documents and expiry dates. This page is a redesigned presentation of the existing site content and should be reviewed against your current legal text before production deployment.' },
    { heading: '2. Use of the service', text: 'Use the service only for lawful purposes and keep account information accurate. Do not attempt to interfere with the service or access data that does not belong to you.' },
    { heading: '3. Accounts and information', text: 'You are responsible for protecting your login credentials and for the information you submit to the service.' },
    { heading: '4. Notifications', text: 'Reminder notifications are intended to help you plan renewals. They should not be treated as a replacement for checking official records or renewal requirements.' },
    { heading: '5. Contact', text: 'For questions, contact support@reminderdocs.com or +91 98453 24689.' },
  ],
};
