import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Popup = ({ title, image, details, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#f0fdf4] text-[#1e293b] p-6 rounded-xl w-[90%] max-w-4xl relative overflow-hidden shadow-2xl border border-[#16a34a]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#dcfce7] transition-colors duration-300 group"
          >
            <XMarkIcon className="w-6 h-6 text-[#16a34a] group-hover:text-[#15803d]" />
          </button>

          <h2 className="text-2xl font-bold mb-4 text-[#16a34a]">{title}</h2>

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {image && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-full md:w-1/3"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex-1 space-y-4"
            >
              <div className="prose max-w-none">
                <p className="text-[#4b5563] leading-relaxed">{details}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
