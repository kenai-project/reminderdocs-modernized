// Homepage content: features, workflow steps, comparison rows, FAQ entries.

export const FEATURES = [
  { title: 'All documents together', text: 'Track RC, insurance, PUC, driving licence and other vehicle-related documents in one place.' },
  { title: 'Smart expiry reminders', text: 'Get advance alerts so you have time to renew — not a last-minute scramble.' },
  { title: 'WhatsApp & email', text: "Receive reminders through channels you already check, so important dates don't get buried." },
  { title: 'Multiple vehicles', text: 'Keep your personal car, bikes and family vehicles organised from one account.' },
  { title: 'Simple dashboard', text: 'See active, expiring and overdue documents at a glance without spreadsheets.' },
  { title: 'Privacy first', text: 'Your document information is handled with security and privacy as core design principles.' },
];

export const STEPS = [
  { num: '01 / ADD', title: 'Add your vehicle', text: 'Enter the basic vehicle details and choose the documents you want to track.' },
  { num: '02 / SAVE', title: 'Add expiry dates', text: 'Enter your document details and renewal dates in one simple flow.' },
  { num: '03 / ACTIVATE', title: 'Choose reminders', text: 'Set the reminder schedule and notification channels that work for you.' },
  { num: '04 / RELAX', title: 'Stay ahead', text: 'Receive timely alerts and renew before your documents expire.' },
];

export const COMPARE_ROWS = [
  { feature: 'Automatic expiry alerts', us: '✓', manual: '—' },
  { feature: 'WhatsApp notifications', us: '✓', manual: '—' },
  { feature: 'Multi-vehicle overview', us: '✓', manual: 'Manual' },
  { feature: 'Central document record', us: '✓', manual: 'Scattered' },
  { feature: 'Renewal visibility', us: '✓', manual: 'Manual' },
];

export const METRICS = [
  { code: 'RC', label: 'Registration tracking' },
  { code: 'PUC', label: 'Pollution certificate' },
  { code: 'DL', label: 'Driving licence' },
  { code: 'INS', label: 'Insurance renewal' },
];

export const FAQS = [
  { question: 'What is ReminderDocs?', answer: 'ReminderDocs helps Indian vehicle owners track important document expiry dates and receive reminders before renewals are due.' },
  { question: 'Which documents can I track?', answer: 'The platform is designed for RC, insurance, PUC, driving licence and other vehicle-related documents.' },
  { question: 'How do reminders work?', answer: 'You add your document expiry dates and receive advance notifications through the channels supported by your account.' },
  { question: 'Can I track multiple vehicles?', answer: 'Yes. The experience is designed to keep multiple vehicles and their documents organised in one place.' },
  { question: 'Is my information secure?', answer: 'ReminderDocs is designed with privacy and secure handling of account and document information as core requirements. See the privacy policy for details.' },
];
