const footerCompanyLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#specialties', label: 'Projects' },
  { href: '#clients', label: 'Our Clients' },
];

const footerServiceLinks = [
  { href: '#gas', label: 'Gas' },
  { href: '#realestate', label: 'Real Estate' },
  { href: '#remote', label: 'Remote Monitoring' },
  { href: '#training', label: 'Training & Development' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-deep text-white/62 pt-16 pb-8">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-8 lg:gap-11 pb-11 border-b border-white/12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo-white.png"
              alt="ECOPRIME Business Solution Ltd"
              className="mb-4 h-[34px] w-auto"
            />
            <p className="text-[13px] max-w-[280px] text-white/50">
              ECOPRIME Business Solution Ltd provides strategic, technological, process
              and organizational solutions across business strategy, gas, real estate,
              remote monitoring and training and development.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-heading text-[12.5px] tracking-[0.06em] uppercase mb-4.5 font-extrabold">
              Company
            </h5>
            <ul>
              {footerCompanyLinks.map(({ href, label }) => (
                <li key={href} className="mb-2.5">
                  <a
                    href={href}
                    className="text-[13.5px] transition-colors hover:text-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-heading text-[12.5px] tracking-[0.06em] uppercase mb-4.5 font-extrabold">
              Services
            </h5>
            <ul>
              {footerServiceLinks.map(({ href, label }) => (
                <li key={href} className="mb-2.5">
                  <a
                    href={href}
                    className="text-[13.5px] transition-colors hover:text-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-heading text-[12.5px] tracking-[0.06em] uppercase mb-4.5 font-extrabold">
              Contact
            </h5>
            <ul>
              <li className="mb-2.5 text-[13.5px]">
                Sinoki House, 2nd Floor Suite 8
              </li>
              <li className="mb-2.5 text-[13.5px]">
                Central Business District, Abuja
              </li>
              <li className="mb-2.5">
                <a
                  href="tel:+2348170009185"
                  className="text-[13.5px] transition-colors hover:text-lime"
                >
                  +234 817 000 9185
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@ecoprimebusinesssolutionltd.com"
                  className="text-[13.5px] transition-colors hover:text-lime break-all"
                >
                  Info@ecoprimebusinesssolutionltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center pt-6 text-xs gap-2.5">
          <span>© 2026 ECOPRIME Business Solution Ltd. All Rights Reserved.</span>
          <span className="text-lime font-bold">Business Solution Provider.</span>
        </div>
      </div>
    </footer>
  );
}
