import { FiShare, FiHeart } from 'react-icons/fi';

export default function ListingHeader() {
  return (
    <section className="flex items-center justify-between w-full py-2">
      {/* Left side: Large property title */}
      <h1 className="text-[26px] font-semibold text-gray-900 tracking-tight leading-8">
        Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
      </h1>

      {/* Right side: Share and Save buttons */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors cursor-pointer underline decoration-solid underline-offset-2">
          <FiShare size={15} />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors cursor-pointer underline decoration-solid underline-offset-2">
          <FiHeart size={15} />
          <span>Save</span>
        </button>
      </div>
    </section>
  );
}
