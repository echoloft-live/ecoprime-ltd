import {
  CheckIcon,
  FuelTruckIcon,
  TruckIcon,
  RouteIcon,
  ClockIcon,
  FuelPumpIcon,
} from './Icons';

const gasPills = [
  'Business Case Study',
  'Financial Model',
  'Gas Plant Development',
  'Regulations',
  'Gas to Power',
  'Autogas',
  'Gas Reticulation to Estates',
];

const fpFeatures = [
  { title: 'Refinery Automation', Icon: FuelTruckIcon },
  { title: 'Supply', Icon: TruckIcon },
  { title: 'Dispatch', Icon: RouteIcon },
  { title: '24/7 Fuel Level Control', Icon: ClockIcon },
  { title: '24/7 Dispensers Monitoring', Icon: FuelPumpIcon },
];

const stakeholders = ['Environment', 'Transportation', 'Retailer', 'Investors / Owners'];

export default function Gas() {
  return (
    <section id="gas" className="relative py-[110px] bg-paper-dim">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="eyebrow">Gas</span>
          <h2>Across the gas value chain</h2>
          <p>
            From upstream analysis to last-mile reticulation, ECOPRIME supports gas
            projects at every stage.
          </p>
        </div>

        {/* Gas grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-[56px] items-start reveal">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[4/5] shadow-soft relative">
            <img
              src="/images/gas.jpg"
              alt="ECOPRIME gas value chain, LPG storage tanks and cylinders at a gas facility"
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
          <div>
            <h4 className="text-lg mb-1.5">Gas Value Chain</h4>
            <p className="text-gray text-[14.5px] mb-1.5">
              ECOPRIME's gas specialty covers the full value chain, from feasibility
              through to distribution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {gasPills.map((pill) => (
                <div
                  key={pill}
                  className={`bg-white border border-line rounded-[10px] px-4 py-3.5 text-[13.5px] font-semibold text-blue-deep flex items-center gap-2.5 shadow-tight ${
                    pill === 'Gas Reticulation to Estates' ? 'sm:col-span-2' : ''
                  }`}
                >
                  <CheckIcon className="w-[15px] h-[15px] text-lime-deep shrink-0" />
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FuelPrime */}
        <div className="mt-[70px] bg-blue-deep rounded-[20px] px-8 sm:px-10 py-11 text-white relative overflow-hidden reveal">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 90% 10%, rgba(141,198,63,0.16), transparent 55%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3.5 mb-2.5 flex-wrap">
              <span className="font-heading font-extrabold text-[22px]">
                Fuel<span className="text-lime">Prime</span>
              </span>
            </div>

            <p className="text-white/85 text-[15px] mb-6">
              Optimizing your fuel business to the last drop!
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {fpFeatures.map(({ title, Icon }) => (
                <div key={title} className="text-center">
                  <div className="w-11 h-11 rounded-[11px] bg-white/10 flex items-center justify-center mx-auto mb-2.5">
                    <Icon className="w-5 h-5 text-lime" />
                  </div>
                  <p className="text-xs text-white/75 font-semibold">{title}</p>
                </div>
              ))}
            </div>

            {/* Benefit text */}
            <div className="border-t border-white/14 pt-6 text-[14px] text-white/85 max-w-[760px]">
              FuelPrime supports the global retail petroleum industry by providing
              next-generation automation and telemetry systems that increase business
              profitability, improve the customer refuelling experience, and reduce fuel
              losses as well as operational risks.

              <div className="flex gap-8 mt-5 flex-wrap">
                {stakeholders.map((s) => (
                  <span key={s} className="text-[13px] font-bold text-lime">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
