
export default function RoomSection({ id, title, amenities, images, onImageClick }) {
  // Helper to chunk the images array into groups of 3
  const chunkImages = (arr) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += 3) {
      chunks.push(arr.slice(i, i + 3));
    }
    return chunks;
  };

  const imageChunks = chunkImages(images);

  return (
    <section 
      id={id} 
      className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 pt-12 pb-12 border-b border-gray-200 last:border-b-0 w-full select-none text-left"
    >
      {/* Left Column: Room info */}
      <div className="flex flex-col md:sticky md:top-[190px] h-fit pr-4">
        <h3 className="text-[22px] md:text-[24px] font-bold text-gray-950 leading-tight">
          {title}
        </h3>
        
        {amenities && (
          <p className="text-[14px] text-gray-500 font-normal mt-2 leading-relaxed">
            {amenities}
          </p>
        )}
      </div>

      {/* Right Column: Room images gallery */}
      <div className="flex flex-col space-y-4 w-full">
        {imageChunks.map((chunk, chunkIdx) => {
          if (chunk.length === 1) {
            // Render 1 large image
            return (
              <div 
                key={chunkIdx} 
                className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
              >
                <img
                  src={chunk[0]}
                  alt={`${title} - ${chunkIdx * 3 + 1}`}
                  onClick={() => onImageClick(chunk[0])}
                  className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                />
              </div>
            );
          } else if (chunk.length === 2) {
            // Render 2 side-by-side images
            return (
              <div key={chunkIdx} className="grid grid-cols-2 gap-4 w-full">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <img
                    src={chunk[0]}
                    alt={`${title} - ${chunkIdx * 3 + 1}`}
                    onClick={() => onImageClick(chunk[0])}
                    className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                  />
                </div>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <img
                    src={chunk[1]}
                    alt={`${title} - ${chunkIdx * 3 + 2}`}
                    onClick={() => onImageClick(chunk[1])}
                    className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                  />
                </div>
              </div>
            );
          } else {
            // Render 1 large on top, 2 smaller side-by-side below
            return (
              <div key={chunkIdx} className="flex flex-col space-y-4 w-full">
                <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <img
                    src={chunk[0]}
                    alt={`${title} - ${chunkIdx * 3 + 1}`}
                    onClick={() => onImageClick(chunk[0])}
                    className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                    <img
                      src={chunk[1]}
                      alt={`${title} - ${chunkIdx * 3 + 2}`}
                      onClick={() => onImageClick(chunk[1])}
                      className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                    <img
                      src={chunk[2]}
                      alt={`${title} - ${chunkIdx * 3 + 3}`}
                      onClick={() => onImageClick(chunk[2])}
                      className="w-full h-full object-cover hover:brightness-95 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
