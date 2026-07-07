import avatar1 from '../../assets/images/reviewers/1.png';
import avatar2 from '../../assets/images/reviewers/2.png';
import avatar3 from '../../assets/images/reviewers/3.png';
import avatar4 from '../../assets/images/reviewers/4.png';
import avatar5 from '../../assets/images/reviewers/5.png';
import avatar6 from '../../assets/images/reviewers/6.png';

export default function CoHostGrid() {
  const column1 = [
    { name: "Sharath", avatar: avatar1 },
    { name: "Simran", avatar: avatar2 },
    { name: "Shruti", avatar: null, letter: "S", bg: "bg-[#FADBD8] text-[#78281F]" },
  ];

  const column2 = [
    { name: "Aman Dev Pahwa", avatar: avatar4 },
    { name: "Pallavi", avatar: avatar5 },
    { name: "Amisha", avatar: null, letter: "A", bg: "bg-[#D4E6F1] text-[#1B4F72]" },
  ];

  const column3 = [
    { name: "Maria Karen Priyanka", avatar: avatar6 },
    { name: "Sanyukta", avatar: avatar3 },
  ];

  const renderCoHostRow = (coHost, idx) => (
    <div key={idx} className="flex items-center space-x-3 h-8">
      {coHost.avatar ? (
        <img 
          src={coHost.avatar} 
          alt={coHost.name} 
          className="w-6 h-6 rounded-full object-cover bg-gray-100 shrink-0"
        />
      ) : (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 ${coHost.bg}`}>
          {coHost.letter}
        </div>
      )}
      <span className="text-[14px] text-gray-800 font-medium truncate">
        {coHost.name}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col text-left select-none w-full">
      <h3 className="text-[16px] font-bold text-gray-950 mb-4 tracking-tight">
        Co-Hosts
      </h3>

      {/* 3-Column horizontal alignment matching screenshot */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          {column1.map((co, idx) => renderCoHostRow(co, idx))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-4">
          {column2.map((co, idx) => renderCoHostRow(co, idx))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-4">
          {column3.map((co, idx) => renderCoHostRow(co, idx))}
        </div>
      </div>
    </div>
  );
}
