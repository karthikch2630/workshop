export default function ContactPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-4xl mx-auto px-6 py-24">

        {/* ================= HEADER ================= */}
        <header className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            Contact Us
          </h1>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="text-center space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">

          <p className="text-base sm:text-lg">
            Have any questions about the workshop?
          </p>

          <p>
            Feel free to reach out to us at
          </p>

          <p className="font-medium text-slate-900 text-base sm:text-lg">
            📧 workshop@digithriva.com
          </p>

          <p className="text-slate-500 text-xs sm:text-sm mt-6">
            ⏳ Please note: We usually respond within 48 business hours,
            though we always try to get back sooner.
          </p>

        </div>

      </section>
    </main>
  );
}
