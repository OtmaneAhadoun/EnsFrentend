import React, { useEffect, useState } from "react";
import Maxios from "../assets/maxios";
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Load from "./Load";
function DropDown({
  setFiliere,
  setProf,
  setModule,
  route,
  nom,
  size,
  setFiliereInsc,
}) {
  const [open, setOpen] = useState();
  const [color, setColor] = useState("text-gray-400");
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({ nom });
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const { data: filiere } = await Maxios.get("/" + route);
        setData(filiere);
        setLoad(false);
      } catch (error) {
        console.log(error);
        setLoad(false);
      }
    })();
  }, [open]);
  return (
    <div class="scrollbar scrollbar-thumb-teal-600  grow relative bg-white inline-flex">
      <button
        onClick={() => setOpen((v) => !v)}
        id="hs-dropdown-default"
        type="button"
        class=" py-2.5 truncate  justify-between px-4 inline-flex w-full items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
      >
        <span
          className={`${
            nom === "Filiere"
              ? `w-full ${color} text-left font-normal`
              : "capitalize w-[150px] text-left truncate"
          }`}
        >
          {selected.nom} {nom === "Professeur" ? selected.prenom : ""}
        </span>

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
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            class={`min-h-[180px] z-50 max-h-44 scrollbar-thumb-rounded-2xl scrollbar-track-rounded-xl scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-gray-200 schro overflow-y-auto bg-white rounded-lg ${
              !size ? "w-52" : size
            } absolute opacity-1 text-gray-700 right-0 top-[107%] shadow p-1.5`}
          >
            {load ? (
              <Load />
            ) : data.length ? (
              data.map((e, i) => (
                <h1
                  key={i}
                  onClick={() => {
                    setColor("text-black");
                    setSelected(e);
                    setFiliere &&
                      setFiliere((v) => ({ ...v, ["idFiliere"]: e.id }));
                    setModule &&
                      setModule((v) => ({
                        ...v,
                        evening: { ...v.evening, module: e.nom },
                        morning: { ...v.morning, module: e.nom },
                      }));
                    setProf &&
                      setProf((v) => ({
                        ...v,
                        evening: { ...v.evening, prof: e.nom + " " + e.prenom },
                        morning: { ...v.morning, prof: e.nom + " " + e.prenom },
                      }));
                    setFiliereInsc &&
                      setFiliereInsc((v) => ({ ...v, ["idFiliere"]: e.id }));
                    setOpen(false);
                  }}
                  title={e.nom}
                  class="flex cursor-pointer  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                  href="#"
                >
                  {nom == "Professeur" ? (
                    <>
                      <div class="flex shrink-0">
                        <img
                          class="h-10 p-[2px] object-cover w-10 border-2 border-teal-600 rounded-xl"
                          src={
                            "http://localhost:8000/storage/images/" + e.image
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-0.5">
                        <span className=" w-full capitalize font-medium truncate">
                          {e.nom} {e.prenom}
                        </span>
                        <span className=" underline text-xs text-gray-400 w-full capitalize font-medium truncate">
                          {e.email}
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className=" w-full text-sm capitalize font-medium truncate">
                      {e.nom}
                    </span>
                  )}
                </h1>
              ))
            ) : (
              <h1 className=" absolute w-fit h-fit text-gray-600 inset-0 text-sm m-auto ">
                Aucune {nom} trouve..?
              </h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(DropDown);
