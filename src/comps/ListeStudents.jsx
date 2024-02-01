import React, { useEffect, useState } from "react";
import Load from "./Load";
import Maxios from "../assets/maxios";

function ListeStudents() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  // const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const { data: candidat } = await Maxios.get("/candidats");
        console.log(candidat);
        setData(candidat);
        setLoad(false);
      } catch (error) {
        setLoad(false);
      }
    })();
  }, []);
  return (
    <section className=" py-3 w-full overflow-hidden min-h-[calc(100vh-170px)]  ">
      {load ? (
        <div className="min-h-[calc(100vh-170px)]">
          <Load></Load>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border  md:rounded-lg">
                  <table className="min-w-full  bg-white  divide-y accent-teal-600 divide-gray-200 ">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          <span>Code Massar</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          Date
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          Etudient
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          Diplome
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          Filiere
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 "
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200  ">
                      {data.map((e, i) => {
                        return (
                          <tr key={i}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 ">
                              <div className="inline-flex font-semibold items-center gap-x-3">
                                <span>#{e.code_massar}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500  ">
                              {e.dateNaissance}
                            </td>

                            <td className="px-4 py-4 text-sm text-gray-500  ">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-8 h-8 rounded-lg"
                                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                  alt=""
                                />
                                <div>
                                  <h2 className="text-sm font-medium text-gray-800  ">
                                    {e.nom} {e.prenom}
                                  </h2>
                                  <p className="text-xs font-normal text-gray-400 ">
                                    authurmelo@example.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm uppercase underline text-gray-700  ">
                              {e.diplome}
                            </td>

                            <td className="px-4 py-4 text-sm grow text-gray-500  ">
                              {e.idFiliere}
                            </td>
                            <td className="px-4 items-center flex gap-1 py-4 text-sm font-medium text-gray-700 ">
                              <div className="inline-flex truncate items-center px-3 py-1 rounded-lg gap-x-2 text-orange-500 bg-orange-100/60 ">
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 3L4.5 8.5L2 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h2 className="text-xs truncate font-normal capitalize">
                                  attende de validation
                                </h2>
                              </div>{" "}
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
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {data.length >= 1 ? (
            <div className="flex items-center justify-end gap-2 mt-3">
              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>previous</span>
              </a>
              {/* <div className="items-center hidden md:flex gap-x-3">
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-teal-500 rounded-md  bg-teal-100/60"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  ...
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  12
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  13
                </a>
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md  hover:bg-gray-100"
                >
                  14
                </a>
              </div> */}
              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100  "
              >
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          ) : (
            <h2 className=" py-5 w-full text-center mx-auto text-sm text-gray-600">
              Aucun étudiant trouvé !!!
            </h2>
          )}
        </>
      )}
    </section>
  );
}

export default ListeStudents;
