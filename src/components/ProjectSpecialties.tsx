import { FolderIcon, GasIcon, BuildingIcon, MonitorIcon, TrainingIcon } from './Icons';

const specialties = [
  {
    title: 'Business Solutions',
    description: 'Business plans, feasibility studies and financial models.',
    href: '#services',
    Icon: FolderIcon,
    image: '/images/business-solutions.jpg',
  },
  {
    title: 'Gas',
    description: 'Gas value chain, plant development and reticulation.',
    href: '#gas',
    Icon: GasIcon,
    image: '/images/gas.jpg',
  },
  {
    title: 'Real Estate',
    description: 'Concept development through to construction finance.',
    href: '#realestate',
    Icon: BuildingIcon,
    image: '/images/real-estate.jpg',
  },
  {
    title: 'Remote Monitoring',
    description: 'Wireless telemetry for tanks and fuel operations.',
    href: '#remote',
    Icon: MonitorIcon,
    image: '/images/remote-monitoring.jpg',
  },
  {
    title: 'Training & Development',
    description: 'Capacity building across four core sectors.',
    href: '#training',
    Icon: TrainingIcon,
    image: '/images/training.jpg',
  },
];

export default function ProjectSpecialties() {
  return (
    <section id="specialties" className="relative pt-[110px] pb-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow">Project Specialties</span>
          <h2>Where we deliver</h2>
          <p className="mx-auto">
            Five specialist areas, each backed by ECOPRIME's core strategy, technology,
            process and organization competences.
          </p>
        </div>

        {/* Specialty cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5 reveal">
          {specialties.map(({ title, description, href, Icon, image }) => (
            <a
              key={title}
              href={href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-tight cursor-pointer"
            >
              {/* Background photo */}
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Navy scrim for contrast */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(11,37,69,0.35) 0%, rgba(11,37,69,0.15) 40%, rgba(11,37,69,0.65) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="absolute top-6 left-6 z-10 w-[46px] h-[46px] rounded-xl bg-lime flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-[23px] h-[23px] text-blue-deep" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/95 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-[22px] mb-2">{title}</h3>
                <p className="text-[13px] text-white/72 mb-3">{description}</p>
                <span className="text-xs font-bold text-lime inline-flex items-center gap-1.5">
                  Learn More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
