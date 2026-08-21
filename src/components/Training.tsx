import { StrategyIcon, BuildingIcon, BarChartIcon, GasIcon } from './Icons';

const trainingCards = [
  { title: 'Management', Icon: StrategyIcon },
  { title: 'Real Estate', Icon: BuildingIcon },
  { title: 'Finance', Icon: BarChartIcon },
  { title: 'Gas', Icon: GasIcon },
];

export default function Training() {
  return (
    <section id="training" className="relative py-[110px]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow">Training & Development</span>
          <h2>Capacity building programmes</h2>
        </div>

        {/* Training cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5 reveal">
          {trainingCards.map(({ title, Icon }) => (
            <div
              key={title}
              className="bg-white border border-line rounded-[14px] py-[30px] px-5 text-center shadow-tight transition-transform duration-400 hover:-translate-y-[5px]"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-light flex items-center justify-center mx-auto mb-4">
                <Icon className="w-[23px] h-[23px] text-lime-deep" />
              </div>
              <h4 className="text-[16.5px]">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
