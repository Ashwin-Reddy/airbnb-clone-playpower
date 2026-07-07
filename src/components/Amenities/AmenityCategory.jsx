import AmenityRow from './AmenityRow';

export default function AmenityCategory({ category, items }) {
  return (
    <div className="border-b border-[#EBEBEB] pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
      <h4 className="text-[18px] font-semibold text-gray-950 mb-5">
        {category}
      </h4>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <AmenityRow
            key={index}
            icon={item.icon}
            label={item.label}
            notIncluded={item.notIncluded}
          />
        ))}
      </div>
    </div>
  );
}
