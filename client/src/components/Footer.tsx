/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Footer: Minimal, clean, monochrome
 */
export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div
              className="font-mono-custom text-xs tracking-widest uppercase mb-2"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              AI Product Sprint
            </div>
            <div
              className="font-display text-lg"
              style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700 }}
            >
              Master Class 2기
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {[
              { label: "개인정보처리방침", href: "#" },
              { label: "이용약관", href: "#" },
              { label: "문의하기", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.15)", fontWeight: 300 }}
          >
            © 2025 AI Product Sprint Master Class. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.1)", fontWeight: 300 }}
          >
            바이브코딩으로 만든 랜딩페이지
          </p>
        </div>
      </div>
    </footer>
  );
}
