import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
function Aside({ off, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = "auto";
      };
    }
  });
  return (
    <aside

      // transition={{ duration: 0.2 }}
      class={`fixed ${
        isOpen ? "flex" : "hidden"
      }  h-full top-0 left-0 pt-[54px] lg:flex  z-[60] flex-shrink-0 flex-col w-56 transition-width duration-75`}
      aria-label="Sidebar"
    >
      <div
        onClick={() => off(false)}
        className=" absolute flex lg:hidden inset-0 w-screen h-screen  bg-[#00000080]"
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"
      >
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex-1 px-3 bg-white divide-y space-y-1">
            <ul class=" flex-col flex gap-y-1.5">
              <li>
                <div class="relative lg:hidden flex  group shrink-0 max-w-xs">
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 group-hover:text-teal-600 transition-all h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="py-2 border transition-all  border-gray-200 outline-none text-gray-800 px-3 placeholder:text-gray-400 ps-10 pe-14 block w-full rounded-lg text-sm  shadow-sm "
                    placeholder="Search...."
                    data-hs-overlay="#hs-pro-dnsm"
                  />
                  <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3">
                    <span class="flex flex-wrap items-center gap-x-1 text-sm text-gray-400 dark:text-gray-600">
                      <kbd class="min-h-[30px] inline-flex justify-center items-center font-mono text-xs text-gray-400 rounded-md dark:text-gray-600">
                        <svg
                          class="flex-shrink-0 group-hover:text-teal-600 transition-all w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                        </svg>
                      </kbd>
                      +
                      <kbd class="min-h-[30px] group-hover:text-teal-600 transition-all inline-flex justify-center items-center font-mono text-xs text-gray-400 rounded-md dark:text-gray-600">
                        /
                      </kbd>
                    </span>
                  </div>
                </div>
              </li>
              < NavLink  to={'/'} >
                <div
                  href="#"
                  class="text-base bg-transparent  text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </div>
              </  NavLink >
              <NavLink to={'professeurs'}>
                <a
                  href="#"
                  target="_blank"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap capitalize">
                    Liste Professeur
                  </span>
                </a>
              </NavLink>
              <NavLink to={'filieres'}>
                <a
                  href="#"
                  target="_blank"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Liste Filiere</span>

                </a>
              </NavLink>
              <NavLink to={'modules'}>
                <a
                  href="#"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Liste Module</span>
                </a>
              </NavLink>
              <NavLink to={'students'}>
                <a
                  href="#"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Liste Etudient</span>
                </a>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
