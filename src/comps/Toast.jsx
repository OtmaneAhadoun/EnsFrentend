import React, { useEffect } from "react";
import { motion } from "framer-motion";
function Toast({ off, success, error, text }) {
  useEffect(() => {
    setTimeout(() => {
      off(false);
    }, 3000);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, x: -100 }}
      class="max-w-xs fixed z-[100] top-2 left-2 bg-white border border-gray-200 rounded-lg shadow-lg  dark:border-gray-200"
      role="alert"
    >
      <div class="flex p-4">
        <div class="flex-shrink-0">
          <svg
            class="flex-shrink-0 h-4 w-4 text-teal-600 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div class="ms-3">
          <p class="text-sm text-gray-700 font-semibold capitalize">Proffeseur added succesfully</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Toast;
