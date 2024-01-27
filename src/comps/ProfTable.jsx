import React, { useEffect, useState } from "react";
import AddProff from "../forms/proff/AddProff";
import { AnimatePresence } from "framer-motion";
import TableModule from "./TableModule";
import Maxios from "../assets/maxios";
import Load from "./Load";
import Toast from "./Toast";
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
                        {data.map((e) => {
                          return (
                            <tr className="border-b bg-white  last:border-b-0">
                              <td className="px-4 py-2 text-sm ">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                      className="w-[45px] h-[45px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col text-sm justify-start">
                                    <a className=" font-medium">
                                      {}
                                      {e.nom}
                                      {" " + e.prenom}
                                    </a>
                                    <p className=" text-gray-400 underline ">
                                      {e.email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-gray-600 text-sm  max-w-[250px] ">
                                {e.adresse}
                              </td>

                              <td className="px-4 py-4 text-gray-600 text-sm ">
                                2023-08-23
                              </td>
                              <td className="px-4  py-4 text-sm ">
                                <span>Tel:{e.num_telephone}</span>
                              </td>
                              <td className="px-4 py-6   ">
                                <div className="flex gap-1  text-sm items-center">
                                  <div className="inline capitalize h-full text-xs px-3 py-1  font-normal rounded-lg text-emerald-500 gap-x-2 bg-emerald-100/60 ">
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
                                </div>
                              </td>
                            </tr>
                          );
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
