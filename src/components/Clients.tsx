const clients = [
  'State House',
  'Federal Capital Territory Administration (FCTA)',
  'Sublime Oil and Gas',
  'Zeaxel Oil and Gas',
  'CIIN (Chuxter Investment Int\'l Nigeria Ltd.)',
  'Arutoms Integrated Service Nig. Ltd.',
  'UPDC',
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-[100px] bg-paper-dim">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow">Our Clientele</span>
          <h2>Organizations we&apos;ve worked with</h2>
        </div>

        {/* Client tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 reveal">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-white border border-line rounded-xl py-7 px-5 flex items-center justify-center text-center min-h-[100px] shadow-tight"
            >
              <span className="font-heading font-extrabold text-[14.5px] text-blue-deep tracking-[0.01em]">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
