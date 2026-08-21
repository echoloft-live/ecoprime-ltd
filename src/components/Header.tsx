import { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gas', label: 'Industries' },
  { href: '#specialties', label: 'Projects' },
  { href: '#training', label: 'Training' },
  { href: '#clients', label: 'Our Clients' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-[0_8px_24px_-18px_rgba(11,37,69,0.25)] border-b border-line'
          : 'py-5'
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" aria-label="ECOPRIME. Go to top" className="flex items-center gap-2.5">
          <img
            src={scrolled ? '/images/logo.png' : '/images/logo-white.png'}
            alt="ECOPRIME Business Solution Ltd"
            className="h-[34px] w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="hidden lg:flex gap-6 items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-[13.5px] font-semibold relative py-1 transition-colors duration-300 ${
                    scrolled ? 'text-ink hover:text-lime-deep' : 'text-white/90 hover:text-white'
                  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-lime after:w-0 hover:after:w-full after:transition-[width] after:duration-300`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3.5">
          <a
            href="#contact"
            className="btn btn-lime hidden sm:inline-flex"
          >
            Talk to Us
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-[26px] h-5 bg-transparent border-none cursor-pointer z-[1200] aria-expanded:z-[1201]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`absolute left-0 right-0 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-blue-deep' : 'bg-white'
              } ${menuOpen ? 'top-[9px] rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-blue-deep' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : 'top-[9px] opacity-100'}`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-blue-deep' : 'bg-white'
              } ${menuOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Mobile navigation"
        className={`lg:hidden fixed top-0 right-0 w-[80%] max-w-[320px] h-dvh bg-blue-deep flex flex-col justify-center gap-7 px-10 transition-[right] duration-500 ${
          menuOpen ? 'right-0' : 'right-[-100%]'
        }`}
      >
        {/* Close button inside drawer */}
        <button
          onClick={closeMenu}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="text-white text-lg font-semibold transition-colors hover:text-lime"
          >
            {label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="btn btn-lime mt-4 text-center">
          Talk to Us
        </a>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[1100]"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
