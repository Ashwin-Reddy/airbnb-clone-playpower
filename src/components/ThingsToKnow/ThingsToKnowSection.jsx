import ThingsToKnowCard from './ThingsToKnowCard';

const CalendarIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 text-gray-950 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="26" height="22" rx="4" />
    <path d="M9 3v6M23 3v6M3 12h26" />
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 text-gray-950 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="21" r="5" />
    <path d="M14.5 17.5L25 7M21.5 10.5l2 2M23.5 8.5l2 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 text-gray-950 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 2L3 7v10c0 5.5 3.5 10 13 13 9.5-3 13-7.5 13-13V7L16 2z" />
  </svg>
);

export default function ThingsToKnowSection() {
  const sections = [
    {
      title: "Cancellation policy",
      icon: <CalendarIcon />,
      items: [
        "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
        "Review this host's full policy for details."
      ]
    },
    {
      title: "House rules",
      icon: <KeyIcon />,
      items: [
        "Check-in after 2:00 pm",
        "Checkout before 11:00 am",
        "3 guests maximum"
      ]
    },
    {
      title: "Safety & property",
      icon: <ShieldIcon />,
      items: [
        "Carbon monoxide alarm not reported",
        "Smoke alarm not reported",
        "Exterior security cameras on property"
      ]
    }
  ];

  return (
    <section className="w-full flex flex-col pt-8 select-none text-left">
      {/* Title */}
      <h2 className="text-[22px] font-bold text-gray-950 tracking-tight mb-6">
        Things to know
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
        {sections.map((sec, idx) => (
          <ThingsToKnowCard 
            key={idx}
            title={sec.title}
            icon={sec.icon}
            items={sec.items}
          />
        ))}
      </div>
    </section>
  );
}
