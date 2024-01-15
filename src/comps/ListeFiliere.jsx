import React, { useEffect, useState } from "react";
import Maxios from "../assets/maxios";
import Load from "./Load";
import AddFiliere from "../forms/proff/AddFiliere";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";

function ListeFiliere() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [loadData, setLoadData] = useState(true);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true)
      try {
        const { data: filiere } = await Maxios.get("/filiere");
        setData(filiere);
        setLoad(false);
      } catch (error) {
        setLoad(false);
      }
    })();
    console.log(data);
  }, [loadData]);
  return (
    <div class="bg-white shadow  mt-4 overflow-hidden rounded-lg p-3  grow  ">
      <AnimatePresence>
        {toast && <Toast message={"filiere"} off={setToast}></Toast>}

        {open && (
          <AddFiliere
            setToast={setToast}
            done={setLoadData}
            off={setOpen}
          ></AddFiliere>
        )}
      </AnimatePresence>
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-black">Liste Filiere</h3>
        </div>
        <div class="flex items-center gap-2">
          <a
            href="#"
            class="text-sm font-medium text-teal-600 hover:bg-gray-100 rounded-lg p-2.5"
          >
            View all
          </a>
          <button
            onClick={() => setOpen(true)}
            className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2.5 text-sm"
          >
            Ajouter Filiere
          </button>
        </div>
      </div>
      <div class="flex flex-col h-full mt-4">
        <div class="overflow-x-auto rounded-lg">
          <div class="align-middle inline-block relative min-w-full">
            <div class="shadow overflow-hidden  sm:rounded-lg">
              <table class="min-w-full divide-y  divide-gray-200">
                {data.length != 0 && (
                  <thead class="bg-gray-50 w-full text-black rounded-lg">
                    <tr>
                      <th
                        scope="col"
                        class="p-2    text-left capitalize w-full text-sm font-medium   tracking-wider"
                      >
                        Nom Filiere
                      </th>
                      <th
                        scope="col"
                        class="p-2   text-left shrink-0  w-full  text-sm font-medium  capitalize tracking-wider"
                      >
                        Cycle
                      </th>
                      <th
                        scope="col"
                        class="p-2 text-left text-sm font-medium  w-full  capitalize tracking-wider"
                      >
                        Annee
                      </th>
                    </tr>
                  </thead>
                )}
                <tbody class="bg-white h-full  ">
                  {load ? (
                    <div className=" my-44">
                      <Load></Load>
                    </div>
                  ) : data.length ? (
                    data.map((e) => {
                      return (
                        <tr className="even:bg-gray-50 text-gray-700 odd:bg-white">
                          <td
                            title={e.nom}
                            class="p-2 py-4  w-full  capitalize  text-[14px] font-normal"
                          >
                            {e.nom}
                          </td>
                          <td
                            title={e.cycle}
                            class="px-2 py-4 w-full min-w-[150px]  capitalize   text-[14px] "
                          >
                            {e.cycle}
                          </td>
                          <td
                            title={e.annee + "ans"}
                            class="p-2 py-4 capitalize  min-w-[120px] shrink-0  text-[14px] font-normal "
                          >
                            {e.annee}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <h1 className="text-center h-[140px]  inline-flex items-center w-full justify-center my-auto text-sm capitalize">
                      Aucun Filiere trouvé...??
                    </h1>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeFiliere;
