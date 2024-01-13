import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function InitSession({ off, data }) {
  const [nestedData, setNestedData] = useState({ ...data });
  const [error, setError] = useState({ error: null, message: null });

  const getData = ({ target }) => {
    const { name, value } = target;
    setNestedData((v) => ({ ...v, [name]: value }));
  };
  const getDataTime = ({ target }) => {
    const { name, value } = target;
    setNestedData((v) => ({ ...v, session: { ...v.session, [name]: value } }));
  };
  const Submit = (e) => {
    e.preventDefault();
    if (
      !nestedData?.session &&
      !nestedData?.session?.end &&
      !nestedData?.session?.start &&
      !nestedData?.module &&
      !nestedData?.prof
    ) {
      setError({
        error: "empty",
        message: "S'il vous plaît remplissez les données.",
      });
      return;
    }
    if (
      nestedData?.session &&
      nestedData?.session?.end <= "17:00" &&
      nestedData?.session?.start >= "09:00" &&
      nestedData?.module &&
      nestedData?.prof
    ) {
      data(nestedData);
      off(false);
      return;
    }
    setError({ error: "invalid", message: "Les Doness Sont Invalide" });
  };
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  });
  return (
    <>
      <div
        onClick={() => {
          off(false);
        }}
        className="py-12 bg-[#00000080] fixed  z-50 inset-0"
      >
        <motion.form
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.2 }}
          method="post"
          onSubmit={Submit}
          onClick={(e) => e.stopPropagation()}
          className="container select-none top-8 absolute inset-0 overflow-hidden text-left mx-auto w-11/12 md:w-2/3 max-w-md"
        >
          <div className="relative  p-3  bg-white shadow-md rounded-lg border border-gray-400">
            {error.error && (
              <div
                class=" w-full relative mb-2 bg-white border rounded-xl shadow-sm "
                role="alert"
              >
                <div class="flex p-[15px]  items-center">
                  <div class="flex-shrink-0">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </div>
                  <div class="ms-3">
                    <p class="text-sm text-black font-semibold capitalize">
                      {error.message}
                    </p>
                  </div>
                  <span
                    onClick={() => setError(false)}
                    className=" absolute bottom-[9px] inline-flex items-center justify-center w-8 mt-auto right-2  h-8 hover:bg-gray-100 transition-all duration-100 rounded-full  cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            )}
            <label
              htmlFor="module"
              className="text-black  text-sm font-bold leading-tight tracking-normal"
            >
              Module
            </label>
            <input
              id="module"
              className="my-1 text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="..."
              name="module"
              onChange={getData}
            />
            <label
              htmlFor="prof"
              className="text-black text-sm font-bold leading-tight tracking-normal"
            >
              Professeur
            </label>
            <input
              id="prof"
              className="text-gray-600 my-1 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="..."
              name="prof"
              onChange={getData}
            />
            <label
              htmlFor="expiry"
              className="text-black  text-sm font-bold leading-tight tracking-normal"
            >
              Depart De La Sceance
            </label>
            <div className=" flex gap-2 py-2 items-center">
              <input
                id="expiry"
                className="text-gray-600 pr-2 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
                name="start"
                type="time"
                onChange={getDataTime}
              />
              <input
                id="expiry"
                className="text-gray-600 pr-2  focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
                name="end"
                type="time"
                onChange={getDataTime}
              />
            </div>
            <div className="flex mt-1 items-center justify-start w-full">
              <button className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 bg-teal-700 rounded-lg text-white px-4 py-2 text-sm">
                Ajouter
              </button>
              <span
                onClick={() => off(false)}
                className="focus:outline-none cursor-pointer focus:ring-2 font-semibold focus:ring-offset-2  focus:ring-gray-400 ml-2 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded-lg px-4 py-2 text-sm"
              >
                Cancel
              </span>
            </div>
          </div>
        </motion.form>
      </div>
    </>
  );
}

export default InitSession;
