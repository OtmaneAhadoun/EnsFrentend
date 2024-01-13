import React, { useEffect, useState } from "react";
import Maxios from "../assets/maxios";
import { AnimatePresence, motion } from "framer-motion";
import Load from "./Load";
function DropDown() {
  const [open, setOpen] = useState();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data: filiere } = await Maxios.get("/filiere");
        setData(filiere);
        setLoad(false);
      } catch (error) {
        console.log(error);
        setLoad(false);
      }
    })();
  },[]);
  return (
    <div class="hs-dropdown relative bg-white inline-flex">
      <button
        onClick={() => setOpen((v) => !v)}
        id="hs-dropdown-default"
        type="button"
        class=" py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
      >
        Filiere
        <svg
          class="hs-dropdown-open:rotate-180 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-20,opacity:0}} transition={{duration:.2}}
            class=" min-h-[180px] max-h-44 overflow-y-auto transition-[opacity,margin]  bg-white rounded-lg duration w-48 absolute opacity-1 right-0 top-[107%] shadow p-1.5"
            aria-labelledby="hs-dropdown-default"
          >
            {load ? (
              <Load />
            ) : data.length ? (
              data.map((e) => (
                <h1
                  title={e.nom}
                  class="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                  href="#"
                >
                  <span className=" w-full truncate">{e.nom}</span>
                </h1>
              ))
            ) : (
              <h1 className=" absolute w-fit h-fit text-gray-600 inset-0 text-sm m-auto ">
                Aucune filiere trouve..?
              </h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropDown;
