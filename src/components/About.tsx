import {
  StrategyIcon,
  TechnologyIcon,
  ProcessIcon,
  OrganizationIcon,
  CheckIcon,
} from './Icons';

const competencies = [
  {
    title: 'Strategy',
    Icon: StrategyIcon,
    items: ['Strategic Planning', 'Enterprise Architecture', 'Business Case Analysis'],
  },
  {
    title: 'Technology',
    Icon: TechnologyIcon,
    items: ['Software Development', 'Systems Integration', 'IT Infrastructure Services'],
  },
  {
    title: 'Process',
    Icon: ProcessIcon,
    items: ['Process Improvement', 'Operational Assessments', 'Benchmarking Analysis'],
  },
  {
    title: 'Organization',
    Icon: OrganizationIcon,
    items: ['Organizational Realignment', 'Performance Management', 'Talent Management'],
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-[130px] pb-[100px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Intro */}
        <div className="max-w-[760px] mb-[60px] reveal">
          <span className="eyebrow">About ECOPRIME</span>
          <h2
            className="mt-3.5"
            style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
          >
            Solutions Built Around Your Business
          </h2>
          <p className="text-gray mt-4 max-w-[700px]" style={{ fontSize: 16.5 }}>
            ECOPRIME Business Solution Ltd is a business solution provider operating across
            business strategy, technology, process improvement, organizational development,
            business solutions, gas, real estate, remote monitoring, and training and
            development. Our core competences are structured around four connected areas:
            Strategy, Technology, Process, and Organization. This allows us to approach
            complex business challenges from every angle.
          </p>
        </div>

        {/* Competency grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {competencies.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="bg-white border border-line rounded-[14px] overflow-hidden shadow-tight transition-transform duration-400 hover:-translate-y-[5px]"
            >
              {/* Card header */}
              <div className="bg-blue-deep text-white px-6 py-5 flex items-center gap-3.5">
                <div className="w-[38px] h-[38px] rounded-[9px] bg-lime flex items-center justify-center shrink-0">
                  <Icon className="w-[19px] h-[19px] text-blue-deep" />
                </div>
                <h4 className="text-white text-lg m-0 tracking-[0.02em]">{title}</h4>
              </div>

              {/* Card body */}
              <ul className="px-6 pt-5 pb-6">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 items-start py-2.5 text-[14.5px] text-ink border-b border-gray-light last:border-b-0"
                  >
                    <CheckIcon className="w-4 h-4 text-lime-deep mt-[3px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
