import React, { useEffect, useState } from "react";
import Load from "./Load";
import Maxios from "../assets/maxios";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import AddModule from "../forms/proff/AddModule";
import ModuleLine from "./ModuleLine";
function TableModule() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);
  const [LoadData, setLoadData] = useState(false);
  const [toast, setToast] = useState(false);
  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const { data: profs } = await Maxios.get("/module");
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
        <div className=" flex  flex-col py-2 overflow-hidden ">
          <button
            onClick={showAddForm}
            className="focus:outline-none mr-1 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2 self-end text-sm"
          >
            Ajouter un module{" "}
          </button>
          <AnimatePresence>
            {toast && <Toast message={"Module"} off={setToast}></Toast>}
            {show && (
              <AddModule
                done={setLoadData}
                setToast={setToast}
                off={showAddForm}
              ></AddModule>
            )}
          </AnimatePresence>

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
                            Nom de Module
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            nom De filiere
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right  "
                          >
                            masse horaire{" "}
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
                          <ModuleLine e={e} i={i}></ModuleLine>
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

export default TableModule;
