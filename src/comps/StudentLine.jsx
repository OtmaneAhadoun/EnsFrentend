import React, { useState } from "react";
import Actions from "./Actions";
import { AnimatePresence } from "framer-motion";

function StudentLine({ e, i }) {
  const [open, setOpen] = useState(false);
  return (
    <tr key={i}>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 ">
        <div className="inline-flex font-semibold items-center gap-x-3">
          <span>#{e.code_massar}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  ">{e.dateNaissance}</td>

      <td className="px-4 py-4 text-sm text-gray-500  ">
        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-8 h-8 rounded-lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <div>
            <h2 className="text-sm font-medium text-gray-800  ">
              {e.nom} {e.prenom}
            </h2>
            <p className="text-xs font-normal text-gray-400 ">
              authurmelo@example.com
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm uppercase underline text-gray-700  ">
        {e.diplome}
      </td>

      <td className="px-4 py-4 text-sm grow text-gray-500  ">{e.idFiliere}</td>
      <td className="px-4 items-center flex gap-1 py-4 text-sm font-medium text-gray-700 ">
        <div className="inline-flex truncate items-center px-3 py-1 rounded-lg gap-x-2 text-orange-500 bg-orange-100/60 ">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-xs truncate font-normal capitalize">
            attende de validation
          </h2>
        </div>{" "}
        <button
          onClick={() => setOpen((v) => !v)}
          name={"open" + i}
          className="px-1 cursor-pointer relative py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100"
        >
          <AnimatePresence>
            {open && <Actions i={i} status={'attende de validation'} off={setOpen} />}
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

export default StudentLine;
