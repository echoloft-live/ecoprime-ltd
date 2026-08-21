export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center overflow-hidden bg-blue-deep pt-[90px]"
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(11,37,69,0.94) 20%, rgba(11,37,69,0.75) 60%, rgba(30,84,136,0.55) 100%), url('/images/real-estate.jpg')",

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          animation: 'heroZoom 26s ease-in-out infinite alternate',
        }}
      />

      {/* Decorative lime shapes */}
      <div
        className="absolute bg-lime opacity-14 clip-path-[polygon(8%_0,100%_0,92%_100%,0%_100%)]"
        style={{
          width: '38%',
          height: '120%',
          top: '-10%',
          right: '-6%',
          clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0% 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bg-lime opacity-8"
        style={{
          width: '14%',
          height: '70%',
          top: '15%',
          right: '16%',
          clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0% 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 py-[60px] sm:py-[70px] w-full">
        <div className="max-w-[720px] mx-auto px-5 sm:px-7">
          <span className="eyebrow reveal reveal--in text-lime">
            ECOPRIME Business Solution Ltd
          </span>

          <h1
            className="text-white text-balance mt-5 mb-5 reveal reveal--in"
            style={{
              fontSize: 'clamp(34px, 5vw, 58px)',
              lineHeight: 1.12,
              transitionDelay: '0.1s',
            }}
          >
            Business Solutions That{' '}
            <span className="text-lime">Move Organizations Forward</span>
          </h1>

          <p
            className="text-white/82 text-balance mb-9 reveal reveal--in max-w-[540px]"
            style={{ fontSize: 17, transitionDelay: '0.2s' }}
          >
            ECOPRIME Business Solution Ltd provides strategic, technological, process,
            and organizational solutions designed to help businesses improve performance,
            develop opportunities, and achieve sustainable growth.
          </p>

          <div
            className="flex flex-wrap gap-3.5 mb-14 reveal reveal--in"
            style={{ transitionDelay: '0.3s' }}
          >
            <a href="#services" className="btn btn-lime">
              Explore Our Services
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact ECOPRIME
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-wrap gap-4 pt-6 border-t border-white/16 reveal reveal--in"
            style={{ transitionDelay: '0.4s' }}
          >
            {[
              { label: 'Strategy', desc: 'Planning & Enterprise Architecture' },
              { label: 'Technology', desc: 'Development & Systems Integration' },
              { label: 'Process', desc: 'Improvement & Benchmarking' },
              { label: 'Organization', desc: 'Realignment & Talent Management' },
            ].map(({ label, desc }) => (
              <div
                key={label}
                className="text-[13px] font-semibold text-white/78 pr-0 mr-0 border-r-0 sm:pr-[38px] sm:mr-[38px] sm:border-r sm:border-white/14 last:border-r-0 last:mr-0"
              >
                <strong className="block font-heading text-[15px] text-white mb-0.5">
                  {label}
                </strong>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
