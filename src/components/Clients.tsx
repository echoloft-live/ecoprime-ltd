interface ClientItem {
  name: string;
  category: string;
  logo: string;
  alt: string;
}

const clients: ClientItem[] = [
  {
    name: 'State House',
    category: 'Presidency of Nigeria',
    logo: '/images/clients/state-house.png',
    alt: 'Coat of Arms of the Federal Republic of Nigeria — State House',
  },
  {
    name: 'Federal Capital Territory Administration (FCTA)',
    category: 'Municipal Administration',
    logo: '/images/clients/fcta.png',
    alt: 'Federal Capital Territory Administration (FCTA) Abuja — official emblem',
  },
  {
    name: 'Sublime Oil and Gas',
    category: 'Energy & Petrochemicals',
    logo: '/images/clients/sublime-oil.svg',
    alt: 'Sublime Oil & Gas Limited',
  },
  {
    name: 'Zeaxel Oil and Gas',
    category: 'Oil & Gas Solutions',
    logo: '/images/clients/zeaxel-oil.svg',
    alt: 'Zeaxel Oil & Gas Ltd',
  },
  {
    name: 'CIIN (Chuxter Investment Int\'l Nigeria Ltd.)',
    category: 'Investment & Advisory',
    logo: '/images/clients/chuxter-ciin.svg',
    alt: 'CIIN - Chuxter Investment International Nigeria Limited',
  },
  {
    name: 'Arutoms Integrated Service Nig. Ltd.',
    category: 'Integrated Services',
    logo: '/images/clients/arutoms.svg',
    alt: 'Arutoms Integrated Service Nigeria Limited',
  },
  {
    name: 'UPDC',
    category: 'Property Development PLC',
    logo: '/images/clients/updc.png',
    alt: 'UPDC PLC - Property Development Company',
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-[100px] bg-paper-dim">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow">Our Clientele</span>
          <h2>Organizations we have worked with</h2>
        </div>

        {/* Client tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 reveal">
          {clients.map(({ name, category, logo, alt }) => (
            <div
              key={name}
              className="bg-white border border-line rounded-xl p-6 flex flex-col items-center justify-between text-center min-h-[145px] shadow-tight transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-lime/50 group"
            >
              {/* Client Logo Image */}
              <div className="w-full h-14 flex items-center justify-center mb-3">
                <img
                  src={logo}
                  alt={alt}
                  className="max-h-14 w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width="210"
                  height="48"
                />
              </div>

              {/* Client Name & Category Details */}
              <div className="w-full pt-2 border-t border-gray-light">
                <span className="block font-heading font-extrabold text-[13.5px] text-blue-deep tracking-[0.01em] line-clamp-1">
                  {name}
                </span>
                <span className="block text-[11px] font-semibold text-gray uppercase tracking-[0.05em] mt-0.5">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
