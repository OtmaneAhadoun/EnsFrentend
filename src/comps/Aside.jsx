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
              <NavLink to={"/"}>
                <div
                  href="#"
                  class="text-base bg-transparent  text-gray-600 font-medium rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>

                  <a class="ml-3">Tableau de bord</a>
                </div>
              </NavLink>
              <NavLink to={"professeurs"}>
                <a
                  href="#"
                  target="_blank"
                  class="text-base text-gray-600 font-medium rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>

                  <span class="ml-3 flex-1 whitespace-nowrap capitalize">
                    Liste Professeurs
                  </span>
                </a>
              </NavLink>
              <NavLink to={"filieres"}>
                <a
                  href="#"
                  target="_blank"
                  class="text-base text-gray-600 font-medium rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>

                  <span class="ml-3 flex-1 whitespace-nowrap">
                    Liste Filieres
                  </span>
                </a>
              </NavLink>
              <NavLink to={"modules"}>
                <a
                  href="#"
                  class="text-base text-gray-600 font-medium rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>

                  <span class="ml-3 flex-1 whitespace-nowrap">
                    Liste Modules
                  </span>
                </a>
              </NavLink>
              <NavLink to={"students"}>
                <a
                  href="#"
                  class="text-base text-gray-600 font-medium rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>

                  <span class="ml-3 flex-1 truncate capitalize">
                    étudiants inscrits
                  </span>
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
