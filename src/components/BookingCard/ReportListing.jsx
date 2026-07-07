import { FiFlag } from 'react-icons/fi';

export default function ReportListing() {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-500 hover:text-black transition-colors duration-150 cursor-pointer select-none mt-6 text-[14px]">
      <FiFlag className="w-4 h-4" />
      <span className="underline font-semibold text-gray-500 hover:text-black">
        Report this listing
      </span>
    </div>
  );
}
