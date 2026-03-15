import Image from 'next/image';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Badge from '../components/Badge';
import ThemeToggle from '../components/ThemeToggle';

const metrics = [
  { value: '10+', label: 'Years in mobile product engineering and cybersecurity.' },
  { value: '1M+', label: 'Users supported across healthcare and enterprise apps.' },
  { value: '13+', label: 'Enterprise clients served through platform architecture.' },
  { value: '150K+', label: 'Downloads from flagship EdTech products.' },
];

const highlightBullets = [
  'Software Engineering Senior Advisor at Evernorth, delivering enterprise healthcare apps at scale.',
  'Led mobile cybersecurity programs and hardening efforts for Android and iOS teams at Abbott.',
  'Modernized legacy systems to Kotlin + Jetpack Compose with stronger testability and release velocity.',
  'Built and mentored cross-functional teams across Android, iOS, QA, product, and design.',
];

const featuredProjects = [
  {
    title: 'Enterprise Pharmacy Apps',
    subtitle: 'Accredo • Express-Scripts • InsiderRx',
    summary:
      'Owned end-to-end Android delivery for large healthcare experiences, including modernization, analytics instrumentation, and platform reliability improvements.',
    points: ['Kotlin + Compose migration', 'Adobe + Firebase analytics', 'Dagger/Retrofit architecture', 'Millions of patients'],
    link: 'https://play.google.com/store/apps/details?id=com.accredohealth.accredo',
  },
  {
    title: 'FreeStyle Libre 3',
    subtitle: 'Secure mobile medical ecosystem',
    summary:
      'Validated and hardened critical app paths in a regulated medical-device ecosystem where data integrity and reliability directly affect patient trust.',
    points: ['Threat modeling', 'Security validation', 'Runtime defense', 'Healthcare compliance context'],
    link: 'https://play.google.com/store/apps/details?id=com.freestylelibre3.app.us&hl=en_US',
  },
  {
    title: 'UNext',
    subtitle: 'Multi-tenant EdTech platform',
    summary:
      'Architected a single-codebase mobile ecosystem serving 13+ enterprise customers with high growth and strong engagement outcomes.',
    points: ['150K+ downloads', '40K+ MAUs', '7.5K+ DAUs', 'Cross-functional delivery leadership'],
    link: 'https://play.google.com/store/apps/details?id=com.edunxt.smude',
  },
];

const experience = [
  {
    company: 'Evernorth Health Services',
    role: 'Software Engineering Senior Advisor (Sr. Android Developer)',
    period: 'March 2021 — Present',
    bullets: [
      'Own end-to-end development for enterprise healthcare apps supporting millions of patients.',
      'Led migration from legacy Android stack to Kotlin + Jetpack Compose for maintainability and delivery speed.',
      'Implemented Firebase Analytics + Adobe Analytics to improve product insights and decision quality.',
      'Strengthened engineering quality through Dagger, Retrofit, and PiTest-driven code reliability practices.',
    ],
  },
  {
    company: 'Abbott',
    role: 'Senior Technical Lead, Mobile Cybersecurity',
    period: 'April 2020 — March 2022',
    bullets: [
      'Built and led the mobile cybersecurity program for Android and iOS product teams.',
      'Executed penetration testing, threat modeling, and secure code review programs across releases.',
      'Designed reusable security evaluation frameworks adopted by multiple engineering teams.',
      'Implemented controls against MITM, insecure storage, API abuse, and reverse engineering threats.',
    ],
  },
  {
    company: 'Manipal Global Education Services',
    role: 'Senior Principal Engineer',
    period: 'June 2016 — October 2019',
    bullets: [
      'Directed a team of 7 engineers across Android, iOS, and QA to ship a flagship EdTech app.',
      'Drove product growth to 150K+ downloads with 40K+ MAUs and 7.5K+ DAUs.',
      'Architected a single-codebase ecosystem serving 13+ enterprise institutions.',
      'Integrated MLKit, payment rails, and Firebase modules to improve engagement and personalization.',
    ],
  },
  {
    company: 'LiftOff LLC',
    role: 'Software Developer',
    period: 'February 2014 — May 2016',
    bullets: [
      'Started the mobile department and delivered B2B/B2C apps for startup clients.',
      'Worked across Android, iOS, Blackberry, Tizen, Swift, PhoneGap, and Unity.',
      'Refactored two legacy production apps, reducing runtime overhead by approximately 50%.',
      'Contributed to major prototype initiatives in VR and wearables.',
    ],
  },
];

const proficiencies = [
  {
    title: 'Engineering Leadership',
    items: ['Cross-functional execution', 'Roadmap shaping', 'Mentoring and hiring', 'Stakeholder communication'],
  },
  {
    title: 'Mobile Architecture',
    items: ['Kotlin + Jetpack Compose', 'Android/iOS system design', 'Single-codebase product strategy', 'Performance and reliability'],
  },
  {
    title: 'Security & Resilience',
    items: ['Threat modeling', 'Mobile penetration testing', 'App hardening controls', 'Secure release practices'],
  },
];

const methodOfMadness = [
  {
    step: '01',
    title: 'Decode the risk and product reality',
    summary:
      'I start by mapping business goals, user-critical flows, and attack surfaces so engineering priorities are grounded in real risk.',
  },
  {
    step: '02',
    title: 'Architect for scale and maintainability',
    summary:
      'I design systems that support long-term velocity: clean modules, predictable data flow, testable boundaries, and resilient release pipelines.',
  },
  {
    step: '03',
    title: 'Harden where it matters most',
    summary:
      'I embed security controls directly in the product lifecycle through static/dynamic analysis, secure storage checks, runtime protections, and API defense.',
  },
  {
    step: '04',
    title: 'Measure impact, then optimize',
    summary:
      'I instrument product telemetry and quality signals to continuously improve delivery confidence, performance, and user trust.',
  },
];

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    href: 'https://www.credly.com/badges/a90ff412-78dd-4a1a-8e6b-e5346ec56460/linked_in_profile',
  },
  {
    title: 'Meta React Native Specialization',
    href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/E1S2RK7DYXC2',
  },
  {
    title: 'Kotlin for Java Developers',
    href: 'https://www.coursera.org/account/accomplishments/verify/UBFZTE2YKEZT',
  },
  {
    title: 'Using Python to Access Web Data',
    href: 'https://www.coursera.org/account/accomplishments/verify/UBFZTE2YKEZT',
  },
  {
    title: 'Programming for Everybody (Python)',
    href: 'https://www.coursera.org/account/accomplishments/verify/UBFZTE2YKEZT',
  },
];

const awards = [
  {
    title: 'EdTechReview Award Winner (2019)',
    href: 'https://www.edtechreview.in/news/edtechreview-award-winners-2019-corporate/',
  },
];

const appLinks = [
  { name: 'Accredo', href: 'https://play.google.com/store/apps/details?id=com.accredohealth.accredo' },
  { name: 'Express-Scripts', href: 'https://play.google.com/store/apps/details?id=com.medco.medcopharmacy&hl=en_US' },
  { name: 'InsiderRx', href: 'http://play.google.com/store/apps/details?id=com.insiderx.mobile&hl=en_US' },
  { name: 'FreeStyle Libre 3', href: 'https://play.google.com/store/apps/details?id=com.freestylelibre3.app.us&hl=en_US' },
  { name: 'UNext', href: 'https://play.google.com/store/apps/details?id=com.edunxt.smude' },
];

export default function HomePage() {
  return (
    <main className="bg-bg text-text">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-line/35 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="text-xs font-semibold uppercase tracking-[0.3em] text-text/90">
            Appoorva Faldu
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#highlights" className="transition hover:text-cyan">Highlights</a>
            <a href="#work" className="transition hover:text-cyan">Work</a>
            <a href="#experience" className="transition hover:text-cyan">Experience</a>
            <a href="#proficiencies" className="transition hover:text-cyan">Proficiencies</a>
            <a href="#method" className="transition hover:text-cyan">Method</a>
            <a href="#contact" className="transition hover:text-cyan">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://www.linkedin.com/in/falduappoorva/"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-line/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text transition hover:border-cyan/60 hover:text-cyan sm:inline-flex"
            >
              LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <section id="home" className="bg-hero-gradient px-6 pb-16 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-line/35 bg-surface/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan sm:inline-flex">
              New York Metropolitan Area • Mobile engineering leader • Security-first delivery
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-7xl">
              I build mobile products people trust, at the scale healthcare and enterprise systems demand.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Android, iOS, architecture, and cybersecurity in one leadership profile. I help teams ship faster without
              trading away resilience, compliance, or user confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>10+ Years in Mobile</Badge>
              <Badge>1M+ Users Impacted</Badge>
              <Badge>Kotlin + Compose</Badge>
              <Badge>Threat Modeling + Pentesting</Badge>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:brightness-110"
              >
                View Work <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line/40 bg-surface/60 px-6 py-3 font-semibold text-text transition hover:border-cyan/60 hover:text-cyan"
              >
                Start a Conversation
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="absolute -left-8 -top-8 -z-10 h-36 w-36 rounded-full bg-cyan/20 blur-3xl" />
            <div className="absolute -bottom-10 right-4 -z-10 h-36 w-36 rounded-full bg-orange/20 blur-3xl" />
            <div className="rounded-[2rem] border border-line/40 bg-surface/65 p-4 shadow-glow backdrop-blur">
              <div
                className="aspect-[4/5] rounded-[1.4rem] border border-line/35 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/profile-photo.jpg'), url('/avatar.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="Portrait of Appoorva Faldu"
                role="img"
              />
              <div className="mt-4 grid grid-cols-[60px_1fr] items-center gap-3 rounded-2xl border border-line/35 bg-panel/70 p-3">
                <Image src="/avatar.png" alt="Illustrated avatar" width={60} height={60} className="rounded-xl" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Signature Lens</p>
                  <p className="mt-1 text-sm text-text/90">Architecture depth + security rigor + delivery ownership.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        id="highlights"
        eyebrow="Highlights"
        title="A profile built on delivery, modernization, and resilience"
        intro="Clear outcomes for recruiters and hiring leaders: measurable impact, senior ownership, and a long track record of shipping secure mobile products."
        className="pt-8"
      >
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.05}>
              <div className="rounded-3xl border border-line/35 bg-surface/60 p-7 shadow-glow">
                <p className="text-4xl font-bold text-text">{metric.value}</p>
                <p className="mt-3 leading-7 text-muted">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl border border-line/35 bg-surface/55 p-8 shadow-glow">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Top bio snapshot</p>
            <div className="grid gap-4 md:grid-cols-2">
              {highlightBullets.map((bullet) => (
                <p key={bullet} className="flex gap-3 text-text/95">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan" size={18} />
                  <span className="leading-7">{bullet}</span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="work"
        eyebrow="Work"
        title="Flagship projects and high-stakes product work"
        intro="Selected projects that reflect technical range, leadership maturity, and security-first execution in production environments."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-line/35 bg-surface/60 p-8 shadow-glow transition hover:-translate-y-1 hover:border-cyan/60">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{project.subtitle}</p>
                <h3 className="mt-3 text-2xl font-bold text-text">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-muted">{project.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-full border border-line/40 bg-panel/60 px-3 py-1 text-sm text-text/90">
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan transition group-hover:text-text"
                >
                  Open live app <ArrowUpRight size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-8 grid gap-6 rounded-3xl border border-line/35 bg-surface/55 p-6 shadow-glow md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">More app links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {appLinks.map((app) => (
                  <a
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line/40 px-4 py-2 text-sm text-text transition hover:border-cyan/60 hover:text-cyan"
                  >
                    {app.name} <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden rounded-2xl border border-line/40 bg-panel/70 p-2 md:block">
              <Image src="/avatar.png" alt="Appoorva avatar" width={110} height={110} className="rounded-xl" />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Leadership journey with measurable outcomes"
        intro="Detailed, impact-oriented summaries designed for both hiring managers and technical peers evaluating scope and ownership."
      >
        <div className="grid gap-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.06}>
              <div className="rounded-3xl border border-line/35 bg-surface/60 p-7 shadow-glow md:p-8">
                <div className="grid gap-4 md:grid-cols-[250px_1fr] md:gap-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{item.period}</p>
                    <h3 className="mt-3 text-xl font-bold text-text">{item.role}</h3>
                    <p className="mt-2 text-muted">{item.company}</p>
                  </div>
                  <ul className="grid gap-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-text/95">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        <span className="leading-7">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="proficiencies"
        eyebrow="Proficiencies"
        title="What I bring to teams, products, and platforms"
        intro="A blend of leadership, architecture, and applied security depth for organizations operating in high-trust environments."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {proficiencies.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <div className="h-full rounded-3xl border border-line/35 bg-surface/60 p-7 shadow-glow">
                <h3 className="text-xl font-bold text-text">{group.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text/90">
                      <CheckCircle2 className="mt-1 shrink-0 text-cyan" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="method"
        eyebrow="Method of Madness"
        title="How I turn complexity into reliable delivery"
        intro="My operating model for shipping secure mobile platforms: align, architect, harden, and optimize in continuous loops."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {methodOfMadness.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <div className="rounded-3xl border border-line/35 bg-surface/60 p-8 shadow-glow">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">Step {step.step}</p>
                <h3 className="mt-3 text-2xl font-bold text-text">{step.title}</h3>
                <p className="mt-4 leading-8 text-muted">{step.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="security"
        eyebrow="Security"
        title="Security capability embedded in delivery"
        intro="Security is part of engineering maturity, not a bolt-on activity. These are the applied capabilities I use in production." 
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: 'Threat modeling',
              text: 'Prioritized security analysis based on realistic attack paths, data flow, and user impact.',
            },
            {
              icon: Smartphone,
              title: 'App hardening',
              text: 'Defense in depth across runtime checks, secure storage controls, and tamper resistance.',
            },
            {
              icon: BriefcaseBusiness,
              title: 'Pen-testing',
              text: 'Static and dynamic validation for mobile APIs, local persistence risk, and reverse engineering exposure.',
            },
            {
              icon: Award,
              title: 'Tooling depth',
              text: 'Practical use of MobSF, Frida, APKTool, and whiteCryption in product security workflows.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-3xl border border-line/35 bg-surface/60 p-6 shadow-glow">
                <item.icon className="text-cyan" size={24} />
                <h3 className="mt-4 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="certifications"
        eyebrow="Credentials"
        title="Continuous learning and verified certifications"
        intro="Professional depth backed by recognized certifications, specialization programs, and public credentials."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl border border-line/35 bg-surface/60 p-7 shadow-glow transition hover:-translate-y-1 hover:border-cyan/60"
              >
                <p className="text-lg font-semibold text-text transition group-hover:text-cyan">{item.title}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                  Open credential <ArrowUpRight size={16} />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="awards"
        eyebrow="Awards"
        title="Recognition"
        intro="Industry recognition for impact delivered through education technology platforms."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl border border-line/35 bg-surface/60 p-7 shadow-glow transition hover:-translate-y-1 hover:border-cyan/60"
              >
                <p className="text-lg font-semibold text-text transition group-hover:text-cyan">{item.title}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                  Open award detail <ArrowUpRight size={16} />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Open to leadership roles and high-impact consulting"
        intro="If you need a senior engineer who can lead architecture and security together, I am open to conversations around full-time and strategic engagements."
      >
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] border border-line/35 bg-surface/65 p-8 shadow-glow lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div>
              <div className="flex flex-wrap gap-4 text-text/95">
                <a
                  href="mailto:faldu.appoorva@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-line/40 px-4 py-2 hover:border-cyan/60 hover:text-cyan"
                >
                  <Mail size={18} /> faldu.appoorva@gmail.com
                </a>
                <a
                  href="tel:+19733074121"
                  className="inline-flex items-center gap-2 rounded-full border border-line/40 px-4 py-2 hover:border-cyan/60 hover:text-cyan"
                >
                  <Phone size={18} /> +1 (973) 307-4121
                </a>
                <a
                  href="https://github.com/falduappoorva"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line/40 px-4 py-2 hover:border-cyan/60 hover:text-cyan"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/falduappoorva/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line/40 px-4 py-2 hover:border-cyan/60 hover:text-cyan"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-muted">
                Best fit conversations: staff/principal mobile engineering roles, architecture modernization, app hardening
                programs, and healthcare product engineering leadership.
              </p>
            </div>
            <a
              href="mailto:faldu.appoorva@gmail.com?subject=Let%27s%20Build%20Something%20Great"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              Start the conversation <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-line/35 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-content flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Appoorva Faldu. Mobile Engineering Leader and Security Specialist.</p>
          <div className="flex gap-5">
            <a href="https://github.com/falduappoorva" target="_blank" rel="noreferrer" className="hover:text-cyan">GitHub</a>
            <a href="https://www.linkedin.com/in/falduappoorva/" target="_blank" rel="noreferrer" className="hover:text-cyan">LinkedIn</a>
            <a href="mailto:faldu.appoorva@gmail.com" className="hover:text-cyan">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
