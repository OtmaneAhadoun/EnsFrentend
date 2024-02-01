import React, { useEffect } from "react";
import { motion } from "framer-motion";
function Actions({off,i}) {
  useEffect(() => {
    document.addEventListener("click", ({ target }) => {
    
      if (target.name !== "open"+i) {
        off(false);
      }
    });
    return () => {
      document.removeEventListener("click", () => off(false));
    };
  }, []);
  return (
    <motion.div onClick={(e)=>e.stopPropagation()}
      initial={{ opacity: 0, y: -10 }}
      exit={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-40 z-10 absolute right-[36px] bottom-[-12px] border rounded-lg shadow bg-white"
    >
      <ul className="capitalize flex-auto p-1 flex-col gap-1">
        <li className="w-full text-left p-2 hover:bg-gray-100 rounded-lg pt-1 px-2 flex items-center text-sm text-gray-600 hover:text-black transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 mr-2 text-green-500 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Activer
        </li>
        <li className="w-full text-left p-2 hover:bg-gray-100 rounded-lg pt-1 px-2 flex items-center text-sm text-gray-600 hover:text-black transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          Suspendre
        </li>
        <li className="w-full text-left p-2 hover:bg-gray-100 rounded-lg pt-1 px-2 flex items-center text-sm text-gray-600 hover:text-black transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          Supprimer
        </li>
      </ul>
    </motion.div>
  );
}

export default Actions;
