import React from "react";

function PreSelect() {
  return (
    <div className=" w-full overflow-hidden bg-white shadow rounded-lg  mt-4">
      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

      <div className="bg-white p-3 rounded-lg">
        <div className="sm:flex items-center justify-between">
          {/* <div className="flex items-center">
            <a
              className="rounded-lg-full focus:outline-none focus:ring-2  focus:bg-teal-50 focus:ring-teal-800"
              href=" javascript:void(0)"
            >
              <div className="py-2 px-8 bg-teal-100 text-teal-700 rounded-lg-full">
                <p>All</p>
              </div>
            </a>
            <a
              className="rounded-lg-full focus:outline-none focus:ring-2 focus:bg-teal-50 focus:ring-teal-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-teal-700 hover:bg-teal-100 rounded-lg-full ">
                <p>Done</p>
              </div>
            </a>
            <a
              className="rounded-lg-full focus:outline-none focus:ring-2 focus:bg-teal-50 focus:ring-teal-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-teal-700 hover:bg-teal-100 rounded-lg-full ">
                <p>Pending</p>
              </div>
            </a>
          </div> */}
          <button className="relative capitalize h-10 font-semibold p-2 px-4 bg-teal-600 hover:bg-teal-700 transition-all text-white rounded-lg">
            pre select
          </button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr
                tabIndex={0}
                className="focus:outline-none h-16 border border-gray-100 rounded-lg"
              >
                <td>
                  <div className="ml-3">
                    <div className="bg-gray-200 rounded-lg-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        placeholder="checkbox"
                        type="checkbox"
                        className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden bg-teal-700 text-white rounded-lg-sm">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Marketing Keynote Presentation
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
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 5H16.6667"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 10H16.6667"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 15H16.6667"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16669 5V5.00667"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16669 10V10.0067"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16669 15V15.0067"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 9.1665V9.17484"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66669 9.1665V9.17484"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3333 9.1665V9.17484"
                        stroke="#52525B"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      23
                    </p>
                  </div>
                </td>

                <td className="pl-5">
                  <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded-lg">
                    Due today at 18:00
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td>
                  <div className="relative px-5 pt-2">
                    <button
                      className="focus:ring-2 rounded-lg-md focus:outline-none"
                      onclick="dropdownFunction(this)"
                      role="button"
                      aria-label="option"
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PreSelect;
