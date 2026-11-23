export const CONTACT = {
  phone: '+94 70 272 0050',
  phoneRaw: '94702720050',
  email: 'thasmikachamath@gmail.com',
  // Free key from https://web3forms.com (enter your email, they send the key). Leave empty to fall back to opening the visitor's email app.
  formKey: '',
}

// Customer reviews on the Reviews page (Firebase Cloud Firestore). See README > Customer reviews.
// Copy these two values from Firebase console > Project settings > General > Your apps (Web app).
// While empty, the review form opens the visitor's email app instead.
export const FIREBASE = {
  apiKey: 'AIzaSyA64DRj9Yo1Di2-ddVDEH-LFsLZ9YVlwgA',
  projectId: 'sipsonic-website',
}

// Main menu. `page` matches the page id set in scripts/pages.mjs.
export const NAV = [
  { page: 'home', href: '', label: 'Home' },
  { page: 'services', href: 'services/', label: 'Services' },
  { page: 'products', href: 'products/', label: 'Products' },
  { page: 'pricing', href: 'pricing/', label: 'Pricing' },
  { page: 'reviews', href: 'reviews/', label: 'Reviews' },
  { page: 'about', href: 'about/', label: 'About' },
  { page: 'contact', href: 'contact/', label: 'Contact' },
]

export const SERVICES = [
  {
    icon: 'bot',
    slug: 'ai-agents',
    title: 'AI Agents',
    text: 'Autonomous agents and chatbots that read documents, answer customers and automate your daily workflows.',
    tags: ['LangGraph', 'RAG', 'LLMs', 'Document AI'],
    details: [
      'Customer-support chatbots trained on your documents',
      'Document AI that reads invoices, forms and contracts',
      'Workflow automation agents that act on your data',
      'RAG knowledge assistants for your team',
    ],
    idealFor: 'Businesses drowning in repetitive admin, emails or paperwork.',
  },
  {
    icon: 'chart',
    slug: 'ai-dashboards',
    title: 'AI-Powered Dashboards',
    text: 'Smart business dashboards that turn your data into live charts, forecasts and plain-English insights, so you can decide faster.',
    tags: ['Analytics', 'Forecasting', 'Real-time Data', 'LLMs'],
    details: [
      'Live KPI dashboards connected to your existing data',
      'AI insights that explain what changed and why',
      'Sales, demand and cash-flow forecasting',
      'Ask questions about your data in plain English',
    ],
    idealFor: 'Owners and managers who want a clear, real-time view of the business without digging through spreadsheets.',
  },
  {
    icon: 'globe',
    slug: 'web-apps',
    title: 'Web Apps',
    text: 'Fast, secure and beautiful web platforms, from landing pages to full business dashboards.',
    tags: ['React', 'Next.js', 'FastAPI', 'PostgreSQL'],
    details: [
      'Business websites and landing pages',
      'Admin dashboards and internal tools',
      'Customer portals with login and roles',
      'SaaS platforms and booking systems',
    ],
    idealFor: 'Companies that need a fast, modern presence or an online system.',
  },
  {
    icon: 'phone',
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    text: 'Cross-platform Android and iOS apps with smooth UX, offline support and on-device AI.',
    tags: ['React Native', 'Expo', 'Computer Vision'],
    details: [
      'Android and iOS apps from one codebase',
      'Offline-first apps for field teams',
      'On-device AI and camera features',
      'App Store and Play Store publishing',
    ],
    idealFor: 'Startups and teams that want their product in customers\' pockets.',
  },
  {
    icon: 'cpu',
    slug: 'custom-software',
    title: 'Custom Software',
    text: 'Tailor-made systems for HR, fleet, inventory, invoicing and more, built around how your business works.',
    tags: ['ERP', 'Automation', 'Cloud', 'Docker'],
    details: [
      'HR, payroll and attendance systems',
      'Fleet, inventory and stock management',
      'Invoicing and ERP-style systems',
      'Integrations with the tools you already use',
    ],
    idealFor: 'Organisations whose processes don\'t fit off-the-shelf software.',
  },
]

// Product showcase. Put video files in public/videos/ (and optional poster images in public/posters/).
// Keep each clip ~30s, MP4 (H.264), 720p, under ~10 MB so the page stays fast.
export const PRODUCTS = [
  {
    slug: 'aigpms',
    name: 'AIGPMS',
    category: 'AI Property Management',
    text: 'An AI-powered gateway for property management. It helps real estate businesses run large portfolios of properties, tenants and payments from one smart platform.',
    client: 'Built for real estate companies managing many properties',
    about: 'AIGPMS (AI-Powered Gateway Property Management System) is built for customers who manage a large real estate portfolio. It brings properties, tenants, leases and payments into one gateway, and uses AI to automate the daily admin work, so property managers spend less time on paperwork and more time growing their business.',
    features: [
      'All properties, units and tenants in one dashboard',
      'Lease, rent and payment tracking',
      'AI automation for routine management tasks',
      'Maintenance requests and reporting',
    ],
    tags: ['AI', 'Property Management', 'Web App'],
    video: 'videos/aigpms-intro.mp4',
    poster: 'posters/aigpms-intro.jpg',
  },
  {
    slug: 'hr-fleet-management',
    name: 'HR & Fleet Management',
    category: 'Business Management System',
    text: 'One system to manage employees and company vehicles. It brings HR records, drivers, vehicles and daily operations together in a single smart dashboard.',
    client: 'Built for companies that manage staff and a vehicle fleet',
    about: 'The SipSonic HR & Fleet Management system is built for businesses that run both a team and a fleet of vehicles. Instead of juggling spreadsheets and paperwork, managers can handle employee records, driver assignments, vehicle details and maintenance from one place, with clear reports that make daily decisions easier.',
    features: [
      'Employee records and HR management',
      'Vehicle and driver management',
      'Maintenance and service tracking',
      'Reports and dashboards for managers',
    ],
    tags: ['HR', 'Fleet Management', 'Web App'],
    video: 'videos/SipSonic_HR_Fleet_Management_Final.mp4',
    poster: 'posters/hr-fleet-management.jpg',
  },
  {
    slug: 'product-three',
    name: 'Product Three',
    category: 'Mobile App',
    text: 'Short description of what this product does and the problem it solved for the customer.',
    client: 'Delivered to a startup',
    about: 'A few sentences about this project: who it was built for, the problem they had, and how the product solved it.',
    features: ['Key feature one', 'Key feature two', 'Key feature three'],
    tags: ['React Native', 'Expo', 'Computer Vision'],
    video: 'videos/product-3.mp4',
    poster: '',
  },
]

export const WHY = [
  { icon: 'spark', title: 'AI-First Thinking', text: 'Every product is designed to use AI where it truly saves you time and money.' },
  { icon: 'bolt', title: 'Built Fast', text: 'Short, focused sprints with working demos every week, so you see progress early.' },
  { icon: 'shield', title: 'Secure & Scalable', text: 'Modern cloud architecture that grows with your business from day one.' },
  { icon: 'lock', title: 'Your Privacy Protected', text: 'Your ideas, data and customer information stay confidential. We sign an NDA on request and never share your details.' },
  { icon: 'heart', title: 'Ongoing Support', text: 'We stay with you after launch with updates, fixes and new features.' },
  { icon: 'tag', title: 'Reasonable Pricing', text: 'Fair, transparent prices that fit small businesses and startups, with no hidden costs.' },
]

export const PROCESS = [
  { step: '01', title: 'Discover', text: 'We listen to your goals and map out the problem, users and features.' },
  { step: '02', title: 'Design', text: 'Wireframes and a clickable prototype, so you approve the look before we code.' },
  { step: '03', title: 'Build', text: 'Agile development with weekly demos, testing and your feedback built in.' },
  { step: '04', title: 'Launch & Grow', text: 'Deployment, training and continuous improvement after go-live.' },
]

export const TECH = [
  'Python', 'FastAPI', 'LangGraph', 'RAG', 'OpenAI', 'Azure AI', 'YOLO', 'OpenCV',
  'React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Azure',
]

export const PRICING = [
  {
    name: 'Starter',
    tagline: 'For small businesses and new ideas',
    features: ['Business website or landing page', 'Mobile-friendly modern design', 'Contact form & WhatsApp chat', 'Basic SEO setup', '1 month free support'],
    cta: 'Get a Free Quote',
  },
  {
    name: 'Business',
    tagline: 'Most popular for growing companies',
    popular: true,
    features: ['Web app or mobile app', 'Admin dashboard & database', 'User login & roles', 'AI chatbot or automation add-on', '3 months free support'],
    cta: 'Get a Free Quote',
  },
  {
    name: 'Custom / AI',
    tagline: 'For advanced and enterprise needs',
    features: ['Custom AI agents & document AI', 'ERP, HR, fleet or inventory systems', 'Integrations with your tools', 'Cloud deployment & scaling', 'Dedicated ongoing support'],
    cta: "Let's Discuss",
  },
]

export const PRICING_PERKS = ['Free consultation', 'Transparent quotes', 'Flexible milestone payments', 'No hidden costs']

// Numbers in the stats bar. Replace with your real figures.
export const STATS = [
  { value: 15, suffix: '+', label: 'Projects delivered' },
  { value: 10, suffix: '+', label: 'Happy clients' },
  { value: 2, suffix: '', label: 'Countries delivered to' },
  { value: 24, suffix: 'h', label: 'Response time' },
]

// Client reviews. Replace with real quotes (ask clients for permission to use their name).
export const TESTIMONIALS = [
  {
    quote: 'Placeholder review. SipSonic understood our business quickly and delivered a system our whole team now uses every day.',
    name: 'Client Name',
    role: 'Managing Director',
    company: 'Real Estate Company',
  },
  {
    quote: 'Placeholder review. Weekly demos meant we always knew where the project stood. Delivered on time and on budget.',
    name: 'Client Name',
    role: 'Operations Manager',
    company: 'Logistics Company',
  },
  {
    quote: 'Placeholder review. The AI features save us hours of manual work every week. Great support after launch too.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Startup',
  },
]

export const FAQ = [
  {
    q: 'How long does a project take?',
    a: 'A business website usually takes 1 to 2 weeks. A web or mobile app typically takes 4 to 10 weeks, depending on features. We give you a clear timeline in your free quote before any work starts.',
  },
  {
    q: 'How much will my project cost?',
    a: 'Every project is different, so we quote based on your exact needs. After a free consultation you get a fixed, transparent quote with no hidden costs.',
  },
  {
    q: 'Is my idea and data safe with you?',
    a: 'Yes. We treat every project and all customer data as strictly confidential. We are happy to sign a non-disclosure agreement (NDA) before you share details, we only use your information to deliver your project, and we never sell or share it. The software we build follows secure practices to protect your customers\' data too.',
  },
  {
    q: 'Do I own the source code?',
    a: 'Yes. Once the project is paid for, the full source code, designs and data belong to you.',
  },
  {
    q: 'How do payments work?',
    a: 'We use flexible milestone payments: a small deposit to start, then payments as each stage is delivered and approved.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every plan includes free support after launch for fixes and small changes. After that, we offer affordable ongoing support and new features whenever you need them.',
  },
  {
    q: 'Do you work with clients outside Sri Lanka?',
    a: 'Yes. We work with clients worldwide through video calls, WhatsApp and email, with weekly demos so you always see progress.',
  },
]

// Mission & vision (home page)
export const MISSION = {
  title: 'Our Mission',
  text: 'To make powerful AI and modern software accessible to every business, by building smart, reliable solutions fast, pricing them fairly, and staying by our clients long after launch.',
}

export const VISION = {
  title: 'Our Vision',
  text: "To become Sri Lanka's most trusted AI-first software company, helping businesses around the world work smarter, grow faster and compete with the best.",
}

export const VALUES = [
  { icon: 'spark', title: 'Knowledge', text: 'Deep engineering know-how in every line of code.' },
  { icon: 'bolt', title: 'Speed', text: 'Working demos every week, fast delivery.' },
  { icon: 'lock', title: 'Trust & Privacy', text: 'Honest advice, and your data kept strictly confidential.' },
  { icon: 'heart', title: 'Partnership', text: 'Your success is our success, long after launch.' },
]
