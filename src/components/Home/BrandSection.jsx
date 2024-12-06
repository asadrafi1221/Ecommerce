import React from "react";

function BrandSection() {
  const LaptopData1 = [
    {
      name: "Dell",
      src: "pakimage.png",
    },
    {
      name: "Apple",
      src: "pakimage.png",
    },
    {
      name: "Lenovo",
      src: "pakimage.png",
    },
  ];

  return (
    <div className="flex items-center justify-center">
    <div className="p-10 xl:max-w-[80vw] xl:w-[80vw] w-full">
      <h1 className="text-3xl capitalize mb-10 border-b-2 border-black py-5 text-center">
        Best Headphones and Accessories
      </h1>
      <div className="flex flex-col gap-8 items-center justify-center">
        {/* First Row */}
        <div className="flex flex-col md:flex-row md:gap-8 w-[95%] md:w-full items-center">
          {LaptopData1.map((e, index) => (
            <div
              key={index}
              className="w-full overflow-hidden text-white bg-red-900 max-w-[500px] 
              md:bg-white md:shadow-lg md:shadow-gray-700 md:h-44 md:rounded-xl 
              flex flex-col items-center justify-center text-center transition-transform 
              hover:scale-105"
            >
             
              <img
                src={"headphone.jpg"} 
                alt={e.name}
                className="h-full w-full  object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row md:gap-8 w-[95%] md:w-full items-center">
          {LaptopData1.map((e, index) => (
            <div
              key={index}
              className="w-full overflow-hidden text-white bg-red-900 max-w-[500px] 
              md:bg-white md:shadow-lg md:shadow-gray-700 md:h-44 md:rounded-xl 
              flex flex-col items-center justify-center text-center transition-transform 
              hover:scale-105"
            >
              
              <img
               src={"headphone.jpg"} 
               alt={e.name}
               className="h-full w-full  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default BrandSection;
