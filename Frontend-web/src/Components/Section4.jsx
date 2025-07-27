import React, { useState } from "react";
import { Plus } from "lucide-react";
import nailPolishImg from "/nailpolish.webp";
import detoxImg from "/detox-therapy.webp";
import nailcareImg from "/nailcare.webp";
import acrylicnailImg from "/acrylicnail.webp";
import vacuumsuctionImg from "/vacuumsuction.webp";
import perfectmanicureImg from "/perfectmanicure.webp";

const Section4 = () => {
  const [selectedService, setSelectedService] = useState("vacuum-suction");

  const services = [
    {
      id: "nail-polish",
      name: "Nail Polish",
      image:
        nailPolishImg,
      details: {
        title: "Professional Nail Polish",
        description:
          "Premium quality nail polish application with long-lasting finish",
        features: [
          "Color Consultation",
          "Base & Top Coat",
          "Hand Massage",
          "Cuticle Care",
        ],
        price: "$25",
      },
    },
    {
      id: "perfect-manicure",
      name: "Perfect Manicure",
      image:
        perfectmanicureImg,
      details: {
        title: "Perfect Manicure",
        description:
          "Complete manicure service for beautiful, healthy nails",
        features: [
          "Nail Shaping",
          "Cuticle Treatment",
          "Polish Application",
          "Hand Moisturizing",
        ],
        price: "$35",
      },
    },
    {
      id: "acrylic-nails",
      name: "Acrylic Nails",
      image:
        acrylicnailImg,
      details: {
        title: "Acrylic Nail Extensions",
        description: "Durable and beautiful acrylic nail extensions",
        features: [
          "Custom Length",
          "Shape Design",
          "Color Options",
          "Strengthening Treatment",
        ],
        price: "$65",
      },
    },
    {
      id: "nail-care",
      name: "Nail Care",
      image:
        nailcareImg,
      details: {
        title: "Comprehensive Nail Care",
        description: "Complete nail health and maintenance treatment",
        features: [
          "Nail Health Assessment",
          "Strengthening Treatment",
          "Cuticle Care",
          "Moisturizing Therapy",
        ],
        price: "$45",
      },
    },
    {
      id: "detox-therapy",
      name: "Detox Therapy Service",
      image:
        detoxImg,
      details: {
        title: "Detox Therapy Treatment",
        description: "Purifying detox therapy for complete body wellness",
        features: [
          "Body Detoxification",
          "Lymphatic Drainage",
          "Toxin Removal",
          "Wellness Consultation",
        ],
        price: "$120",
      },
    },
    {
      id: "vacuum-suction",
      name: "Vacuum Suction Therapy",
      image:
        vacuumsuctionImg,
      details: {
        title: "Vacuum Suction Therapy",
        description: "Advanced vacuum suction treatment for skin rejuvenation",
        features: [
          "French Fork Beard",
          "Ductail Beard",
          "Circle Beard",
          "Goatee Beard",
        ],
        price: "$149",
      },
    },
  ];

  const currentService = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFFCC8] to-pink-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-4xl font-semibold text-center mb-12">Quality Packages</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`cursor-pointer rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 ${
                selectedService === service.id
                  ? "border-[#F6526D] bg-white"
                  : "border-transparent bg-white/70 hover:border-[#D94760]"
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {currentService && (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {currentService.details.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {currentService.details.description}
            </p>
            <ul className="text-left space-y-2 mb-4">
              {currentService.details.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#F6526D]" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-xl font-bold text-[#F6526D]">
              {currentService.details.price}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section4;
