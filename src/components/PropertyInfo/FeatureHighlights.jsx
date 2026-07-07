import { FiUmbrella, FiKey } from 'react-icons/fi';

export default function FeatureHighlights() {
  return (
    <div className="flex flex-col space-y-6 select-none py-1">
      
      {/* 1. Outdoor entertainment */}
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1 text-gray-800">
          <FiUmbrella size={24} className="stroke-[1.75]" />
        </div>
        <div className="ml-5 flex flex-col">
          <h4 className="text-base font-semibold text-gray-900 leading-tight">
            Outdoor entertainment
          </h4>
          <p className="text-sm text-gray-500 mt-1 font-normal leading-normal">
            The pool and alfresco dining are great for summer trips.
          </p>
        </div>
      </div>

      {/* 2. Designed for staying cool */}
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1 text-gray-800">
          {/* Custom fan SVG icon matching the reference */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.75]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            <path d="M12 9.5c0-2.5 1.5-3.5 1.5-3.5s-2.5 0-3.5 3.5c0 2.5-1.5 3.5-1.5 3.5s2.5 0 3.5-3.5z" />
            <path d="M12 14.5c0 2.5-1.5 3.5-1.5 3.5s2.5 0 3.5-3.5c0-2.5 1.5-3.5 1.5-3.5s-2.5 0-3.5 3.5z" />
            <path d="M14.5 12c2.5 0 3.5 1.5 3.5 1.5s0-2.5-3.5-3.5c-2.5 0-3.5-1.5-3.5-1.5s0 2.5 3.5 3.5z" />
            <path d="M9.5 12c-2.5 0-3.5-1.5-3.5-1.5s0 2.5 3.5 3.5c2.5 0 3.5 1.5 3.5 1.5s0-2.5-3.5-3.5z" />
          </svg>
        </div>
        <div className="ml-5 flex flex-col">
          <h4 className="text-base font-semibold text-gray-900 leading-tight">
            Designed for staying cool
          </h4>
          <p className="text-sm text-gray-500 mt-1 font-normal leading-normal">
            Beat the heat with the A/C and ceiling fan.
          </p>
        </div>
      </div>

      {/* 3. Self check-in */}
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1 text-gray-800">
          <FiKey size={24} className="stroke-[1.75] rotate-90" />
        </div>
        <div className="ml-5 flex flex-col">
          <h4 className="text-base font-semibold text-gray-900 leading-tight">
            Self check-in
          </h4>
          <p className="text-sm text-gray-500 mt-1 font-normal leading-normal">
            You can check in with the building staff.
          </p>
        </div>
      </div>

    </div>
  );
}
