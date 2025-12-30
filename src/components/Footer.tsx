export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-xs text-slate-500 leading-relaxed">

        {/* ================= COPYRIGHT ================= */}
        <p className="font-medium text-slate-600">
          © 2026 | Digi Thriva – Advertising Agency
        </p>
        <p className="mt-0.5">All Rights Reserved.</p>

        {/* ================= DISCLAIMER ================= */}
        <div className="mt-6 space-y-4 max-w-4xl mx-auto">

          <p>
            This website is not affiliated with Meta, Facebook, or Instagram.
            Once you leave Meta platforms, their responsibility does not apply
            to this website. If you have any questions, feel free to contact our
            team.
          </p>

          <p>
            At Digi Thriva, we strive to present our services, strategies, and
            training based on real-world experience and practical implementation.
            Any results, revenue figures, or examples shared are for educational
            purposes only and should not be considered guarantees.
          </p>

          <p>
            Real estate advertising results depend on multiple factors including
            project type, location, budget, market conditions, follow-up process,
            and execution. Individual outcomes may vary, and success is not
            guaranteed.
          </p>

          <p>
            Testimonials and case studies represent specific client experiences
            and are not a promise of similar results for everyone. Past
            performance does not guarantee future outcomes.
          </p>

          <p>
            You are responsible for your own decisions, actions, and results.
            We encourage you to perform your own due diligence before
            implementing any strategies discussed in this workshop.
          </p>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-6 h-px w-full bg-slate-200" />

        {/* ================= FOOTER LINKS ================= */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
          <a href="/terms" className="hover:text-slate-900 transition">
            Terms & Conditions
          </a>
          <span className="text-slate-300">|</span>
          <a href="/privacy" className="hover:text-slate-900 transition">
            Privacy Policy
          </a>
          <span className="text-slate-300">|</span>
          <a href="/refund" className="hover:text-slate-900 transition">
            Refund Policy
          </a>
          <span className="text-slate-300">|</span>
          <a href="/disclosure" className="hover:text-slate-900 transition">
            Disclosure Policy
          </a>
          <span className="text-slate-300">|</span>
          <a href="/contact" className="hover:text-slate-900 transition">
            Contact Us
          </a>
        </nav>

      </div>
    </footer>
  );
}
