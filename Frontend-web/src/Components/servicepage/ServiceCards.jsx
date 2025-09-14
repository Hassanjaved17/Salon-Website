import React from 'react'

const ServiceCards = () => {
    const services = [
        { title: "Nail Polish", image: "/nailpolish.webp" },
        { title: "Perfect Manicure", image: "/perfectmanicure.webp" },
        { title: "Acrylic Nails", image: "/acrylicnail.webp" },
        { title: "Nail Care", image: "/nailcare.webp" },
        { title: "Detox Therapy Service", image: "/detox-therapy.webp" },
        { title: "Vacuum Suction Therapy", image: "/vacuumsuction.webp" },
        { title: "Deep Tissue Massage", image: "/deeptissue.webp" },
        { title: "Booking Payment Service ", image: "/booking-payment-service.webp" },
    ];

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
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Text Content */}
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
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Circle Image */}
                            <div className="w-70 h-70 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-lg sm:text-2xl font-bold text-black">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;
