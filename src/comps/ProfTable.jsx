import React, { useEffect, useState } from "react";
import AddProff from "../forms/proff/AddProff";
import { AnimatePresence } from "framer-motion";
import TableModule from "./TableModule";
import Maxios from "../assets/maxios";
import Load from "./Load";
import Toast from "./Toast";
import ProfLine from "./ProfLine";
function ProfTable() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);
  const [LoadData, setLoadData] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const { data: profs } = await Maxios.get("/professeur");
        setData(profs);
        setLoad(false);
      } catch (error) {
        setLoad(false);
      }
    })();
  }, [LoadData]);
  const showAddForm = () => {
    setShow((oldValue) => !oldValue);
  };
  return (
    <>
      {load ? (
        <div className="min-h-[calc(100vh-170px)]">
          <Load></Load>
        </div>
      ) : (
        <div class=" flex flex-col min-h-[calc(100vh-170px)] overflow-hidden ">
          <button
            onClick={showAddForm}
            className="focus:outline-none mr-1 mt-2 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2 self-end text-sm"
          >
            Ajouter un professeur
          </button>
          <AnimatePresence>
            {toast && <Toast message={"Professeur"} off={setToast}></Toast>}
            {show && (
              <AddProff
                done={setLoadData}
                setToast={setToast}
                off={showAddForm}
              ></AddProff>
            )}
          </AnimatePresence>
          <section className=" mt-2">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className=" capitalize border-b text-gray-800 bg-white ">
                        <tr className="font-medium text-[0.95rem] capitalize">
                          <th className="px-4  py-3.5 text-sm font-medium text-left rtl:text-right  ">
                            nom et prenom
                          </th>

                          <th className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  ">
                            adresse
                          </th>
                          <th className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  ">
                            Année de joindre
                          </th>
                          <th className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  ">
                            contact{" "}
                          </th>
                          <th className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  ">
                            operation
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((e, i) => {
                          return <ProfLine e={e} i={i}></ProfLine>;
                        })}
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

export default ProfTable;
