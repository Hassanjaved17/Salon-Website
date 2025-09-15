import React, { useState } from "react";

const ServiceCards = () => {
  const services = [
    { title: "Nail Polish", image: "/nailpolish.webp", price: "$20" },
    { title: "Perfect Manicure", image: "/perfectmanicure.webp", price: "$35" },
    { title: "Acrylic Nails", image: "/acrylicnail.webp", price: "$50" },
    { title: "Nail Care", image: "/nailcare.webp", price: "$25" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    // Toggle active card
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cards py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
            onClick={() => handleTap(index)} // For mobile tap
          >
            {/* Circle wrapper with hover + tap effect */}
            <div
              className={`relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden transition-all duration-500 cursor-pointer
              ${activeIndex === index ? "ring-8 ring-pink-500" : ""}
              hover:ring-8 hover:ring-pink-500`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* Price Badge */}
              <div
                className={`absolute -top-4 -right-4 bg-pink-500 text-white px-3 py-1 rounded-full shadow-md text-sm font-bold 
                transform transition-all duration-500
                ${activeIndex === index ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                group-hover:scale-100 group-hover:opacity-100`}
              >
                {service.price}
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg sm:text-2xl font-bold text-black">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
