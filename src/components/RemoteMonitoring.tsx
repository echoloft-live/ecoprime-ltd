import { CheckIcon } from './Icons';

const monitorProducts = [
  {
    title: 'Wireless Oil Tank Monitoring',
    model: 'imr · Alevel303 & OKO 5513',
    description: 'Contributes to significant savings in distribution processes.',
    features: [
      'GPRS or SMS communication',
      'Totally wireless',
      'Delivers hourly consumption',
      'Low, critical & rapid drop alarms',
      'Fits nearly all tanks, any size',
      'Easy on-site installation',
      'Long life battery',
      'Zone 0, ATEX approved',
    ],
  },
  {
    title: 'Wireless Monitoring of LP Gas Tanks',
    model: 'imr · Alevel 0275 & OKO 5575',
    description: 'Contributes to significant savings in distribution processes.',
    features: [
      'GPRS or SMS communication',
      'Totally wireless',
      'Delivers hourly LPG consumption',
      'Low, critical & rapid drop alarms',
      'Fits nearly all tanks, any size',
      'Easy on-site installation',
      'Long life battery',
      'Zone 0, ATEX approved',
    ],
  },
];

export default function RemoteMonitoring() {
  return (
    <section id="remote" className="relative py-[110px] bg-blue-deep text-white">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="eyebrow text-lime">Remote Monitoring</span>
          <h2 className="text-white">Wireless monitoring for tanks and fuel operations</h2>
          <p className="text-white/65">
            ECOPRIME's remote monitoring specialty is delivered through IMR wireless
            telemetry solutions for oil and LP gas tanks.
          </p>
        </div>

        {/* IMR cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 reveal">
          {monitorProducts.map(({ title, model, description, features }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/12 rounded-2xl p-7 sm:p-8"
            >
              <h4 className="text-white text-lg mb-1.5">{title}</h4>
              <div className="text-xs text-lime font-bold uppercase tracking-[0.05em] mb-4">
                {model}
              </div>
              <p className="text-[13.5px] text-white/70 mb-5">{description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {features.map((feat) => (
                  <div
                    key={feat}
                    className="flex gap-2 items-start text-[13px] text-white/78 py-1.5"
                  >
                    <CheckIcon className="w-3.5 h-3.5 text-lime mt-[3px] shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
