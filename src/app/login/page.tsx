const benefits = [
  "Client-ready project delivery with premium UI polish",
  "Fast Next.js architecture with strong frontend performance",
  "Backend-aware implementation for scalable product builds",
];

const trustPoints = [
  { label: "Projects shipped", value: "24+" },
  { label: "Average Lighthouse score", value: "95+" },
  { label: "Response time", value: "< 24h" },
];

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#07111f_0%,#0b1220_42%,#111827_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-16 right-[10%] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="mb-10 flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Secure Access
            </p>
            <h1 className="text-lg font-semibold text-white">
              Portfolio Client Portal
            </h1>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            ← Back to Home
          </a>
        </header>

        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
                Trusted by founders, agencies, and modern brands
              </div>

              <div className="mt-8 space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.42em] text-white/45">
                  Premium Build Experience
                </p>
                <h2 className="max-w-xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                  Log in to review project updates, assets, and delivery-ready
                  workspaces.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-slate-300">
                  This mock portal is designed to feel like a refined SaaS
                  product experience—clean, secure, and crafted with the same
                  detail used in high-end portfolio builds.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-slate-950/35 p-5"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Why clients return
                </p>
                <div className="mt-5 space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-xs text-cyan-200">
                        ✓
                      </span>
                      <p className="text-sm leading-7 text-slate-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.88),rgba(15,23,42,0.92))] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Social Proof
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  “A premium frontend partner who combines design sensitivity
                  with solid Next.js execution. Fast communication, polished
                  delivery, and zero guesswork.”
                </p>
                <p className="mt-4 text-sm text-white/60">
                  — Product Lead, SaaS Startup
                </p>
              </div>
            </div>
          </aside>

          <section className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6 sm:p-8">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    Welcome Back
                  </p>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                    Sign in to your workspace
                  </h3>
                  <p className="text-base leading-7 text-slate-300">
                    Access client notes, project milestones, shared assets, and
                    polished delivery previews from one focused dashboard.
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-200"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-slate-200"
                      >
                        Password
                      </label>
                      <a
                        href="/"
                        className="text-sm text-cyan-300 transition hover:text-cyan-200"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <label className="inline-flex items-center gap-3 text-sm text-slate-300">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border border-white/20 bg-white/5 accent-cyan-400"
                      />
                      Remember me for this device
                    </label>

                    <p className="text-sm text-white/55">
                      Encrypted preview access enabled
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Enter Client Portal
                  </button>
                </form>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    Demo experience only — no real authentication is connected.
                    Use this screen as a polished portfolio concept for secure
                    client access and premium SaaS-style onboarding.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">
                    Need to explore the portfolio first?
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Return to homepage
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}