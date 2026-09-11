# ReminderDocs — React Version

Marketing website for **ReminderDocs** — smart vehicle document reminders (RC, insurance, PUC, driving licence) for Indian vehicle owners. Rebuilt as a React single-page application.

## Tech Stack

- **React 18** — UI
- **React Router 6** — client-side routing
- **Vite 5** — dev server & production bundler
- Plain **CSS** (no framework) — same design system as the original site

## Getting Started

```bash
npm install    # install dependencies
npm run dev    # start dev server (http://localhost:5173)
npm run build  # production build → dist/
npm run preview
```

## Project Structure

Every component lives in its own file — nothing is bundled into one giant file, so it's easy to find and fix problems.

```
reminderdocs-modernized/
├── index.html                 # Vite entry HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx               # App entry: router + global styles
│   ├── App.jsx                # Route definitions (routes only, nothing else)
│   ├── components/            # Reusable pieces — one component per file
│   │   ├── Navbar.jsx         # Sticky nav + mobile menu
│   │   ├── Footer.jsx         # Footer with link columns
│   │   ├── FAQ.jsx            # Accordion FAQ (open/close state)
│   │   ├── SectionHeading.jsx # Eyebrow + title + subtitle block
│   │   ├── CarArt.jsx         # SVG vehicles: car / suv / bike / van
│   │   ├── RoadScene.jsx      # S1 — cinematic photo hero (parallax layers)
│   │   ├── DocumentChain.jsx  # S2 — vehicle → documents cascade
│   │   ├── JourneyScene.jsx   # S3 — one pinned scene: expiry → reminder →
│   │   │                      #       notification → dashboard reveal
│   │   ├── VehicleParade.jsx  # S4 — vehicles at different depths
│   │   ├── Benefits.jsx       # S5 — three cards from different directions
│   │   ├── KeepMoving.jsx     # S6 — photo finale + CTA
│   │   ├── LegalPage.jsx      # Shared layout for Privacy & Terms
│   │   ├── Reveal.jsx         # Scroll-reveal animation wrapper
│   │   ├── Parallax.jsx       # Parallax depth wrapper (vertical drift)
│   │   ├── ScrollToTop.jsx    # Scroll to top / anchor on navigation
│   │   └── auth.jsx           # Small helpers for Login/Register pages
│   ├── hooks/
│   │   ├── useReveal.js       # IntersectionObserver hook used by Reveal
│   │   ├── useParallax.js     # rAF scroll hook used by Parallax
│   │   └── useScrollProgress.js # 0→1 section progress for sticky scenes
│   ├── pages/                 # One page per file, matched to old HTML files
│   │   ├── Home.jsx           # (was index.html) — cinematic scroll story
│   │   ├── Pricing.jsx        # (was pricing.html)
│   │   ├── Contact.jsx        # (was contact.html)
│   │   ├── Privacy.jsx        # (was privacy.html)
│   │   ├── Terms.jsx          # (was terms.html)
│   │   ├── Login.jsx          # (was login.html)
│   │   ├── Register.jsx       # (was register.html)
│   │   └── NotFound.jsx       # 404 fallback
│   ├── data/                  # Content separated from markup
│   │   ├── site.js            # Brand, support contacts, nav & footer links
│   │   ├── home.js            # Features, steps, comparison rows, FAQs
│   │   ├── story.js           # Cinematic homepage story content
│   │   └── content.js         # Pricing plans & legal text
│   └── styles/
│       ├── base.css           # Variables, reset, nav, buttons, hero, dashboard
│       ├── components.css     # Sections, FAQ, CTA, footer, forms, reveal, parallax
│       └── story.css          # Cinematic scenes: road hero, chain, countdown,
│                              #   phone, dashboard reveal, parade, benefits, finale
```

## Routes

| Route      | Page                     |
| ---------- | ------------------------ |
| `/`        | Home                     |
| `/pricing` | Pricing                  |
| `/contact` | Contact                  |
| `/privacy` | Privacy Policy           |
| `/terms`   | Terms & Conditions       |
| `/login`   | Login                    |
| `/register`| Register                 |

## Deployment (Render)

This is a static SPA — deploy it as a **Render Static Site**, not a Web Service.

**Option A — Blueprint (recommended):** Render Dashboard → **New → Blueprint** → select this repo. The included `render.yaml` configures everything (build command, `dist` publish folder, SPA rewrite, asset caching).

**Option B — Manual Static Site:**
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Add a rewrite rule: `/* → /index.html` (Rewrite) — required so client-side routes like `/pricing` and `/login` work on refresh. The `public/_redirects` file also covers this automatically.

**Option C — Web Service fallback** (if you must use a Web Service):
- Build Command: `npm install && npm run build`
- Start Command: `npm run preview -- --host 0.0.0.0 --port $PORT`

## Notes

- **Login / Register** are UI-only. The original `login.html` / `register.html` were saved app shells (empty `<div id="root">`) with no usable markup, so clean auth forms were built in the same design system. Wire `handleSubmit` in each page to your real auth backend (e.g. Supabase) before production.
- **Pricing** and **legal text** are placeholders loaded from `src/data/` — connect real plan/billing data and approved legal copy before launch.
