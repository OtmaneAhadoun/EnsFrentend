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
  console.log("fill", data);
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
    <div class="bg-whit relative  flex flex-col text-gray-700  shadow rounded-lg p-2 ">
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
      <div className=" flex justify-between  items-center">
        <h3 class="text-xl leading-none font-bold text-gray-900 my-4">
          Liste Module
        </h3>
        <button
          onClick={showAddForm}
          className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2.5 text-sm"
        >
          Ajouter Module
        </button>
      </div>
      <table class="min-w-full divide-y  divide-gray-200">
        {data.length != 0 && (
          <thead class="bg-gray-50 w-full text-black rounded-lg">
            <tr>
              <th
                scope="col"
                class="p-2  w-full  text-left capitalize text-sm font-medium   tracking-wider"
              >
                Module
              </th>
              <th
                scope="col"
                class="p-2  w-full text-left shrink-0   text-sm font-medium  capitalize tracking-wider"
              >
                Filiere
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-medium   capitalize tracking-wider"
              >
                Mass Horaire
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
              console.log(e);
              return (
                <tr className="even:bg-gray-50 text-gray-700 odd:bg-white">
                  <td
                    title={e.nom}
                    class="p-2 py-4   capitalize truncate text-[15px] w-full max-w-[140px] font-normal"
                  >
                    {e.nom}
                  </td>
                  <td
                    title={e.nomFiliere}
                    class="p-2 py-4   capitalize truncate text-[15px] w-full max-w-[140px] font-normal"
                  >
                    {e.nomFiliere}
                  </td>
                  <td
                    title={e.massHoraire }
                    class="p-2 py-4 capitalize   text-[15px] font-normal text-black"
                  >
                    {e.massHoraire}
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
  );
}

export default TableModule;
