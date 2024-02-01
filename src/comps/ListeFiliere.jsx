import React, { useEffect, useState } from "react";
import Maxios from "../assets/maxios";
import Load from "./Load";
import AddFiliere from "../forms/proff/AddFiliere";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import FiliereLine from "./FiliereLine";

function ListeFiliere() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [loadData, setLoadData] = useState(true);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
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
    <>
      {load ? (
        <div className="min-h-[calc(100vh-170px)]">
          <Load></Load>
        </div>
      ) : (
        <div class=" py-2 overflow-hidden rounded-lg flex flex-col   min-h-[calc(100vh-170px)]  grow  ">
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
          <button
            onClick={() => setOpen(true)}
            className="focus:outline-none mr-1 self-end   font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2 text-sm"
          >
            Ajouter une filière
          </button>
          <section className=" mt-2">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className=" capitalize text-gray-800 bg-white ">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            Nom de la Filiere
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            Cycle De Formation
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 capitalize text-sm font-medium text-left rtl:text-right  "
                          >
                            Date de creation
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            Etudients
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            Operations
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200  ">
                        {data.map((e, i) => (
                          <FiliereLine e={e} i={i} key={i}/>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ListeFiliere;
