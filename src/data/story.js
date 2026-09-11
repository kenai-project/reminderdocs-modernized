// Content for the cinematic homepage story sections.

// Floating document chips around the hero car (Section 1).
export const HERO_DOCS = [
  { code: 'RC', name: 'Registration', icon: '📄' },
  { code: 'INS', name: 'Insurance', icon: '🛡️' },
  { code: 'PUC', name: 'PUC', icon: '🌿' },
  { code: 'DL', name: 'Licence', icon: '🪪' },
];

// Vehicle → documents cascade (Section 2).
export const JOURNEY_DOCS = [
  { code: 'RC', name: 'Registration Certificate', note: 'Ownership & registration details' },
  { code: 'INS', name: 'Insurance', note: 'Third-party & own-damage cover' },
  { code: 'PUC', name: 'PUC Certificate', note: 'Emission validity — renewed periodically' },
  { code: 'DL', name: 'Driving Licence', note: 'Renew before it lapses' },
];

// Vehicles shown at different parallax depths (Section 6).
export const PARADE_VEHICLES = [
  { type: 'car', label: 'KA 01 AB 1234' },
  { type: 'suv', label: 'KA 09 MJ 4321' },
  { type: 'bike', label: 'KA 05 XY 6789' },
  { type: 'van', label: 'KA 03 EF 9012' },
];

// Dashboard content (Section 5).
export const DASHBOARD_VEHICLES = [
  {
    icon: '🚗',
    plate: 'KA 01 AB 1234',
    docs: [
      { name: 'Insurance', status: 'ok' },
      { name: 'PUC', status: 'soon' },
      { name: 'RC', status: 'ok' },
    ],
  },
  {
    icon: '🏍',
    plate: 'KA 05 XY 6789',
    docs: [
      { name: 'Insurance', status: 'ok' },
      { name: 'PUC', status: 'ok' },
    ],
  },
];

// Benefit cards entering from different directions (Section 7).
export const BENEFITS = [
  { num: '01', title: 'Remember', text: 'Never forget an expiry date again.', from: 'from-left' },
  { num: '02', title: 'Organise', text: 'Every vehicle document, together in one place.', from: 'from-up' },
  { num: '03', title: 'Renew', text: "Get notified before it's too late.", from: 'from-right' },
];
