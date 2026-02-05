import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white z-50 shadow-xl p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button onClick={onClose} className="text-xl font-light">
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="mt-6 text-gray-500">
              <p>No items added yet (0)</p>
            </div>
          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
