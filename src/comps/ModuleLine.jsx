import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Actions from "./Actions";

function ModuleLine({ e, i }) {
  const [open, setOpen] = useState(false);

  return (
    <tr key={i}>
      <td className="px-4 py-4 text-sm ">
        <h4 className="text-gray-700 max-w-[280px] ">{e.nom}</h4>
      </td>
      <td className="px-4 py-4 text-sm ">
        <p className="text-gray-500 ">{e.nomFiliere}</p>
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex items-center">
          <span className="mr-2">{e.massHoraire}h</span>
          <div className="relative w-full">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: `${e.massHoraire}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 flex gap-1  text-sm items-center ">
        <div className="inline capitalize text-xs px-3 py-1  font-normal rounded-lg text-emerald-500 gap-x-2 bg-emerald-100/60 ">
          Status Activee
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          name={"open" + i}
          className="px-1 cursor-pointer relative py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100"
        >
          <AnimatePresence>
            {open && <Actions status={"Activer"} i={i} off={setOpen} />}
          </AnimatePresence>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            name="open"
            className="w-6 pointer-events-none  h-6"
            onClick={() => setOpen((v) => !v)}
          >
            <path
              name="open"
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

export default ModuleLine;
