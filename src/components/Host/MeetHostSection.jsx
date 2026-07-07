import HostCard from './HostCard';
import CoHostGrid from './CoHostGrid';
import HostDetails from './HostDetails';

export default function MeetHostSection() {
  return (
    <section className="w-full flex flex-col pt-8 select-none text-left">
      {/* Title */}
      <h2 className="text-[22px] font-bold text-gray-950 tracking-tight mb-6">
        Meet your host
      </h2>

      {/* Two-Column Layout (Left: Card & Bio, Right: Co-hosts and Details stacked) */}
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-x-20 gap-y-12 items-start w-full">
        {/* Left Column: Host profile Card & Bio */}
        <div className="flex flex-col w-full">
          <HostCard />
        </div>

        {/* Right Column: Co-Hosts at top, Host Details/CTA at bottom */}
        <div className="flex flex-col space-y-10 w-full">
          <CoHostGrid />
          <HostDetails />
        </div>
      </div>
    </section>
  );
}
