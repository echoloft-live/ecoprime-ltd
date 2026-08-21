const frameworkItems = [
  {
    number: '01 · STRATEGY',
    title: 'Direction',
    description:
      'Strategic planning, enterprise architecture and business case analysis to set the right course.',
  },
  {
    number: '02 · TECHNOLOGY',
    title: 'Systems',
    description:
      'Software development, systems integration and IT infrastructure that support execution.',
  },
  {
    number: '03 · PROCESS',
    title: 'Execution',
    description:
      'Process improvement, operational assessments and benchmarking to sharpen performance.',
  },
  {
    number: '04 · ORGANIZATION',
    title: 'People',
    description:
      'Organizational realignment, performance management and talent management to sustain it.',
  },
];

export default function Framework() {
  return (
    <section className="relative py-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="eyebrow">Why ECOPRIME</span>
          <h2>One framework, four organizational angles</h2>
          <p>
            ECOPRIME approaches business challenges through a connected framework spanning
            strategy, technology, process and organization.
          </p>
        </div>

        {/* Framework grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-line rounded-2xl overflow-hidden reveal">
          {frameworkItems.map(({ number, title, description }) => (
            <div
              key={number}
              className="relative px-6 sm:px-7 py-10 border-b sm:border-b-0 sm:border-r border-line last:border-r-0 group hover:bg-gray-light/50 transition-colors duration-300"
            >
              <div className="font-heading font-extrabold text-[13px] text-lime-deep tracking-[0.08em] mb-3.5">
                {number}
              </div>
              <h4 className="text-lg mb-2.5">{title}</h4>
              <p className="text-[13.5px] text-gray">{description}</p>

              {/* Animated bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
