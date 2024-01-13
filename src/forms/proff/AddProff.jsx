import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Maxios from "../../assets/maxios";
import Load from "../../comps/Load";
import audio from "../../assets/audio/success_bell-6776.mp3";
function AddProff({ setToast, off }) {
  const [data, setData] = useState({});
  const [seending, setSending] = useState(false);
  const play = useRef();
  const getData = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);

    const readyData = new FormData();
    readyData.append("nom", data.nom);
    readyData.append("prenom", data.prenom);
    readyData.append("email", data.email);
    readyData.append("num_telephone", data.num_telephone);
    readyData.append("adresse", data.adresse);
    readyData.append("image", data.image);

    try {
      setSending(true);
      await Maxios.post("/professeur", readyData);
      play.current.play();
      setToast(true);
      off(true);
    } catch (err) {
      setSending(false);
      console.log(err);
    }
  };

  const getFile = ({ target }) => {
    const blob = URL.createObjectURL(target.files[0]);
    setData((v) => ({ ...v, [target.name]: target.files[0], file: blob }));
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
      className="fixed w-full inset-0 z-50 bg-[#00000080]  h-screen"
    >
      <motion.form
        onSubmit={submitForm}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: -40 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute font-medium bg-white rounded-lg inset-0 h-fit m-auto max-w-md w-[98%] "
      >
        <div className=" overflow-y-auto gap-2 flex-col p-3 h-full relative flex ">
          <audio ref={play} src={audio}></audio>
          <div className=" flex gap-2 w-full">
            <div className="  h-fit flex justify-center items-center">
              <label
                title="ajouter image de le proffesseur"
                htmlFor="image"
                className=" relative overflow-hidden hover:text-teal-600 justify-center items-center text-teal-600 transition-all cursor-pointer border-teal-600 border-[3px] shrink-0 w-32 inline-flex h-32 border-dashed rounded-xl"
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
                  <img
                    src={data.file}
                    className="absolute object-cover w-full h-full"
                    alt=""
                  />
                )}
              </label>
              <input
                onChange={getFile}
                type="file"
                hidden
                name="image"
                id="image"
              />
            </div>
            <div className=" flex w-full flex-col gap-1">
              <input
                id="nom"
                name="nom"
                autoComplete="false"
                placeholder="Nom..."
                onChange={getData}
                className=" text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              />

              <input
                id="prenom"
                name="prenom"
                placeholder="Prenom..."
                autoComplete="false"
                onChange={getData}
                className=" text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              />
              <input
                id="num_telephone"
                name="num_telephone"
                autoComplete="false"
                placeholder="Numero Telephone..."
                onChange={getData}
                className=" text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <input
              name="email"
              id="email"
              placeholder="Email..."
              onChange={getData}
              className=" text-gray-600 focus:outline-none focus:border focus:border-teal-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
            />
            <textarea
              name="adresse"
              placeholder="Adresse..."
              onChange={getData}
              className=" text-gray-600 h-20 py-2 resize-none focus:outline-none focus:border focus:border-teal-700 font-normal w-full flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
            ></textarea>
          </div>

          <div className="   text-[14px]  flex justify-end w-full ">
            <button className="relative w-20 h-[38px] font-semibold p-2 px-4 bg-teal-600 hover:bg-teal-700 transition-all text-white rounded-lg">
              {seending ? <Load></Load> : "Ajouter"}
            </button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default AddProff;
