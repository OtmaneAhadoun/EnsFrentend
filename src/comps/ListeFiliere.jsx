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
            Ajouter Filiere
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
                          <tr key={i}>
                            <td className="px-4 py-4 text-sm ">
                              <h4 className="text-gray-700 ">{e.nom}</h4>
                            </td>
                            <td className="px-4 py-4 text-sm ">
                              <p className="text-gray-500 ">{e.cycle}</p>
                            </td>
                            <td className="px-4 py-4 text-sm ">
                              <div>
                                <h4 className="text-gray-400">
                                  {new Date(e.created_at).toLocaleDateString()}
                                </h4>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm ">
                              <div className="flex items-center">
                                <img
                                  className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                  alt=""
                                />
                                <img
                                  className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
                                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                  alt=""
                                />
                                <img
                                  className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
                                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                  alt=""
                                />
                                <img
                                  className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full  shrink-0"
                                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                  alt=""
                                />
                                <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-teal-600 bg-teal-100 border-2 border-white rounded-full">
                                  +4
                                </p>
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

export default ListeFiliere;
