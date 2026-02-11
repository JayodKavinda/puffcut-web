import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — PuffCut",
  description: "PuffCut Terms and Conditions of Use",
};

export default function Terms() {
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
        <h1 className="text-4xl font-bold tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-black/40">
          Effective Date: February 11, 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-black/70">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the PuffCut mobile application
              (the &quot;App&quot;), you agree to be bound by these Terms and Conditions
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
              These Terms constitute a legally binding agreement between you and
              PuffCut (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              2. Eligibility
            </h2>
            <p>
              You must be at least 17 years of age to use this App. By using the
              App, you represent and warrant that you meet this age requirement.
              The App is designed for individuals who currently vape and wish to
              monitor, reduce, or quit their vaping habits. The App is not
              intended to encourage or promote the use of vaping products.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              3. Description of Service
            </h2>
            <p>
              PuffCut is a personal vaping habit tracking application that allows
              users to:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>Log and track daily puff counts.</li>
              <li>Set personal daily reduction goals.</li>
              <li>View progress and usage trends over time.</li>
              <li>
                Optionally create an account and sync data across devices via
                cloud backup.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              4. Account Registration
            </h2>
            <p>
              Account creation is optional. If you choose to create an account,
              you may sign in using Google Sign-In or Apple Sign-In. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your
              account.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              5. User Data and Cloud Sync
            </h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                By default, all data you enter in the App is stored locally on
                your device.
              </li>
              <li>
                If you enable the cloud sync feature, your data will be
                transmitted to and stored on our cloud servers (Google Firebase).
              </li>
              <li>
                You may disable cloud sync at any time through the App&apos;s
                settings.
              </li>
              <li>
                You may delete your account at any time from within the App.
                Deleting your account will permanently remove your cloud-stored
                data and account from our servers. Locally stored data will
                remain on your device unless you uninstall the App.
              </li>
              <li>
                You are solely responsible for any data stored locally on your
                device, including backing up such data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              6. Health Disclaimer
            </h2>
            <p>
              <strong>
                THE APP IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL
                ADVICE.
              </strong>{" "}
              PuffCut is a personal tracking tool only. The App does not diagnose,
              treat, cure, or prevent any disease or health condition. The
              information provided by the App is for informational and
              self-monitoring purposes only and should not be considered a
              substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of a qualified healthcare
              provider with any questions you may have regarding vaping, nicotine
              dependence, or any medical condition. Reliance on any information
              provided by the App is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              7. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>
                Use the App for any unlawful purpose or in violation of any
                applicable law or regulation.
              </li>
              <li>
                Attempt to reverse engineer, decompile, disassemble, or
                otherwise attempt to derive the source code of the App.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                App or its servers.
              </li>
              <li>
                Attempt to gain unauthorized access to the App, other user
                accounts, or any related systems or networks.
              </li>
              <li>
                Use the App to transmit any viruses, malware, or other harmful
                code.
              </li>
              <li>
                Reproduce, distribute, publicly display, or create derivative
                works based on the App without our prior written consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              8. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of the App — including but
              not limited to text, graphics, logos, icons, images, software, and
              the overall design — are the exclusive property of PuffCut and are
              protected by copyright, trademark, and other intellectual property
              laws. You are granted a limited, non-exclusive, non-transferable,
              revocable license to use the App for personal, non-commercial
              purposes in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              9. Third-Party Services
            </h2>
            <p>
              The App uses third-party services including Google Firebase (for
              authentication, data storage, and analytics), Apple Sign-In, and
              third-party advertising platforms. Your use of these services is
              subject to their respective terms of service and privacy policies.
              We are not responsible for the practices of any third-party service
              providers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              10. Disclaimer of Warranties
            </h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL
              BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS. WE MAKE NO REPRESENTATIONS OR WARRANTIES
              REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY
              CONTENT PROVIDED THROUGH THE APP.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              11. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL PUFFCUT, ITS DEVELOPERS, AFFILIATES, OR LICENSORS BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF
              PROFITS, OR PERSONAL INJURY, ARISING OUT OF OR IN CONNECTION WITH
              YOUR USE OF OR INABILITY TO USE THE APP, WHETHER BASED ON WARRANTY,
              CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY,
              EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED
              TO THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, FOR
              ACCESS TO THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless PuffCut, its
              developers, officers, directors, employees, and agents from and
              against any and all claims, liabilities, damages, losses, costs,
              and expenses (including reasonable attorneys&apos; fees) arising out of
              or in connection with your use of the App, your violation of these
              Terms, or your violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              13. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the App
              at any time, with or without cause and with or without notice. Upon
              termination, your right to use the App will immediately cease. All
              provisions of these Terms that by their nature should survive
              termination shall survive, including but not limited to ownership
              provisions, warranty disclaimers, indemnification, and limitations
              of liability.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              14. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any material changes by posting the updated Terms
              within the App and updating the &quot;Effective Date&quot; above. Your
              continued use of the App after any changes constitutes acceptance
              of the revised Terms. If you do not agree to the updated Terms, you
              must stop using the App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              15. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which the developer resides,
              without regard to its conflict of law provisions. Any disputes
              arising from or relating to these Terms or the App shall be
              resolved in the competent courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              16. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid by a court of competent jurisdiction, that provision shall
              be limited or eliminated to the minimum extent necessary so that
              the remaining provisions of these Terms shall remain in full force
              and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              17. Entire Agreement
            </h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and PuffCut regarding your use of the
              App and supersede all prior or contemporaneous agreements,
              communications, and proposals, whether oral or written.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-black">
              18. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-3 font-medium text-black">
              PuffCut
              <br />
              Email:{" "}
              <a
                href="mailto:hello@puffcut.com"
                className="underline underline-offset-2 hover:text-black"
              >
                hello@puffcut.com
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
