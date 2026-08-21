import { useState, type FormEvent } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from './Icons';

const contactMethods = [
  {
    Icon: MapPinIcon,
    label: 'Address',
    value:
      'Sinoki House, 2nd Floor Suite 8, Plot 770, Off Samuel Ademulegun Avenue, Opp. Federal Ministry of Transport, Central Business District, Abuja, Nigeria.',
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: '+234 817 000 9185',
    href: 'tel:+2348170009185',
  },
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'Info@ecoprimebusinesssolutionltd.com',
    href: 'mailto:Info@ecoprimebusinesssolutionltd.com',
  },
];

const serviceOptions = [
  'Strategy',
  'Technology',
  'Process',
  'Organization',
  'Business Solutions',
  'Gas',
  'Real Estate',
  'Remote Monitoring',
  'Training & Development',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to a backend API
  };

  return (
    <section id="contact" className="relative py-[110px] sm:py-[130px] bg-paper-dim">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="eyebrow">Contact</span>
          <h2>Discuss your project with ECOPRIME</h2>
          <p>
            Tell us about your business challenge and a member of the team will follow up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 reveal">
          {/* Contact info panel */}
          <div className="bg-blue-deep text-white rounded-[18px] px-8 sm:px-9 py-10 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 15% 100%, rgba(141,198,63,0.16), transparent 55%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="eyebrow text-lime">ECOPRIME Business Solution Ltd</span>
              <h3 className="text-white text-2xl mt-3.5 mb-7">Business Solution Provider</h3>

              {contactMethods.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-3.5 py-4 border-b border-white/14 last:border-b-0"
                >
                  <Icon className="w-[18px] h-[18px] text-lime shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.06em] text-white/55 mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-[14.5px] text-white hover:text-lime transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[14.5px] text-white">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-line rounded-[18px] p-8 sm:p-10 shadow-tight"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              {/* Name */}
              <div className="field">
                <label htmlFor="contact-name" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)]"
                />
              </div>

              {/* Company */}
              <div className="field">
                <label htmlFor="contact-company" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)]"
                />
              </div>

              {/* Email */}
              <div className="field">
                <label htmlFor="contact-email" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)]"
                />
              </div>

              {/* Phone */}
              <div className="field">
                <label htmlFor="contact-phone" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+234..."
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)]"
                />
              </div>

              {/* Service Required */}
              <div className="field sm:col-span-2">
                <label htmlFor="contact-service" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Service Required
                </label>
                <select
                  id="contact-service"
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)] appearance-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7075' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="field sm:col-span-2">
                <label htmlFor="contact-message" className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-gray mb-2 block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your project or challenge..."
                  className="w-full px-[15px] py-3 rounded-lg border border-line font-body text-[14.5px] bg-paper-dim transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-lime focus:shadow-[0_0_0_3px_rgba(141,198,63,0.18)] resize-y min-h-[100px]"
                />
              </div>
            </div>

            {submitted ? (
              <div className="w-full mt-4 py-4 text-center bg-lime/10 border border-lime/30 rounded-lg text-lime-deep font-bold">
                Enquiry Sent ✓. We&apos;ll be in touch soon.
              </div>
            ) : (
              <button type="submit" className="btn btn-navy w-full mt-4 py-4">
                Send Enquiry
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
