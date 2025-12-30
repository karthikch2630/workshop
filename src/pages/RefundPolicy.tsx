export default function RefundPolicy() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-5xl mx-auto px-6 py-24">

        {/* ================= HEADER ================= */}
        <header className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            Refund Policy
          </h1>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">

          <p>
            At <strong>Digi Thriva</strong>, we want you to feel confident and
            comfortable while registering for our workshops.
          </p>

          <p>
            Since this is an online workshop, refund or batch-change requests
            can be made up to <strong>1 hour before the workshop start time</strong>,
            subject to availability.
          </p>

          {/* ================= REQUEST PROCESS ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              How to Request a Refund or Batch Change
            </h2>

            <p>
              To request a refund or batch shift, please email us with the
              following details:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Your full name</li>
              <li>Payment receipt</li>
              <li>Registered email ID</li>
            </ul>

            <p className="mt-4 font-medium text-slate-900">
              📧 workshop@digithriva.com
            </p>
          </section>

          {/* ================= IMPORTANT NOTES ================= */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Please Note
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Requests made after the workshop has started may not be
                accommodated.
              </li>
              <li>
                Refunds or batch transfers are processed at the sole discretion
                of Digi Thriva.
              </li>
            </ul>
          </section>

        </div>

      </section>
    </main>
  );
}
