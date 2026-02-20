import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">
        <Image src="/logo.png" alt="PuffCut" width={130} height={36} priority />
        <a
          href="https://apps.apple.com/us/app/6758810097"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          Download
        </a>
      </nav>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="animate-fade-up mb-6 inline-block rounded-full border border-black/10 bg-gray-50 px-4 py-1.5 text-sm font-medium text-black/60">
            Available on iOS
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Quit smarter.
            <br />
            <span className="text-black/40">Not harder.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-md text-lg leading-relaxed text-black/50">
            Track your vaping habits, set personal goals, and gradually take
            back control — one puff at a time.
          </p>

          <div className="animate-fade-up-delay-3 mt-10">
            <a
              href="https://apps.apple.com/us/app/6758810097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-light leading-none opacity-80">
                  Download on the
                </div>
                <div className="text-lg font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="border-t border-black/5 bg-gray-50/50 px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Track Usage</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/50">
              Log every puff and see your patterns over time.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Set Goals</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/50">
              Create daily limits and gradually reduce your intake.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Stay Motivated</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/50">
              See your progress and celebrate milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-3 px-6 py-8 text-center">
        <Image src="/logo.png" alt="PuffCut" width={90} height={24} />
        <div className="flex gap-4 text-xs text-black/30">
          <Link href="/privacy-policy" className="hover:text-black/60">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-black/60">
            Terms &amp; Conditions
          </Link>
        </div>
        <p className="text-xs text-black/30">
          &copy; {new Date().getFullYear()} PuffCut. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
