import React, { useState, useEffect } from "react";

const ServiceCards = () => {
  const services = [
    { title: "Nail Polish", image: "/nailpolish.webp", price: "$25" },
    { title: "Perfect Manicure", image: "/perfectmanicure.webp", price: "$30" },
    { title: "Acrylic Nails", image: "/acrylicnail.webp", price: "$40" },
    { title: "Nail Care", image: "/nailcare.webp", price: "$20" },
    { title: "Detox Therapy Service", image: "/detox-therapy.webp", price: "$50" },
    { title: "Vacuum Suction Therapy", image: "/vacuumsuction.webp", price: "$45" },
    { title: "Deep Tissue Massage", image: "/deeptissue.webp", price: "$60" },
    { title: "Booking Payment Service", image: "/booking-payment-service.webp", price: "$15" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect if the device supports touch
  useEffect(() => {
    const checkTouch = () => setIsTouch(window.matchMedia("(hover: none)").matches);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  return (
    <div className="main">
      {/* Hero Section */}
      <div
        className="relative h-40 sm:h-48 md:h-72 flex items-center pl-6 sm:pl-12 bg-center bg-cover"
        style={{
          backgroundImage:
            'url(//dictate.webinane.com/wp-content/uploads/2025/01/slide-2-5.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative mx-20 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold">
            Service Style
          </h1>
          <p className="py-4 font-light text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center cursor-pointer 
                ${!isTouch ? "group" : ""}`}
                onClick={() =>
                  isTouch ? setActiveIndex(isActive ? null : index) : null
                }
              >
                {/* Circle Image */}
                <div
                  className={`relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md transition-all duration-500 ease-in-out
                  ${isTouch && isActive ? "border-[10px] border-[#F6526D]" : "border-[10px] border-transparent"}
                  ${!isTouch ? "group-hover:border-[#F6526D]" : ""}`}
                >
                  <img  
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Price Badge */}
                <span
                  className={`absolute -top-4 right-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#F6526D] text-white text-sm font-bold shadow-lg transition-all duration-500 ease-in-out
                  ${isTouch && isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-75"}
                  ${!isTouch ? "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100" : ""}`}
                >
                  {service.price}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg sm:text-2xl font-bold text-black">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
