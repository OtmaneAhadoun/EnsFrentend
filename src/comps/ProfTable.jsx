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
    <div class=" flex flex-col gap-2 grow xl:gap-4">
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
      <div class="bg-white flex flex-col shadow rounded-lg  p-3 grow ">
        <div class="flex items-center justify-between ">
          <h3 class="text-xl font-bold leading-none text-gray-900">
            All Professeur
          </h3>
          <div className="flex gap-2">
            <button
              href="#"
              class="text-sm font-medium text-teal-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2.5 px-3"
            >
              View all
            </button>
            <button
              onClick={showAddForm}
              href="#"
              className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2 text-sm"
            >
              Ajouter Professeur
            </button>
          </div>
        </div>
        <div class=" relative  h-full pt-2 ">
          <ul class="divide-y grow h-full min-h-[64px] divide-gray-200">
            {load ? (
              <Load></Load>
            ) : data.length ? (
              data.map((e) => {
                return (
                  <li class=" py-2 ">
                    <div class="flex items-center space-x-2.5">
                      <div class="flex shrink-0">
                        <img
                          class="h-12 p-[2px] object-cover w-12 border-2 border-teal-600 rounded-xl"
                          src={
                            "http://localhost:8000/storage/images/" + e.image
                          }
                          alt="Neil image"
                        />
                      </div>
                      <div class="flex-1 ">
                        <p class="text-sm capitalize font-medium text-gray-900 truncate">
                          {e.nom + " " + e.prenom}
                        </p>
                        <p class="text-sm underline text-gray-500 truncate">
                          {e.email}
                        </p>
                      </div>
                      <button class="inline-flex text-sm items-center capitalize font-medium hover:bg-gray-100 rounded-lg px-3 p-2 text-gray-900">
                        view
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <h1 className="text-center h-16 inline-flex items-center w-full justify-center my-auto text-sm capitalize">
                Aucun professeur trouvé...??
              </h1>
            )}
          </ul>
        </div>
      </div>
      <TableModule></TableModule>
    </div>
  );
}

export default ProfTable;
