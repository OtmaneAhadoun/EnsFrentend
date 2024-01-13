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
    <div class="bg-white relative flex flex-col  shadow rounded-lg p-2 ">
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
      <div className=" min-h-[64px]  relative ">
        {data.length != 0 && (
          <div className="w-full bg-black">
            <div className="flex border-b justify-between w-full">
              <div className="px-4 bg-gray-50 text-black w-full py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0">
                Module
              </div>
              <div className="px-4 bg-gray-50 text-black w-full py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0">
                filiere
              </div>
              <div className="px-4 truncate w-[160px] bg-gray-50 text-black py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0">
                masse horaire
              </div>
            </div>
          </div>
        )}
        {load ? (
          <Load />
        ) : data.length ? (
          data.map((item, index) => (
            <div key={index} className="w-full">
              <div className="w-full bg-transparent">
                <div className="flex text-sm justify-between w-full">
                  <div className="px-4 text-black w-full py-3 text-sm text-left capitalize border-l-0 border-r-0">
                    {item.nom}{" "}
                  </div>
                  <div className="px-4 text-black w-full py-3 text-sm text-left capitalize border-l-0 border-r-0">
                    {item.idFiliere}{" "}
                  </div>
                  <div className="px-4 truncate w-[160px] text-black py-3 text-sm text-left capitalize border-l-0 border-r-0">
                    {item.massHoraire}{" "}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center h-16 inline-flex items-center w-full justify-center my-auto text-sm capitalize">
            Aucun Module trouvé...??
          </h1>
        )}
      </div>
    </div>
  );
}

export default TableModule;
