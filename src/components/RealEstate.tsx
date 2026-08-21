const realEstateItems = [
  'Concept Development & Sales Marketing',
  'Architectural Design',
  'Value Addition',
  'Project Management',
  'Construction Finance',
];

export default function RealEstate() {
  return (
    <section id="realestate" className="relative py-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[56px] items-center">
        {/* Image */}
        <div className="rounded-[18px] overflow-hidden aspect-[4/5] shadow-soft order-last lg:order-first relative">
          <img
            src="/images/real-estate.jpg"
            alt="ECOPRIME real estate, modern residential development under construction"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(11,37,69,0.45), transparent 45%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="reveal">
          <span className="eyebrow">Real Estate</span>
          <h2
            className="mt-3.5 mb-1.5"
            style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}
          >
            From concept to completion
          </h2>
          <p className="text-gray text-[15px] max-w-[480px]">
            ECOPRIME supports real estate projects across development, design and delivery.
          </p>

          <ul className="mt-5">
            {realEstateItems.map((item, i) => (
              <li
                key={item}
                className="flex gap-3.5 items-start py-3.5 border-b border-line last:border-b-0 text-[15px]"
              >
                <span className="w-[26px] h-[26px] rounded-full bg-gray-light text-blue-deep font-heading font-extrabold text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
