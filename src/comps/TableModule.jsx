import React, { useEffect, useState } from "react";
import Load from "./Load";
import Maxios from "../assets/maxios";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import AddModule from "../forms/proff/AddModule";
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
                          <tr key={i}>
                            <td className="px-4 py-4 text-sm ">
                              <h4 className="text-gray-700 max-w-[280px] ">
                                {e.nom}
                              </h4>
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
                              <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
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
