const featuredProjects = [
  {
    title: "Helix Analytics Suite",
    eyebrow: "SaaS Dashboard",
    description:
      "A premium analytics platform with role-aware views, live KPI modules, polished onboarding, and a component system designed to scale across product teams.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API Design"],
    outcome: "Reduced dashboard friction and improved decision-making with clearer data storytelling.",
  },
  {
    title: "Northstar Commerce Cloud",
    eyebrow: "Headless Commerce",
    description:
      "A fast storefront experience focused on conversion, with dynamic product discovery, resilient API integration, checkout UX refinement, and mobile-first performance.",
    stack: ["React", "Next.js", "REST APIs", "Performance"],
    outcome: "Created a smoother path from discovery to purchase across desktop and mobile.",
  },
  {
    title: "SignalOps Client Portal",
    eyebrow: "B2B Platform",
    description:
      "A secure client workspace for reports, requests, and collaboration, built with structured UI patterns and backend-aware architecture for long-term maintainability.",
    stack: ["Next.js", "Node.js", "UX Systems", "Scalable Frontend"],
    outcome: "Unified fragmented workflows into a more intuitive self-serve platform.",
  },
];

const services = [
  {
    title: "Product-Focused Frontend Engineering",
    description:
      "Interfaces that look premium, feel intuitive, and stay maintainable as your product grows.",
  },
  {
    title: "Next.js Full-Stack Delivery",
    description:
      "From app router experiences to API-driven features, I bridge UI quality with practical backend execution.",
  },
  {
    title: "Design System Thinking",
    description:
      "Reusable components, spacing logic, and visual consistency that help teams ship faster without losing polish.",
  },
  {
    title: "Performance & UX Optimization",
    description:
      "Faster loads, cleaner flows, and thoughtful micro-interactions that make products feel more trustworthy.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the product and audience",
    description:
      "Clarify user goals, business priorities, and the technical constraints that shape the experience.",
  },
  {
    number: "02",
    title: "Design the system before the screens",
    description:
      "Create structure, component logic, and interaction patterns that support consistent delivery.",
  },
  {
    number: "03",
    title: "Build for speed, resilience, and scale",
    description:
      "Ship clean code, responsive layouts, and API-connected features with production-minded architecture.",
  },
  {
    number: "04",
    title: "Refine with performance and UX insight",
    description:
      "Polish the details that influence trust: loading states, responsiveness, accessibility, and clarity.",
  },
];

const testimonials = [
  {
    quote:
      "He brings a rare mix of visual taste and engineering discipline. The final product felt premium from the first interaction.",
    name: "Product Lead",
    company: "B2B SaaS Studio",
  },
  {
    quote:
      "From architecture to UI polish, the work was thoughtful, fast, and highly collaborative. We shipped with more confidence.",
    name: "Founder",
    company: "Growth Commerce Brand",
  },
  {
    quote:
      "The frontend quality elevated how customers perceived the entire platform. Clean execution, strong communication, and reliable delivery.",
    name: "Operations Director",
    company: "Client Services Platform",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(180deg,#06101d_0%,#0a1220_45%,#101827_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent)]" />
      </div>

      <section className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 mb-14 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                FN
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Portfolio
                </p>
                <p className="text-sm font-medium text-white/80">
                  Frontend Developer • Next.js Engineer
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm text-white/65">
              <a className="transition hover:text-white" href="#projects">
                Work
              </a>
              <a className="transition hover:text-white" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#testimonials">
                Testimonials
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
              <a
                href="/login"
                className="ml-0 inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/15 px-5 py-2.5 font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/20 md:ml-2"
              >
                Client Login
              </a>
            </nav>
          </div>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
              Available for premium product builds and frontend consulting
            </div>

            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.42em] text-white/40">
                High-end product experiences for modern web teams
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-balance sm:text-6xl lg:text-7xl">
                I design and build polished{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Next.js experiences
                </span>{" "}
                that feel fast, clear, and premium.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I am a frontend developer with strong backend knowledge, focused
                on creating conversion-ready marketing sites, scalable product
                interfaces, and API-connected platforms with clean architecture
                and refined UX.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Selected Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Book a Project Call
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-semibold text-white">3+ yrs</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Building modern interfaces with product-level attention to
                  detail
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-semibold text-white">20+</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Responsive pages, dashboards, and full customer journeys
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-semibold text-white">99%</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Focus on clarity, performance, and production-ready execution
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2.25rem] bg-cyan-400/15 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/80">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Live Build
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.20),rgba(15,23,42,0.95),rgba(59,130,246,0.18))] p-5">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                          Product Overview
                        </p>
                        <h2 className="mt-2 text-xl font-semibold text-white">
                          Premium client dashboard
                        </h2>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">
                        +34% engagement
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          Core Web Vitals
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          95
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          API Stability
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          99.9%
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          UX Satisfaction
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          4.9/5
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                            Engineering Snapshot
                          </p>
                          <p className="mt-1 text-sm text-white/60">
                            Full-stack aware frontend delivery
                          </p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-400/20" />
                      </div>
                      <div className="space-y-3 font-mono text-sm text-slate-300">
                        <p>
                          <span className="text-cyan-300">stack</span>:{" "}
                          <span className="text-emerald-300">
                            Next.js, React, TS
                          </span>
                        </p>
                        <p>
                          <span className="text-cyan-300">focus</span>:{" "}
                          <span className="text-emerald-300">
                            UX, performance, APIs
                          </span>
                        </p>
                        <p>
                          <span className="text-cyan-300">delivery</span>:{" "}
                          <span className="text-emerald-300">
                            clean, scalable, production-ready
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                        Trusted Stack
                      </p>
                      <div className="mt-4 space-y-3">
                        {["Next.js", "TypeScript", "Tailwind", "Node.js"].map(
                          (item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-slate-200"
                            >
                              {item}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-white/70 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Specialty
            </p>
            <p className="mt-2 text-base text-white/85">
              Next.js product builds with premium frontend polish
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Strength
            </p>
            <p className="mt-2 text-base text-white/85">
              Design-sensitive engineering with backend awareness
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Ideal Projects
            </p>
            <p className="mt-2 text-base text-white/85">
              SaaS, dashboards, portals, and conversion-first websites
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Approach
            </p>
            <p className="mt-2 text-base text-white/85">
              Clear UX, reliable code, and details that raise trust
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Work shaped by product thinking, performance, and visual quality.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            I build websites and applications that do more than look good. They
            create confidence, support business goals, and stay maintainable as
            product complexity grows.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
                <div
                  className={`relative h-56 rounded-[1.2rem] ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(10,18,32,0.95),rgba(59,130,246,0.18))]"
                      : index === 1
                        ? "bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(15,23,42,0.95),rgba(14,165,233,0.14))]"
                        : "bg-[linear-gradient(135deg,rgba(96,165,250,0.18),rgba(15,23,42,0.95),rgba(34,211,238,0.16))]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.15),transparent_24%)]" />
                  <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/55">
                      <span>{project.eyebrow}</span>
                      <span>Case Study</span>
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur">
                      <div className="h-14 rounded-xl bg-white/10" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur">
                      <div className="h-14 rounded-xl bg-cyan-300/15" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur">
                      <div className="h-14 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                {project.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-white/75">
                {project.outcome}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-slate-950/30"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Experience
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Strong frontend craft, backed by practical system thinking.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              I work at the intersection of product design, UI engineering, and
              backend-aware execution. That means cleaner handoff, fewer
              surprises in development, and a more reliable path from idea to
              launch.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Frontend Development
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Modern, responsive, production-ready interfaces
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  React • Next.js • TypeScript
                </span>
              </div>
              <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                I translate product direction into refined user interfaces with
                strong component structure, scalable styling patterns, and a
                consistent visual system that feels intentional across every
                screen.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Backend-Aware Delivery
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Better decisions because the architecture is understood
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  APIs • Data Flows • App Router
                </span>
              </div>
              <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                My understanding of routing, data handling, and integration
                constraints helps me build frontend experiences that are not
                only elegant, but realistic to ship and easier to maintain.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Product Collaboration
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Clear communication from concept to launch
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Strategy • UX • Delivery
                </span>
              </div>
              <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                I value clarity, speed, and thoughtful iteration. Whether
                collaborating with founders or internal teams, I focus on moving
                projects forward without sacrificing design quality or technical
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            End-to-end frontend support for ambitious digital products.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">
                0{index + 1}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A streamlined workflow designed for clarity and high-quality
              delivery.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.7rem] border border-white/10 bg-slate-950/50 p-6"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Trusted by teams that care about product quality.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Good frontend work is not just about visuals. It improves confidence
            across product, engineering, and customer experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <blockquote className="text-lg leading-8 text-slate-200">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-cyan-200">{item.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,47,73,0.95),rgba(15,23,42,0.98),rgba(14,116,144,0.75))] p-8 shadow-2xl shadow-cyan-950/20 sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Let's Build
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
                Need a frontend partner who can combine clean UX with strong
                Next.js execution?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I help teams launch premium websites, robust dashboards, and
                scalable product experiences that feel intentional from the very
                first interaction.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Start Here
              </p>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:your@email.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  your@email.com
                </a>
                <a
                  href="/login"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Enter Client Login
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-4 font-semibold text-white/85 transition hover:bg-white/5"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}