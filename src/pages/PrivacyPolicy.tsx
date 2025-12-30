export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-5xl mx-auto px-6 py-24">

        {/* ================= HEADER ================= */}
        <header className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            Privacy Policy
          </h1>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">

          <p>
            At <strong>Digi Thriva</strong>, we respect your privacy and are
            committed to protecting your personal information.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, and safeguard
            information when you visit our website or register for our
            workshops.
          </p>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Information We Collect
            </h2>

            <p>
              We may collect basic personal details such as your name, email
              address, phone number, and other information you voluntarily
              provide while registering or contacting us.
            </p>

            <p className="mt-3">
              We may also collect non-personal information like browser type,
              device details, and site usage data to improve user experience.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              How We Use Your Information
            </h2>

            <p>Your information is used to:</p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Process workshop registrations</li>
              <li>Respond to queries and support requests</li>
              <li>Improve our website and services</li>
              <li>Send important updates related to the workshop</li>
            </ul>

            <p className="mt-4">
              We do not sell, trade, or rent your personal information to third
              parties.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Cookies & Tracking
            </h2>

            <p>
              Our website may use cookies to enhance functionality and
              understand visitor behaviour. You can choose to disable cookies
              through your browser settings.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Data Protection
            </h2>

            <p>
              We follow reasonable security practices to protect your personal
              information from unauthorized access, misuse, or disclosure.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Third-Party Advertising
            </h2>

            <p>
              We may use third-party tools (such as Google Ads) that use cookies
              for advertising purposes. These tools do not collect personally
              identifiable information.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Policy Updates
            </h2>

            <p>
              Digi Thriva may update this Privacy Policy from time to time. Any
              changes will be reflected on this page.
            </p>
          </section>

          {/* ================= SECTION ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Your Acceptance
            </h2>

            <p>
              By using our website or registering for the workshop, you agree
              to this Privacy Policy.
            </p>
          </section>

          {/* ================= CONTACT ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <p className="mt-2 font-medium text-slate-900">
              📧 workshop@digithriva.com
            </p>
          </section>

        </div>

      </section>
    </main>
  );
}
