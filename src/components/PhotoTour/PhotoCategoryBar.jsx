
export default function PhotoCategoryBar({ categories, activeCategoryId, onSelectCategory }) {
  return (
    <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 w-full select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start space-x-6 overflow-x-auto scrollbar-hide py-4">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center cursor-pointer shrink-0 text-center w-[84px] focus:outline-none"
              >
                {/* Thumbnail Image */}
                <div 
                  className={`relative w-[84px] h-[56px] rounded-lg overflow-hidden mb-2 transition-all duration-200 ${
                    isActive 
                      ? 'ring-2 ring-gray-950 ring-offset-2 opacity-100 scale-98 shadow-sm' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={cat.thumbnail}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Label */}
                <span 
                  className={`text-[12px] leading-tight transition-colors duration-200 ${
                    isActive 
                      ? 'text-gray-950 font-bold' 
                      : 'text-gray-500 font-normal hover:text-gray-800'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
