
export default function HostSection() {
  return (
    <div className="flex items-center select-none py-1">
      {/* Circular Host Avatar using the branding colors shown in reference */}
      <div className="w-10 h-10 rounded-full bg-[#0F5342] flex items-center justify-center text-white font-semibold text-sm tracking-tight mr-4">
        MH
      </div>

      {/* Host text metadata */}
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 text-base leading-tight">
          Hosted by Mirashya Homes
        </span>
        <span className="text-gray-500 text-sm mt-0.5 font-normal">
          2 years hosting
        </span>
      </div>
    </div>
  );
}
