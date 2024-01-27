import React from "react";

function PreSelect({ data }) {
  return (
    <div className=" w-full overflow-hidden bg-white shadow rounded-lg  mt-4">
      <div className="bg-white p-3 rounded-lg">
        <div className="sm:flex items-center justify-between">
          <button className="relative capitalize h-10 font-semibold p-2 px-4 bg-teal-600 hover:bg-teal-700 transition-all text-white rounded-lg">
            Présélectionner{" "}
          </button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {data.map((e, i) => {
                return (
                  <tr
                    tabIndex={i}
                    className="focus:outline-none h-16 border border-gray-100 rounded-lg"
                  >
                    <td>
                      <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="checkbox-1"
                      >
                        <input
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[35px] before:w-[35px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                          id="checkbox-1"
                        />
                        <div class="pointer-events-none absolute top-2/4 -ml-[1.5px] left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <p className="text-base max-w-[200px] truncate font-medium leading-none text-gray-700 mr-2">
                          {e.nomFiliere}{" "}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                            stroke="#3B82F6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                            stroke="#3B82F6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </td>

                    <td className="pl-5">
                      <div className="flex items-center">
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
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                          />
                        </svg>

                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {e.count}
                        </p>
                      </div>
                    </td>

                    <td className="pl-2">
                      <div class="py-2 border  shrink-0  w-full border-gray-200 outline-none text-gray-800 px-2 placeholder:text-gray-400  rounded-lg text-sm  shadow-sm ">
                        <div className=" flex gap-1">
                          <span className=" inline-flex gap-2 rounded-full bg-teal-100 text-teal-800 uppercase p-1 px-2 items-center text-xs">
                            dts{" "}
                            <span className=" text-[11px] bg-white rounded-full px-2">
                              33%
                            </span>{" "}
                            <span className=" overflow-auto hover:bg-white rounded-full transition-all cursor-pointer">
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
                          </span>
                          <span className=" inline-flex gap-2 rounded-full bg-teal-100 text-teal-800 uppercase p-1 px-2 items-center text-xs">
                            bts{" "}
                            <span className=" text-[11px] bg-white rounded-full px-2">
                              33%
                            </span>{" "}
                            <span className=" overflow-auto hover:bg-white rounded-full transition-all cursor-pointer">
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
                          </span>
                          <span className=" inline-flex gap-2 rounded-full bg-teal-100 text-teal-800 uppercase p-1 px-2 items-center text-xs">
                            dut
                            <span className=" text-[11px] bg-white rounded-full px-2">
                              33%
                            </span>{" "}
                            <span className=" overflow-auto hover:bg-white rounded-full transition-all cursor-pointer">
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
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="pl-1">
                      <div>
                        <input
                          placeholder="Nombre De Perso..."
                          className=" text-sm border outline-none text-gray-600 py-2.5 shadow-sm rounded-lg px-2 w-[150px] "
                        />
                      </div>
                    </td>
                    <td>
                      <div className="relative px-5 pt-2">
                        <button
                          className="focus:ring-2 rounded-lg-md focus:outline-none"
                        >
                          <svg
                            className="dropbtn"
                            onclick="dropdownFunction(this)"
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                          <div
                            tabIndex={0}
                            className="focus:outline-none focus:text-teal-600 text-xs w-full hover:bg-teal-700 py-4 px-4 cursor-pointer hover:text-white"
                          >
                            <p>Edit</p>
                          </div>
                          <div
                            tabIndex={0}
                            className="focus:outline-none focus:text-teal-600 text-xs w-full hover:bg-teal-700 py-4 px-4 cursor-pointer hover:text-white"
                          >
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PreSelect;
