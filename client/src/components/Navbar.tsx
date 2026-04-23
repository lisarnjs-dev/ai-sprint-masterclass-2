/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Navbar: Transparent → frosted glass on scroll, minimal links
 */
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.72)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono-custom text-xs tracking-widest text-white/60 hover:text-white transition-colors duration-300 uppercase"
          >
            AI Sprint
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "소개", id: "about" },
              { label: "커리큘럼", id: "curriculum" },
              { label: "강사", id: "instructor" },
              { label: "후기", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-light"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo("apply")}
            className="hidden md:flex btn-apple text-sm py-2 px-5"
          >
            <span>수강 신청</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span
              className="block w-5 h-px bg-white/70 transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              }}
            />
            <span
              className="block w-5 h-px bg-white/70 transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-white/70 transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 transition-all duration-500 md:hidden"
        style={{
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {[
            { label: "소개", id: "about" },
            { label: "커리큘럼", id: "curriculum" },
            { label: "강사", id: "instructor" },
            { label: "후기", id: "testimonials" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-display text-4xl text-white/80 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("apply")}
            className="btn-apple-primary mt-4"
          >
            수강 신청
          </button>
        </div>
      </div>
    </>
  );
}
