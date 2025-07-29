import React, { useState } from "react";
import { FaRecycle } from "react-icons/fa";
import { motion } from "framer-motion";

const AppointmentSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
  });

  const steps = [
    { number: 1, label: "Service & Date" },
    { number: 2, label: "Time" },
    { number: 3, label: "Details" },
    { number: 4, label: "Done" },
  ];

  const Services = [
    { label: "Hair Cutting", value: "hair_cutting" },
    { label: "Facial", value: "facial" },
    { label: "Nail Care", value: "nail_care" },
    { label: "Massage", value: "massage" },
    { label: "Threading", value: "threading" },
  ];

  const getTodaysDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.service || !formData.date) {
      alert("Please select service and date");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <motion.div

  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }} 
  transition={{ duration: 1, ease: 'easeOut' }}

      className="bg-[#FFFCC8] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 items-start">

        {/* Image Section */}
        <div className="relative w-full">
          <img
            src="./AppoinmentSection.webp"
            alt="Relaxing"
            className="w-full h-auto object-cover rounded-xl"
          />

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 sm:left-10 sm:translate-x-0 bg-white border-4 border-[#F6526D] p-4 sm:p-6 rounded-xl shadow-xl w-[90%] sm:max-w-xs">
            <div style={{ fontFamily: 'niconne, cursive' }} className="text-lg sm:text-xl italic text-[#F6526D] mb-1">
              Time Schedule
            </div>
            <div className="text-black text-xl sm:text-3xl font-bold mb-2">Working Hours</div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur. Aenean sollicitudin, lorem quis bibendum auctor.
            </p>
            <div className="bg-gray-100 p-3 sm:p-4 rounded-xl space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-[#F6526D] font-semibold">Mon - Sat:</span>
                <span className="font-medium">10:00am - 08:00pm</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-[#F6526D] font-semibold">Sunday:</span>
                <span className="font-medium">11:00am - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm w-full">
          <div className="mb-6 sm:mb-10">
            <div style={{ fontFamily: 'niconne, cursive' }} className="text-[#F6526D] text-lg italic mb-1">Book Today</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Make An Appointment</h2>
          </div>

          {/* Progress Tabs */}
          <div className="flex mb-6 rounded-md overflow-hidden border border-black text-xs sm:text-sm">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex-1 py-2 px-2 text-center font-medium ${currentStep === step.number
                    ? "bg-[#F6526D] text-white"
                    : "bg-black text-white"
                  }`}
              >
                {step.number}. {step.label}
              </div>
            ))}
          </div>

          {/* Form Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-black mb-1">
                  Select Service *
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange("service", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6526D]"
                >
                  <option value="">Select Service</option>
                  {Services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-black mb-1">
                  Select Date *
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  min={getTodaysDate()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6526D]"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#F6526D] text-white font-medium py-3 rounded-full hover:bg-[#e5405f] transition flex items-center justify-center gap-2"
              >
                <FaRecycle />
                Continue
              </button>
            </div>
          )}

          {/* Placeholder for Step 2 */}
          {currentStep === 2 && (
            <div className="text-center text-gray-800 text-base font-medium py-10">
              Step 2: Time selection coming soon...
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentSection;
