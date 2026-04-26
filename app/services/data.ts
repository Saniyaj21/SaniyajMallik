export interface CaseStudy {
  type: string;
  name: string;
  tagline: string;
  href: string;
}

export interface Persona {
  h: string;
  d: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  pillar: string;
  pillarN: string;
  name: string;
  tagline: string;
  image?: string;
  deliverables: string[];
  personas: Persona[];
  faqs: ServiceFAQ[];
  caseStudy: CaseStudy | null;
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'wordpress-development',
    pillar: 'WordPress',
    pillarN: '01',
    name: 'WordPress\nDevelopment',
    tagline: 'Custom WordPress builds, engineered from scratch.',
    image: '/services/wordpress.png',
    deliverables: [
      'Full custom site build, no page-builder bloat',
      'Bespoke theme architected for your content model',
      'Plugin selection, configuration & integration',
      'Core Web Vitals & speed optimization out the gate',
      'Staging environment + zero-downtime production deploy',
      'Editor training & light documentation handoff',
    ],
    personas: [
      { h: 'Educators & course creators', d: 'LMS-driven sites where LearnDash, LifterLMS or Tutor LMS sit at the core, not bolted on.' },
      { h: 'Ecommerce brands', d: 'WooCommerce stores that need custom checkout flows, subscriptions or B2B logic.' },
      { h: 'Service businesses', d: 'Agencies, clinics and consultants that have outgrown the generic Elementor template.' },
    ],
    faqs: [
      { q: 'Do you use page builders like Elementor or Divi?', a: 'Only when it serves the project. For custom builds I prefer a hand-coded block theme (FSE) or a classic theme with ACF — faster, lighter, and easier to maintain long-term. If you already use a builder, I can work within it.' },
      { q: 'How long does a custom WordPress build take?', a: 'A focused marketing site lands around 3–4 weeks. A LearnDash or WooCommerce build with custom logic is usually 6–10 weeks. I scope precisely up front so timelines hold.' },
      { q: 'What\'s included in "speed optimization"?', a: 'Image pipeline (WebP/AVIF + lazy load), critical CSS, deferred JS, object caching, a tuned hosting stack, and a Lighthouse pass. Goal: green Core Web Vitals on the templates that matter.' },
      { q: 'Will I be able to edit content myself?', a: 'Yes — every site ships with a content model designed for non-technical editors, plus a Loom walkthrough of the parts that matter for your team.' },
    ],
    caseStudy: {
      type: 'WordPress + LearnDash',
      name: 'NextMCQ',
      tagline: 'Quiz LMS for medical aspirants — 40k+ active learners.',
      href: '/work/nextmcq',
    },
  },
  {
    slug: 'wordpress-migrations',
    pillar: 'WordPress',
    pillarN: '01',
    name: 'WordPress\nMigrations',
    tagline: 'Move platforms without losing data, SEO, or sleep.',
    deliverables: [
      'Full content + media transfer (posts, pages, custom types)',
      'WordPress → Kajabi, WP → WP, or hosting migration',
      'User accounts, course progress & purchase history preserved',
      'URL redirect mapping to protect existing SEO equity',
      'DNS cutover plan with rollback safety net',
      'Post-migration QA report & 14-day support window',
    ],
    personas: [
      { h: 'Course creators moving to Kajabi', d: 'You\'ve outgrown WordPress + LearnDash and want Kajabi\'s polish without losing your students.' },
      { h: 'Hosting refugees', d: 'Stuck on slow shared hosting or a managed host raising prices? Move clean to a tuned stack.' },
      { h: 'Brand consolidations', d: 'Merging two or three sites into one canonical brand without nuking years of content.' },
    ],
    faqs: [
      { q: 'Will my SEO rankings drop?', a: 'Not when redirects are mapped properly. I run a full crawl of the source site, build a 1:1 redirect map, ship it before DNS cutover, and verify with Search Console. Most clients see zero drop or a recovery within 2–3 weeks.' },
      { q: 'Can you migrate user accounts and passwords?', a: 'Accounts yes, passwords depend on the source. WP→WP keeps passwords intact via hash transfer. WP→Kajabi requires a forced password reset (Kajabi\'s policy), which I handle with a templated email flow.' },
      { q: 'How long does a migration take?', a: 'A typical content site is 1–2 weeks end-to-end. LearnDash sites with course progress and orders take 2–4 weeks. I always run a staging migration first so the cutover itself is under an hour.' },
      { q: 'What if something breaks after launch?', a: 'You get a 14-day post-migration support window included. Anything broken I caused, I fix — no clock running.' },
    ],
    caseStudy: {
      type: 'Migration · WP → Kajabi',
      name: 'NextMCQ',
      tagline: 'Migrated 12k members & 80+ courses with zero data loss.',
      href: '/work/nextmcq',
    },
  },
  {
    slug: 'wordpress-maintenance',
    pillar: 'WordPress',
    pillarN: '01',
    name: 'Maintenance\n& Care Plans',
    tagline: 'Your site, always updated, always backed up.',
    deliverables: [
      'Weekly plugin & theme updates with regression checks',
      'Daily off-site backups (30-day retention)',
      'Uptime monitoring with SMS alerts on downtime',
      'Monthly malware & security scans',
      'Core Web Vitals tracking with quarterly tuning',
      'Plain-English monthly report — what changed, what\'s next',
    ],
    personas: [
      { h: 'Solo founders', d: 'You don\'t have a dev on staff and don\'t want to learn what a "deferred parser" is. Hand it off.' },
      { h: 'Marketing teams', d: 'You ship campaigns, not patch updates. We keep the platform invisible so you can focus on the work.' },
      { h: 'Course operators', d: 'A broken LearnDash plugin update on a Friday is a weekend ruined. We test in staging first, every time.' },
    ],
    faqs: [
      { q: 'What does a "care plan" actually cost me?', a: 'Plans start at $149/month for content sites and scale up for LearnDash/WooCommerce. The math is simple: it\'s less than one outage and far less than a developer on retainer.' },
      { q: 'What if a plugin update breaks the site?', a: 'Every update runs in staging first with a smoke-test checklist. If something breaks, it never reaches production. If it does break later, the previous backup restores in under 15 minutes.' },
      { q: 'Do you also do small content edits?', a: 'Yes — every plan includes 30 minutes of edit time per month. Bigger pieces are handled at an hourly rate or rolled into a project sprint.' },
      { q: 'Can I cancel anytime?', a: 'Month-to-month, no contract. You take all your backups with you and a clean export of the site state at cancellation.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'wordpress-plugins',
    image: '/services/wordpress-plugins.jpg',
    pillar: 'WordPress',
    pillarN: '01',
    name: 'Custom Plugin\nDevelopment',
    tagline: 'When off-the-shelf plugins don\'t cut it.',
    deliverables: [
      'Custom plugin built to WordPress coding standards',
      'WooCommerce, LearnDash & MemberPress extensions',
      'Third-party API integrations (Stripe, Twilio, Zapier, Slack)',
      'Admin UI matched to native WordPress UX',
      'Update mechanism + license server (if commercial)',
      'Full code documentation & inline PHPDoc',
    ],
    personas: [
      { h: 'Operators with weird workflows', d: 'Your business has a process no plugin in the directory understands. We build the missing piece.' },
      { h: 'Plugin businesses', d: 'You sell to WordPress users and need a senior dev who ships clean, GPL-compliant code.' },
      { h: 'Integrators', d: 'Need WordPress to talk to your warehouse, CRM, or in-house tool? That\'s the bread and butter.' },
    ],
    faqs: [
      { q: 'Can you extend an existing plugin or do I need a fork?', a: 'Almost always extend. Forks are a maintenance trap. WordPress\'s action and filter system is rich — most "I need this plugin to do X" requests are a 200-line companion plugin, not a fork.' },
      { q: 'Will my custom plugin survive WordPress core updates?', a: 'Yes. I write against documented hooks and APIs only — no monkey-patching internals. I also test against WP betas before shipping anything mission-critical.' },
      { q: 'Do you handle Gutenberg/block development?', a: 'Yes — custom blocks, block patterns, and full-site editing extensions. React + Webpack on the build side, PHP on the registration side.' },
      { q: 'Who owns the code?', a: 'You do, full IP transfer on final payment. You also get the Git repository so future devs can pick up from a clean commit history.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'landing-pages',
    image: '/services/landing-pages.jpg',
    pillar: 'Custom Websites',
    pillarN: '02',
    name: 'Landing\nPages',
    tagline: 'High-converting pages with animations that stop the scroll.',
    deliverables: [
      'Single-page build, fully custom — no template feel',
      'Tasteful scroll & hover animations (Framer Motion / GSAP)',
      'Mobile-first layout, 60fps on mid-range devices',
      'Form integration (HubSpot, ConvertKit, Resend, custom)',
      'A/B test ready — variant slots wired to your tool',
      'Analytics, heatmaps & event tracking on day one',
    ],
    personas: [
      { h: 'Product launches', d: 'Pre-orders, waitlists, beta sign-ups — the page that has to land on day zero.' },
      { h: 'Service promotions', d: 'A sales page for one specific offer that needs to convert cold traffic from ads.' },
      { h: 'Ad campaign destinations', d: 'You\'re spending on Meta or Google and your generic homepage is leaking budget.' },
    ],
    faqs: [
      { q: 'How long until the page is live?', a: 'Two weeks from a copy-locked brief to launch. The fastest variable is your copy and image-decisions; if those are ready, design + build takes 8–10 working days.' },
      { q: 'Will animations slow the page down?', a: 'No — animations are scoped, GPU-accelerated, and respect prefers-reduced-motion. I target a Lighthouse performance score of 90+ on mobile every time.' },
      { q: 'Can you write the copy?', a: 'I\'m a developer, not a copywriter, but I\'ll happily collaborate with yours, or recommend two I\'ve worked with who specialize in conversion copy.' },
      { q: 'Do you set up A/B testing?', a: 'Yes — Google Optimize is gone, so I usually wire up VWO, Optimizely, or a simple Vercel split-test depending on your stack.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'business-websites',
    pillar: 'Custom Websites',
    pillarN: '02',
    name: 'Restaurant\n& Business Sites',
    tagline: 'A site that actually represents your business.',
    image: '/services/restaurant.jpg',
    deliverables: [
      'Multi-page website with proper IA & navigation',
      'Menu, services or pricing pages with structured content',
      'Booking & reservations integration (OpenTable, Calendly, custom)',
      'Google Maps embed + reviews aggregator',
      'Local SEO foundations (schema, GBP sync, on-page)',
      'CMS so you can update hours, menu items, & specials yourself',
    ],
    personas: [
      { h: 'Restaurants & cafés', d: 'A site that makes the food look as good as it tastes — and lets people book a table in two taps.' },
      { h: 'Local service businesses', d: 'Plumbers, clinics, studios — businesses where 80% of value is "do they trust the site enough to call?"' },
      { h: 'Independent consultants', d: 'You charge a real day rate. Your website should look like it.' },
    ],
    faqs: [
      { q: 'Do I need to hire a photographer?', a: 'For restaurants, yes — and it\'s the single biggest ROI move you can make on a website. I can recommend food photographers in your city or art-direct a shoot remotely.' },
      { q: 'Can customers book directly through the site?', a: 'Yes — restaurants get OpenTable, SevenRooms or Resy integration; service businesses get Calendly, SimplyBook or a custom booking flow tied to your calendar.' },
      { q: 'How does local SEO work?', a: 'Three layers: on-page (schema, NAP consistency, location pages), Google Business Profile sync, and review-collection automation. Most clients rank top-3 within 90 days for their core local terms.' },
      { q: 'Can I update the menu myself?', a: 'Yes — every site ships with a menu CMS where adding a dish is filling out a form. No "send me an email and I\'ll update it" nonsense.' },
    ],
    caseStudy: null,
  },
  {
    slug: 'web-applications',
    image: '/services/web-applications.jpg',
    pillar: 'Custom Websites',
    pillarN: '02',
    name: 'Web\nApplications',
    tagline: 'Custom web apps built around how you work.',
    deliverables: [
      'MERN, Next.js or Nuxt build — chosen for the use case',
      'Authentication (email, OAuth, magic links, SSO)',
      'Custom dashboards, role-based access, audit logs',
      'Third-party API integrations & webhooks',
      'Stripe / Razorpay / Paddle payment flows',
      'CI/CD pipeline + staging + production environments',
    ],
    personas: [
      { h: 'Early-stage startups', d: 'You need an MVP that doesn\'t embarrass you in front of investors or fall over on launch day.' },
      { h: 'Internal tools teams', d: 'Replacing a tangle of spreadsheets and Airtable views with a real internal app.' },
      { h: 'Solo SaaS founders', d: 'You\'re technical-adjacent and need a senior partner who ships, not a 10-person agency.' },
    ],
    faqs: [
      { q: 'How do you scope a web app project?', a: 'A two-week paid discovery sprint: user flows, data model, API surface, and a fixed-bid proposal for the MVP. You walk away with a Figma + spec even if you don\'t hire me to build.' },
      { q: 'What\'s the typical timeline?', a: 'A focused MVP is 8–12 weeks. Anything claiming "MVP in 3 weeks" is either a landing page in disguise or technical debt waiting to happen.' },
      { q: 'Do you handle hosting & DevOps?', a: 'Yes — Vercel, Railway, Render or AWS depending on the app. CI/CD, monitoring (Sentry + Logtail), and a runbook so you can hand it to a future dev without panic.' },
      { q: 'What happens after launch?', a: 'Three options: a retainer for ongoing features, a maintenance plan for upkeep only, or a clean handoff with documentation if you\'re hiring in-house.' },
    ],
    caseStudy: {
      type: 'Web Application · React Native',
      name: 'WatchTogether',
      tagline: 'Real-time co-watching app with synced playback.',
      href: '/work/watchtogether',
    },
  },
  {
    slug: 'mobile-apps',
    image: '/services/mobile-apps.jpg',
    pillar: 'Mobile Apps',
    pillarN: '03',
    name: 'iOS &\nAndroid Apps',
    tagline: 'One codebase, both stores, your brand in every pocket.',
    deliverables: [
      'React Native build — single codebase, native performance',
      'iOS App Store + Google Play submission & approval',
      'Push notifications (OneSignal or Firebase)',
      'In-app purchases & subscription handling',
      'Deep linking, universal links & smart-banners',
      'Crash reporting (Sentry) & analytics (Mixpanel/Amplitude)',
    ],
    personas: [
      { h: 'WooCommerce stores', d: 'You want a branded mobile shopping experience without rebuilding your catalog twice.' },
      { h: 'Educators', d: 'Your students want offline lessons, push reminders, and a home-screen icon — not another browser tab.' },
      { h: 'Service businesses', d: 'Booking, loyalty, and notifications matter more on mobile than they ever did on web.' },
    ],
    faqs: [
      { q: 'Why React Native and not native Swift/Kotlin?', a: 'For 90% of business apps, RN is the right call: 70% less code, single team, native UI. I reach for Swift/Kotlin only when there\'s a hard performance requirement (AR, real-time video, advanced gestures) or a platform-only API.' },
      { q: 'Will Apple approve my app?', a: 'I handle the entire submission — privacy manifest, App Store Connect setup, screenshots, review notes. First-submission approval rate over the last 12 months is 100%.' },
      { q: 'How does it stay in sync with my WooCommerce site?', a: 'Through the WooCommerce REST API + a thin caching layer. Add a product on the web, it\'s in the app within seconds. No double data entry.' },
      { q: 'What about app store fees?', a: 'Apple and Google take 15–30% on digital goods only. Physical products, services, and external subscriptions ship without a cut. I structure your monetization to avoid the fee where the rules allow.' },
    ],
    caseStudy: {
      type: 'Mobile App · React Native',
      name: 'WatchTogether',
      tagline: 'Cross-platform app shipped to both stores in 6 weeks.',
      href: '/work/watchtogether',
    },
  },
];
