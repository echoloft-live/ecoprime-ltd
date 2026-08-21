const credentials = [
  'Managing Director, Intent Energy Solutions Ltd (2010 to 2019)',
  'Managing Partner, Intent Technologies & Energy Services Ltd',
  'Gas trader of over 15 years',
  'Member, Nigerian Liquified Petroleum Gas Association',
  'Secretary, Northern Zone, Nigerian Liquified Petroleum Gas Association (NLPGA), 2012',
  'Participated in the process leading to the development of auto gas in Nigeria',
  'A leading advisor in real estate, gas and business development',
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-[100px] sm:py-[120px]">
      {/* Pale diagonal motif carried over from the supplied leadership reference. */}
      <div
        className="pointer-events-none absolute -bottom-[24%] -left-[12%] h-[72%] w-[48%] bg-lime/[0.11]"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1220px] mx-auto px-5 sm:px-7">
        <div className="mb-12 text-center reveal sm:mb-16">
          <span className="eyebrow">The People Behind ECOPRIME</span>
          <h2 className="mt-3 text-[clamp(30px,4vw,44px)] leading-[1.15]">
            <span className="text-lime-deep">Our</span> Leadership
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-20">
          <div className="order-2 reveal lg:order-1">
            <div className="mb-7">
              <h3 className="text-[clamp(26px,3vw,36px)] uppercase leading-tight">
                Abdulkadir Abbas
              </h3>
              <div className="mt-3 h-1 w-[118px] rounded-full bg-lime" aria-hidden="true" />
              <p className="mt-5 max-w-[720px] text-[15.5px] italic leading-relaxed text-gray sm:text-base">
                A leading authority in Nigerian gas market and real estate sectors of the economy
              </p>
            </div>

            <h4 className="mb-4 text-xl font-extrabold uppercase text-lime-deep">CEO</h4>
            <ul className="space-y-3.5" aria-label="Abdulkadir Abbas's professional experience">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-4 text-[14.5px] leading-relaxed text-ink sm:text-[15.5px]">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-[1px] bg-lime" aria-hidden="true" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="order-1 mx-auto w-full max-w-[390px] reveal lg:order-2">
            <div className="rounded-[18px] border-2 border-lime bg-white p-2 shadow-soft">
              <div className="aspect-[3/4] overflow-hidden rounded-[12px] bg-gray-light">
                <img
                  src="/images/abbas.jpeg"
                  alt="Abdulkadir Abbas, CEO of ECOPRIME Business Solution Ltd"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  width="720"
                  height="1040"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-right text-xs italic text-gray">
              Business Solution Provider.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
