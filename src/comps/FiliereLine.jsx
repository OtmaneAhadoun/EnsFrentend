import React, { useState } from "react";
import Actions from "./Actions";
import { AnimatePresence } from "framer-motion";

function FiliereLine({ e ,i}) {
  const [open, setOpen] = useState(false);
  return (
    <tr>
      <td className="px-4 py-4 text-sm ">
        <h4 className="text-gray-700 ">{e.nom}</h4>
      </td>
      <td className="px-4 py-4 text-sm ">
        <p className="text-gray-500 ">{e.cycle}</p>
      </td>
      <td className="px-4 py-4 text-sm ">
        <div>
          <h4 className="text-gray-400">
            {new Date(e.created_at).toLocaleDateString()}
          </h4>
        </div>
      </td>
      <td className="px-4 py-4 text-sm ">
        <div className="flex items-center">
          <img
            className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <img
            className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <img
            className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
            alt=""
          />
          <img
            className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-teal-600 bg-teal-100 border-2 border-white rounded-full">
            +4
          </p>
        </div>
      </td>

      <td className="px-4 py-4 flex gap-1  text-sm items-center ">
        <div className="inline capitalize text-xs px-3 py-1  font-normal rounded-lg text-emerald-500 gap-x-2 bg-emerald-100/60 ">
          Status Activee
        </div>
        <button
          onClick={() => setOpen((v) => !v)} name={"open"+i}
          className="px-1 cursor-pointer relative py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100"
        >
          <AnimatePresence>{open && <Actions i={i} off={setOpen} />}</AnimatePresence>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor" name="open"
            className="w-6 pointer-events-none  h-6" onClick={() => setOpen((v) => !v)}
          >
            <path name="open"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default FiliereLine;
