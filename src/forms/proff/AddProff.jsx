import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AddProff({ off }) {
  const [data, setData] = useState({});
  const getData = ({ target }) => {
    const { name, value } = target;
  };
  const getFile = ({ target }) => {
    const blob = URL.createObjectURL(target.files[0]);
    setData(v=>({...v,[target.name]:blob}))
  };
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  });
  return (
    <motion.div
      onClick={off}
      className="fixed w-full inset-0 z-50 bg-[#00000080] p-2 h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: -40 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute font-medium bg-white rounded-lg inset-0 m-auto max-w-sm w-[98%] h-[calc(100vh-25px)]"
      >
        <div className=" overflow-y-auto h-full relative flex flex-col">
          <div className="overflow-y-auto p-2 flex flex-col">
            <div className=" w-full flex justify-center items-center">
              <label
                title="ajouter image de le proffesseur"
                htmlFor="img"
                className=" relative overflow-hidden mt-1 hover:text-teal-600 justify-center items-center text-teal-600 transition-all cursor-pointer border-teal-600 border-2 shrink-0 w-24 inline-flex h-20 border-dashed rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                {data.file && (
                  <img src={data.file} className="absolute object-cover w-full h-full" alt="" />
                )}
              </label>
              <input onChange={getFile} type="file" hidden name="file" id="img" />
            </div>
            <div className=" w-full">
              <label
                htmlFor="email"
                className="block  leading-6 text-sm text-gray-900"
              >
                Nom
              </label>
              <input
                id="email"
                name="email"
                autoComplete="false"
                placeholder="Nom..."
                // onChange={getData}
                className="mt-[3px] text-sm appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm: focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>
            <div className=" mt-1.5 w-full">
              <label
                htmlFor="email"
                className="block  leading-6 text-sm text-gray-900"
              >
                Prenom
              </label>
              <input
                id="email"
                name="email"
                placeholder="Prenom..."
                autoComplete="false"
                // onChange={getData}
                className="mt-[3px] appearance-none text-sm text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>

            <div className="mt-1.5">
              <label
                htmlFor="email"
                className="block leading-6 text-sm text-gray-900"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                placeholder="Email..."
                // onChange={getData}
                className="mt-[3px] appearance-none text-sm text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm: focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>
            <div className="mt-1.5">
              <label
                htmlFor="email"
                className="block leading-6 text-sm text-gray-900"
              >
                Numero telepHone
              </label>
              <input
                name="email"
                id="email"
                placeholder="Numero telephone..."
                // onChange={getData}
                className="mt-[3px] appearance-none text-sm text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm: focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>
            <div className=" text-sm mt-1.5">
              <label htmlFor="" className="">
                Addresse
              </label>
              <textarea
                name=""
                placeholder="Addresse..."
                id=""
                className="mt-[3px] p-2 h-28 text-sm resize-none appearance-none text-slate-900 bg-white rounded-md block w-full px-3 shadow-sm sm: focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              ></textarea>
            </div>
          </div>
          <div className=" absolute  text-[14px] bottom-0 left-0 p-2 flex justify-end w-full ">
            <button className=" font-semibold w-fit p-2 px-4 bg-teal-600 hover:bg-teal-700 transition-all text-white rounded-lg">
              Ajouter
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AddProff;
