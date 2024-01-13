import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Maxios from "../../assets/maxios";
import audio from "../../assets/audio/success_bell-6776.mp3";
import Load from "../../comps/Load";

function AddFiliere({ done,off,setToast }) {
  const [data, setData] = useState({});
  const [error, setError] = useState({ error: null, message: null });
  const [seending, setSending] = useState(false);
  const play = useRef();

  const getData = ({ target }) => {
    const { name, value } = target;
    setData((v) => ({ ...v, [name]: value }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (!data.annee || !data.cycle || !data.nom) {
      setError({
        error: "empty",
        message: "S'il vous plaît remplissez les données.",
      });
      return;
    }
    setSending(true);
    try {
      await Maxios.post("/filiere", data);
      play.current.play()
      setToast(true)
      off(false);
      done(v=>!v)
    } catch (error) {
      console.log(error);
      setSending(false);
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
            <audio ref={play} src={audio}></audio>

            <label
              htmlFor="nom"
              className="text-black  text-sm font-bold leading-tight tracking-normal"
            >
              Filiere
            </label>
            <input
              id="nom"
              className="my-1 text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="..."
              name="nom"
              onChange={getData}
            />
            <div className=" flex w-full gap-2">
              <div className=" w-full">
                <label
                  htmlFor="prof"
                  className="text-black my-1 text-sm font-bold leading-tight tracking-normal"
                >
                  Cycle
                </label>
                <input
                  id="cycle"
                  className="text-gray-600 my-1 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
                  placeholder="..."
                  name="cycle"
                  onChange={getData}
                />
              </div>
              <div>
                <label
                  htmlFor="annee"
                  className="text-black my-1 text-sm font-bold leading-tight tracking-normal"
                >
                  Nombre d'annee
                </label>
                <input
                  id="annee"
                  className="text-gray-600 my-1 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
                  placeholder="..."
                  name="annee"
                  onChange={getData}
                  type="number"
                />
              </div>
            </div>
            <div className="flex mt-2 items-center justify-start w-full">
              <button className="focus:outline-none relative h-10 w-20 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 bg-teal-700 rounded-lg text-white px-4 py-2 text-sm">
                {seending?<Load/>:'Ajouter'}
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

export default AddFiliere;
