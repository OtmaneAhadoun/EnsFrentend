import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Actions from "./Actions";

function ProfLine({ e, i }) {
  const [open, setOpen] = useState(false);

  return (
    <tr className="border-b bg-white  last:border-b-0">
      <td className="px-4 py-2 text-sm ">
        <div className="flex items-center">
          <div className="relative inline-block shrink-0 rounded-2xl me-3">
            <img
              src="https://www.jobat.be//-/media/jobat/jobat-be/articles/professor.png?mw=906&hash=7F88C3DFEB3C6CAD2FEADE26B0A2AEA4"
              className="w-[45px] h-[45px] bg-contain inline-block shrink-0 rounded-2xl"
              alt=""
            />
          </div>
          <div className="flex flex-col text-sm justify-start">
            <a className=" font-medium">
              {}
              {e.nom}
              {" " + e.prenom}
            </a>
            <p className=" text-gray-400 underline ">{e.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-gray-600 text-sm  max-w-[250px] ">
        {e.adresse}
      </td>

      <td className="px-4 py-4 text-gray-600 text-sm ">2023-08-23</td>
      <td className="px-4  py-4 text-sm ">
        <span>Tel:{e.num_telephone}</span>
      </td>
      <td className="px-4 py-6   ">
        <div className="flex gap-1  text-sm items-center">
          <div className="inline capitalize h-full text-xs px-3 py-1  font-normal rounded-lg text-emerald-500 gap-x-2 bg-emerald-100/60 ">
            Status Activee
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            name={"open" + i}
            className="px-1 cursor-pointer relative py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100"
          >
            <AnimatePresence>
              {open && <Actions i={i} off={setOpen} />}
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
        </div>
      </td>
    </tr>
  );
}

export default ProfLine;
