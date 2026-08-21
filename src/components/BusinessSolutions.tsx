import { DocumentIcon, BarChartIcon, CheckIcon } from './Icons';

const plans = [
  {
    title: 'Business Plan',
    Icon: DocumentIcon,
    items: [
      'Business Description',
      'Market Analysis and Strategy',
      'Marketing and Sales Plan',
      'Management and Organization Description',
      'Competitive Analysis',
      'Operating Plan',
    ],
  },
  {
    title: 'Financial Model',
    Icon: BarChartIcon,
    items: [
      'Income Statement',
      'Balance Sheet',
      'Cash Flow Statement',
      'Debt Schedule',
    ],
  },
];

const feasibilitySteps = [
  'Conduct Preliminary Analysis',
  'Prepare Projected Income Statements',
  'Conduct Market Survey',
  'Plan Business Organization and Operations',
  'Prepare Opening Day Balance Sheet',
  'Review and Analyze Data',
];

export default function BusinessSolutions() {
  return (
    <section className="relative py-[100px] bg-paper-dim">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-7">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="eyebrow">Business Solutions</span>
          <h2>Structured plans that stand up to scrutiny</h2>
          <p>
            From the business plan itself to the financial model behind it, ECOPRIME
            builds the documentation investors, lenders and boards expect.
          </p>
        </div>

        {/* Business plan / Financial model grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 reveal">
          {plans.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="bg-white border border-line rounded-[14px] p-8 shadow-tight"
            >
              <h4 className="text-xl mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gray-light flex items-center justify-center text-lime-deep shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                {title}
              </h4>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="py-2 text-sm text-gray flex gap-2.5 border-b border-gray-light last:border-b-0"
                  >
                    <CheckIcon className="w-3.5 h-3.5 text-lime-deep mt-[3px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feasibility Studies */}
        <h4 className="text-xl mt-[50px] mb-6 reveal">Feasibility Studies</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
          {feasibilitySteps.map((step, i) => (
            <div
              key={step}
              className="bg-white border border-line rounded-xl p-5 text-center shadow-tight"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-blue-deep text-lime font-heading font-extrabold text-[13px] flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <p className="text-xs text-ink font-semibold leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
