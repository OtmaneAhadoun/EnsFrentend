import React, { useEffect, useState } from "react";
import Load from "./comps/Load";
import logo from "./assets/logo_2.png";
import DropDown from "./comps/DropDown";
import { useNavigate } from "react-router-dom";
import Maxios from "./assets/maxios";
const MyFormComponent = () => {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    code_massar: "",
    cin: "",
    dateNaissance: "",
    university: "",
    diplome: "",
    noteGeneral: "",
    idFiliere: "",
  });
  const formatDateString = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toISOString().split("T")[0]; // Format as "YYYY-MM-DD"
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Format the date string if the input field is for the date of birth
    const formattedValue =
      name === "dateNaissance" ? formatDateString(value) : value;

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };
  const handleImg = ({ target }) => {
    if (target.files[0]) {
      const blob = URL.createObjectURL(target.files[0]);
      setFormData((v) => ({ ...v, [target.name]: target.files[0], img: blob }));
    }
  };
  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();
    if (
      formData.nom &&
      formData.prenom &&
      formData.code_massar &&
      formData.cin &&
      formData.dateNaissance &&
      formData.university &&
      formData.diplome &&
      formData.noteGeneral &&
      formData.idFiliere
    ) {
      try {
        setSending(true);
        await Maxios.post("/inscription", formData);
        setToast(true);
        setSending(false);
      } catch (error) {
        console.log(error);
        setSending(false);
        setError(true);
        setSending(false);
      }
    } else {
      setError(true);
      setSending(false);
    }
  };

  return (
    <div className=" relative flex gap-2 flex-col h-screen w-full font-webFont ">
      {toast && (
        <div className="flex absolute w-full z-10  min-h-screen items-center justify-center bg-gray-100">
          <div className="rounded-lg bg-gray-50 px-16 py-14">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-200 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
              Vous êtes bien inscrit(e) !!!
            </h3>
            <p className="w-[400px] mx-auto text-center  font-normal text-gray-600">
              La convocation arrivera dans votre boîte mail. Restez à l'écoute !
            </p>
            <a
              href="/ens.um5"
              className="mx-auto flex gap-2 w-fit capitalize mt-10 block rounded-xl border-4 border-transparent bg-teal-400 px-6 py-3 text-center text-base font-medium text-teal-100 outline-8 hover:outline hover:duration-300"
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
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Retour à la page principale
            </a>
          </div>
        </div>
      )}
      <a href="/ens.um5">
        <img
          src={logo}
          className="  lg:absolute left-3 top-3 w-44 h-20 "
          alt=""
        />
      </a>

      <form
        onSubmit={handleSubmit}
        className=" flex w-full p-2 flex-col m-auto max-w-md "
      >
        {" "}
        {error && (
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
                <p class="text-sm text-black font-medium capitalize">
                  Veuillez remplir tous les champs.
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
        <div className=" flex w-full gap-2">
          <label
            htmlFor="img"
            className=" rounded-lg text-teal-500 relative shrink-0 cursor-pointer hover:border-teal-400 transition-all hover:text-teal-400 w-[40%] border-[3px] border-teal-500 border-dashed"
          >
            {formData.img ? (
              <img src={formData.img} className=" rounded-lg w-full h-full" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6  inset-0 absolute m-auto "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            )}

            <input
              onChange={handleImg}
              id="img"
              type="file"
              className=" hidden"
            />
          </label>
          <div className=" grow flex shrink-0 flex-col gap-">
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="Nom"
            />

            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="Prénom"
            />
            <input
              type="text"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
              className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
              placeholder="CIN"
            />
          </div>
        </div>
        <input
          type="text"
          name="code_massar"
          value={formData.code_massar}
          onChange={handleChange}
          className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
          placeholder="Code Massar"
        />
        <input
          type="date"
          name="dateNaissance"
          value={formData.dateNaissance}
          onChange={handleChange}
          placeholder="Date de Naissance"
          className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
        />
        <div className="my-1 flex flex-col grow">
          <DropDown
            size={"w-full"}
            route={"filiere"}
            nom={"Filiere"}
            setFiliereInsc={setFormData}
          ></DropDown>
        </div>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          placeholder="Université"
          className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
        />
        <input
          type="text"
          name="diplome"
          value={formData.diplome}
          onChange={handleChange}
          placeholder="Diplôme"
          className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
        />
        <div className=" flex gap-2">
          <input
            type="text"
            name="noteGeneral"
            // value={formData.noteGeneral}

            placeholder="Note Examen finale"
            className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
          />
          <input
            type="text"
            name="noteGeneral"
            value={formData.noteGeneral}
            onChange={handleChange}
            placeholder="Note Générale"
            className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
          />
        </div>
        {/* <input
          type="text"
          name="idFiliere"
          value={formData.idFiliere}
          onChange={handleChange}
          placeholder="Filière"
          className="my-1 text-black focus:outline-none focus:border focus:border-teal-400 font-normal w-full h-11 flex items-center pl-3 text-sm border-gray-300 rounded-lg border"
        /> */}
        <button className="focus:outline-none mt-1 h-11 w-32 self-end text-sm relative py-3 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition duration-150 ease-in-out hover:bg-teal-500 bg-teal-400 rounded-lg text-white px-4">
          {sending ? <Load></Load> : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default MyFormComponent;
