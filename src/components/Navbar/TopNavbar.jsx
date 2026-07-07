import { FiSearch, FiGlobe, FiMenu } from 'react-icons/fi';

export default function TopNavbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 h-20 flex items-center">
      <div className="max-w-[2520px] mx-auto px-6 md:px-10 lg:px-20 w-full flex items-center justify-between">

        {/* Left: Airbnb logo */}
        <div className="flex-1 flex justify-start">
          <div 
            onClick={() => window.location.hash = '#/'}
            className="flex items-center text-[#FF385C] cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Airbnb homepage"
            >
              <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858z" />
            </svg>
            <span className="text-[22px] font-bold tracking-tighter text-[#FF385C] ml-1.5 lowercase select-none hidden md:inline">
              airbnb
            </span>
          </div>
        </div>

        {/* Center: Search pill */}
        <div className="flex-initial">
          <div className="flex items-center border border-gray-200 rounded-full py-2 pl-3 pr-2 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white">
            {/* Custom 3D house graphic */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 mr-1">
              <path d="M4 18h16" stroke="#4B9A57" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18v-7.5L12 5l6 5.5V18H6z" fill="#EAEAEA" stroke="#717171" strokeWidth="1.5" />
              <rect x="10" y="12" width="4" height="6" rx="1" fill="#FF385C" />
              <path d="M4 11.5L12 4l8 7.5" stroke="#717171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold text-gray-900 px-3">Anywhere</span>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <span className="text-sm font-semibold text-gray-900 px-3">Anytime</span>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <span className="text-sm text-gray-500 px-3">Add guests</span>
            <div className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white ml-1 hover:brightness-95 transition-all">
              <FiSearch size={14} className="stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end space-x-2">
          <button className="text-sm font-semibold text-gray-800 hover:bg-gray-50 px-4 py-2.5 rounded-full transition-colors duration-200 cursor-pointer">
            Become a host
          </button>
          <button className="text-gray-800 hover:bg-gray-50 p-2.5 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center">
            <FiGlobe size={18} />
          </button>
          <button className="flex items-center space-x-3 border border-gray-200 rounded-full py-1.5 pl-3 pr-1.5 hover:shadow-md transition-shadow duration-200 bg-white cursor-pointer">
            <FiMenu className="text-gray-800" size={16} />
            <div className="w-[30px] h-[30px] rounded-full bg-[#717171] overflow-hidden flex items-center justify-center relative select-none">
              <div className="w-3.5 h-3.5 rounded-full bg-white absolute top-[5px]"></div>
              <div className="w-7 h-5 rounded-t-full bg-white absolute bottom-[-3px]"></div>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
