
export default function AmenityItem({ icon: Icon, label, notIncluded }) {
  return (
    <div className="flex items-center space-x-4 select-none">
      <Icon 
        className={`w-6 h-6 flex-shrink-0 ${
          notIncluded ? 'text-gray-400' : 'text-gray-900'
        }`} 
      />
      <span 
        className={`text-[16px] font-normal leading-tight ${
          notIncluded ? 'text-gray-400 line-through' : 'text-gray-800'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
