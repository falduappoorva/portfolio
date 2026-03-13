import Image from 'next/image';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, ShieldCheck, Smartphone, BriefcaseBusiness, Award, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Badge from '../components/Badge';

const metrics = [
  { value: '10+', label: 'Years building mobile systems across healthcare, enterprise, and edtech.' },
  { value: '1M+', label: 'Users impacted through production mobile platforms and enterprise apps.' },
  { value: '13+', label: 'Enterprise clients supported through a single-codebase platform ecosystem.' },
  { value: '5', label: 'Flagship portfolio stories spanning pharmacy, medical devices, and education.' },
];

const featuredProjects = [
  {
    title: 'FreeStyle Libre 3',
    subtitle: 'Secure mobile medical ecosystem',
    summary:
      'Security validation and app hardening work for a regulated medical-device environment where reliability, privacy, and resilience are non-negotiable.',
    points: ['Threat modeling', 'Pentesting', 'Runtime protection', 'Regulated healthcare context'],
    link: 'https://play.google.com/store/apps/details?id=com.freestylelibre3.app.us&hl=en_US',
  },
  {
    title: 'Enterprise Pharmacy Platforms',
    subtitle: 'Accredo • Medco • InsiderX',
    summary:
      'Mobile experiences built for complex healthcare workflows, secure patient data handling, and stable performance at enterprise scale.',
    points: ['Kotlin modernization', 'API orchestration', 'Healthcare reliability', 'Secure data handling'],
    link: 'https://play.google.com/store/apps/details?id=com.accredohealth.accredo',
  },
  {
    title: 'SMUDE / EduNxt',
    subtitle: 'Multi-tenant edtech ecosystem',
    summary:
      'A growth-stage platform with 150K+ downloads, 40K+ MAUs, and 7.5K+ DAUs, engineered to serve multiple institutional customers from one codebase.',
    points: ['150K+ downloads', '40K+ MAUs', '7.5K+ DAUs', '13+ enterprise customers'],
    link: 'https://play.google.com/store/apps/details?id=com.edunxt.smude',
  },
];

const experience = [
  {
    company: 'Evernorth Health Services',
    role: 'Lead Product Engineer',
    period: '2022 — Present',
    detail:
      'Driving Android platform modernization with Kotlin and Jetpack Compose while improving testing rigor, maintainability, and analytics instrumentation in a complex healthcare ecosystem.',
  },
  {
    company: 'Abbott',
    role: 'Senior Security Engineer, Mobile Cybersecurity',
    period: '2021 — 2022',
    detail:
      'Built mobile cybersecurity depth through app security testing, threat modeling, and hardening across patient-facing products and regulated mobile-device interactions.',
  },
  {
    company: 'Bajaj Finserv Health',
    role: 'Technical Lead',
    period: '2020 — 2021',
    detail:
      'Led mobile initiatives at the intersection of healthcare delivery, architecture strategy, and execution quality in a scaling product environment.',
  },
  {
    company: 'Spearhead / EduNxt',
    role: 'Technical Lead / Mobile Architect',
    period: '2015 — 2020',
    detail:
      'Built and scaled a multi-tenant edtech mobile ecosystem serving institutions at scale, balancing product growth, maintainability, and platform reuse.',
  },
];

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    href: 'https://www.credly.com/badges/a90ff412-78dd-4a1a-8e6b-e5346ec56460/linked_in_profile',
  },
  {
    title: 'MIT Sloan Executive Education',
    href: 'https://mitsloan.credential.getsmarter.com/f4c9723d-66a5-4520-9a05-56f0702ab068#acc.GQRnxqiD',
  },
  {
    title: 'Coursera Specialization',
    href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/E1S2RK7DYXC2',
  },
  {
    title: 'Coursera Certificate',
    href: 'https://www.coursera.org/account/accomplishments/verify/UBFZTE2YKEZT',
  },
  {
    title: 'EdTechReview Award Winner (2019)',
    href: 'https://www.edtechreview.in/news/edtechreview-award-winners-2019-corporate/',
  },
];

const appLinks = [
  { name: 'Accredo', href: 'https://play.google.com/store/apps/details?id=com.accredohealth.accredo' },
  { name: 'Medco', href: 'https://play.google.com/store/apps/details?id=com.medco.medcopharmacy&hl=en_US' },
  { name: 'InsiderX', href: 'http://play.google.com/store/apps/details?id=com.insiderx.mobile&hl=en_US' },
  { name: 'FreeStyle Libre 3', href: 'https://play.google.com/store/apps/details?id=com.freestylelibre3.app.us&hl=en_US' },
  { name: 'SMUDE / EduNxt', href: 'https://play.google.com/store/apps/details?id=com.edunxt.smude' },
];

export default function HomePage() {
  return (
    <main className="bg-bg text-text">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="text-sm font-semibold tracking-[0.25em] text-white/90 uppercase">
            Appoorva Faldu
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            <a href="#about" className="transition hover:text-cyan">About</a>
            <a href="#work" className="transition hover:text-cyan">Work</a>
            <a href="#security" className="transition hover:text-cyan">Security</a>
            <a href="#experience" className="transition hover:text-cyan">Experience</a>
            <a href="#contact" className="transition hover:text-cyan">Contact</a>
          </nav>
        </div>
      </div>

      <section id="home" className="bg-hero-gradient px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Mobile engineering leader • cybersecurity specialist</p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Appoorva Faldu builds mobile platforms that scale — and makes sure they&apos;re secure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Android • iOS • Healthcare • Enterprise • App Hardening. I work at the intersection of mobile architecture,
              regulated product environments, and engineering leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Recruiter-ready</Badge>
              <Badge>Consulting-friendly</Badge>
              <Badge>Kotlin & Compose</Badge>
              <Badge>Threat Modeling & Pentesting</Badge>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-white">
                View Portfolio <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan hover:text-cyan">
                Let&apos;s Connect
              </a>
              <a href="https://www.linkedin.com/in/falduappoorva/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-text transition hover:border-white/30 hover:bg-white/5">
                LinkedIn <ExternalLink size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan/10 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-surface to-panel p-4">
                <Image
                  src="/avatar.png"
                  alt="Illustrated portrait of Appoorva Faldu"
                  width={900}
                  height={1100}
                  priority
                  className="mx-auto h-auto w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="Engineering with scale and security in mind" intro="Over the last decade, I’ve helped build mobile systems used by over a million users across healthcare, enterprise pharmacy platforms, and large-scale education ecosystems.">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-lg leading-8 text-text/95">
                But scale alone isn’t enough. In regulated industries, performance means nothing without security.
                Growth means nothing without stability.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-lg leading-8 text-text/95">
                My work focuses on building mobile platforms architected for long-term resilience — systems that scale
                responsibly, withstand real-world attack surfaces, and enable teams to move confidently.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="metrics" eyebrow="Proof" title="A track record built in production" className="pt-6">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.05}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
                <p className="text-4xl font-bold text-white">{metric.value}</p>
                <p className="mt-3 leading-7 text-muted">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="work" eyebrow="Featured work" title="Flagship case studies" intro="A recruiter can scan these in minutes. A client can read them as proof of technical range, delivery maturity, and systems thinking.">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow transition hover:-translate-y-1 hover:border-cyan/40">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{project.subtitle}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-muted">{project.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-full border border-white/10 px-3 py-1 text-sm text-text/90">
                      {point}
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan transition group-hover:text-white">
                  Open live app <ArrowUpRight size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan">More app links</p>
            <div className="flex flex-wrap gap-3">
              {appLinks.map((app) => (
                <a key={app.name} href={app.href} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-text transition hover:border-cyan hover:text-cyan">
                  {app.name} <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="security"
        eyebrow="Security"
        title="Security is not an afterthought"
        intro="Most mobile apps are built for functionality. Far fewer are engineered to withstand adversarial conditions in production. My security work sits inside the architecture, not outside it."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: 'Threat modeling', text: 'Security reviews grounded in actual mobile attack surfaces and real user flows.' },
                  { icon: Smartphone, title: 'App hardening', text: 'Secure storage review, tamper resistance, runtime checks, and release hardening.' },
                  { icon: BriefcaseBusiness, title: 'Pentesting', text: 'Static and dynamic analysis across API behavior, local persistence, and reverse engineering risk.' },
                  { icon: Award, title: 'Tooling depth', text: 'MobSF, Frida, APKTool, whiteCryption, and practical validation across production concerns.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <item.icon className="mb-4 text-cyan" size={24} />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-orange/20 bg-gradient-to-br from-orange/10 to-cyan/10 p-8 shadow-accent">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange">Why it matters</p>
              <p className="mt-4 text-2xl font-bold leading-tight text-white">
                In healthcare and enterprise systems, user trust is earned through resilience.
              </p>
              <p className="mt-5 leading-8 text-text/90">
                Security is not a compliance checkbox. It is part of engineering maturity. It affects patient safety,
                data privacy, release confidence, and the long-term reliability of the product itself.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="experience" eyebrow="Journey" title="From developer to engineering leader" intro="The through-line in my career has been expanding scope: from writing reliable mobile code to guiding architecture, raising engineering standards, and reducing system risk.">
        <div className="grid gap-6">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow md:grid-cols-[220px_1fr] md:gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{item.period}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-2 text-muted">{item.company}</p>
                </div>
                <p className="leading-8 text-text/95">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Credentials" title="Certifications, recognition, and continuous learning" intro="The strongest engineering leaders keep widening their view — technically, strategically, and operationally.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <a href={item.href} target="_blank" className="group block rounded-3xl border border-white/10 bg-white/5 p-7 shadow-glow transition hover:-translate-y-1 hover:border-cyan/40">
                <p className="text-lg font-semibold text-white transition group-hover:text-cyan">{item.title}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">Open credential <ArrowUpRight size={16} /></p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build secure, scalable mobile platforms" intro="Whether you’re hiring a senior mobile engineering leader or looking for consulting support around mobile architecture and app security, I’m open to the conversation.">
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 shadow-glow lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div>
              <div className="flex flex-wrap gap-4 text-text/95">
                <a href="mailto:appoorvafaldu@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-cyan hover:text-cyan">
                  <Mail size={18} /> appoorvafaldu@gmail.com
                </a>
                <a href="tel:+12036925531" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-cyan hover:text-cyan">
                  <Phone size={18} /> +1 (203) 692-5531
                </a>
                <a href="https://github.com/falduappoorva" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-cyan hover:text-cyan">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/falduappoorva/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-cyan hover:text-cyan">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-muted">
                Best fit conversations: senior engineering roles, mobile architecture leadership, app hardening engagements,
                platform modernization, and healthcare product engineering.
              </p>
            </div>
            <a href="mailto:appoorvafaldu@gmail.com?subject=Let%27s%20Connect" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-slate-950 transition hover:bg-white">
              Start the conversation <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-content flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2025 Appoorva Faldu. Mobile Engineering Leader &amp; Security Specialist.</p>
          <div className="flex gap-5">
            <a href="https://github.com/falduappoorva" target="_blank" className="hover:text-cyan">GitHub</a>
            <a href="https://www.linkedin.com/in/falduappoorva/" target="_blank" className="hover:text-cyan">LinkedIn</a>
            <a href="mailto:appoorvafaldu@gmail.com" className="hover:text-cyan">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
