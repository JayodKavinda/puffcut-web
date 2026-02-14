import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — PuffCut",
  description: "PuffCut Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <nav className="flex items-center justify-between border-b border-black/5 px-6 py-5 md:px-16">
        <Link href="/">
          <Image src="/logo.png" alt="PuffCut" width={110} height={30} priority />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-black/50 transition-colors hover:text-black"
        >
          &larr; Back
        </Link>
      </nav>

      <main className="mx-auto w-full max-w-3xl px-6 py-16 md:px-0">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-black/40">
          Effective Date: February 11, 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-black/70">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              1. Introduction
            </h2>
            <p>
              PuffCut (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the PuffCut
              mobile application (the &quot;App&quot;). This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use
              our App. Please read this Privacy Policy carefully. By using the
              App, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              2. Information We Collect
            </h2>

            <h3 className="mb-2 mt-4 font-semibold text-black/90">
              2.1 Information You Provide
            </h3>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Account Information:</strong> If you choose to create an
                account using Google Sign-In or Apple Sign-In, we receive your
                name, email address, and profile identifier from the
                authentication provider. Account creation is entirely optional.
              </li>
              <li>
                <strong>Vaping Usage Data:</strong> The App allows you to log
                puff counts, set daily goals, and track your reduction progress.
                This data is stored locally on your device by default.
              </li>
              <li>
                <strong>Cloud Sync Data:</strong> If you voluntarily enable the
                cloud sync feature, your usage data is transmitted to and stored
                on our cloud servers (powered by Google Firebase) to enable
                cross-device access and backup.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 font-semibold text-black/90">
              2.2 Information Collected Automatically
            </h3>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Analytics Data:</strong> We use Firebase Analytics to
                collect anonymized usage statistics such as app opens, feature
                usage, session duration, device type, and operating system
                version. This data is used to improve the App and does not
                personally identify you.
              </li>
              <li>
                <strong>Advertising Data:</strong> We may work with third-party
                advertising partners, including Meta (Facebook) and TikTok, and
                may use mobile measurement partners (MMPs) for attribution
                purposes. These partners may collect device identifiers (such as
                IDFA or IDFV), IP address, and interaction data to measure ad
                performance and deliver relevant advertisements. You may opt out
                of personalized advertising through your device settings via
                Apple&apos;s App Tracking Transparency (ATT) framework.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect device type,
                operating system version, unique device identifiers, and general
                diagnostic data for crash reporting and performance monitoring.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>Provide, maintain, and improve the App&apos;s functionality.</li>
              <li>
                Enable optional account creation and cloud synchronization of
                your data.
              </li>
              <li>
                Analyze usage trends to improve user experience and app
                performance.
              </li>
              <li>Measure the effectiveness of advertising campaigns.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              4. Data Storage and Security
            </h2>
            <p>
              By default, all vaping usage data is stored locally on your device
              and is not transmitted to any external server. If you enable cloud
              sync, your data is stored on Google Firebase servers, which employ
              industry-standard encryption and security measures. We implement
              commercially reasonable technical and organizational safeguards to
              protect your data, but no method of electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              5. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share information
              in the following circumstances:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>
                <strong>Service Providers:</strong> We use Google Firebase for
                authentication, cloud storage, and analytics. Firebase processes
                data on our behalf in accordance with Google&apos;s privacy policies.
              </li>
              <li>
                <strong>Advertising Partners:</strong> We may share device-level
                identifiers and interaction data with advertising platforms (such
                as Meta and TikTok) and mobile measurement partners for ad
                attribution and performance measurement, subject to your consent
                via Apple&apos;s ATT framework.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law, regulation, legal
                process, or governmental request.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              6. Your Rights and Choices
            </h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Account Deletion:</strong> You may delete your account at
                any time from within the App. Deleting your account will
                permanently remove all cloud-stored data and your account from
                our servers. Locally stored data on your device will remain
                intact unless you uninstall the App.
              </li>
              <li>
                <strong>Cloud Sync:</strong> You may enable or disable cloud sync
                at any time through the App&apos;s settings.
              </li>
              <li>
                <strong>Ad Tracking:</strong> You may opt out of ad tracking by
                declining the App Tracking Transparency prompt or adjusting your
                preferences in your device&apos;s Settings &gt; Privacy &amp;
                Security &gt; Tracking.
              </li>
              <li>
                <strong>Data Access and Portability:</strong> You may request
                access to or a copy of your personal data by contacting us at the
                email below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              7. Third-Party Services
            </h2>
            <p>The App integrates with the following third-party services:</p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>
                <strong>Google Firebase</strong> — Authentication, Cloud
                Firestore, Analytics. See{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Firebase Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Apple Sign-In</strong> — Authentication. See{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Apple Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google Sign-In</strong> — Authentication. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Google Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Meta (Facebook) Ads</strong> — Advertising and
                attribution. See{" "}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Meta Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>TikTok Ads</strong> — Advertising and attribution. See{" "}
                <a
                  href="https://www.tiktok.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  TikTok Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              8. Children&apos;s Privacy
            </h2>
            <p>
              The App is not intended for use by individuals under the age of 17.
              We do not knowingly collect personal information from children
              under 17. If we become aware that we have collected personal data
              from a child under 17, we will take steps to delete that
              information promptly. If you believe a child has provided us with
              personal information, please contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              9. Data Retention
            </h2>
            <p>
              We retain your account and cloud-synced data for as long as your
              account is active or as needed to provide you with the App&apos;s
              services. If you delete your account, we will delete your
              cloud-stored data within 30 days. Anonymized analytics data may be
              retained indefinitely for statistical purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              10. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence, including the United States,
              where Google Firebase servers are located. By using the App, you
              consent to the transfer of your information to these countries,
              which may have different data protection laws than your
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any material changes by posting the new Privacy Policy
              within the App and updating the &quot;Effective Date&quot; above. Your
              continued use of the App after any changes constitutes acceptance
              of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              12. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p className="mt-3 font-medium text-black">
              PuffCut
              <br />
              Email:{" "}
              <a
                href="mailto:puffcutapp@gmail.com"
                className="underline underline-offset-2 hover:text-black"
              >
                puffcutapp@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-col items-center gap-3 border-t border-black/5 px-6 py-8 text-center">
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
