import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
function Header({ openSide, user }) {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <nav class="bg-white pr-4 z-[70] flex items-center justify-between h-[55px] border-b border-gray-200 fixed w-full">
      <div class="px-3 py-1 lg:px-5 h-full lg:pl-3">
        <div class="flex items-center h-full justify-between">
          <div class="flex items-center h-full justify-start">
            <button
              onClick={() => openSide((v) => !v)}
              aria-expanded="true"
              aria-controls="sidebar"
              class="lg:hidden mr-4 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                class="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="/ens.um5"
              class="text-xl m-auto h-full font-bold flex items-center lg:ml-2.5"
            >
              <img
                src='./images/logo_2.png'
                class=" h-auto my-1 w-44 mr-2 -ml-6 "
                alt="Ecole Normale Supérieure"
              />
            </a>
          </div>
        </div>
      </div>

      <div class=" max-h-[44px] flex gap-3 relative items-center">
        <div class="relative lg:flex hidden group shrink-0 max-w-xs">
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
            placeholder="Recherche...."
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
        <button
          name="openProfiel"
          onClick={() => setShowProfile((v) => !v)}
          type="button"
          class="relative py-1 ps-1 pe-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  focus:outline-none"
        >
          <span class="inline-block pointer-events-none h-[2rem] w-[2rem]  rounded-lg overflow-hidden">
            <svg
              class="h-full pointer-events-none rounded-lg w-full text-gray-300"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.62854"
                y="0.359985"
                width="15"
                height="15"
                rx="7.5"
                fill="white"
              />
              <path
                d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                fill="currentColor"
              />
              <path
                d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <p
            class="text--800 pointer-events-none bg-gree text-sm max-w-[7.5rem] truncate w-16 "
            name="openProfiel"
          >
            {user.name ? user.name : "...."}
          </p>
          <svg
            onClick={() => setShowProfile((v) => !v)}
            class="hs-dropdown-open:rotate-180 pointer-events-none w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            name="openProfiel"
          >
            <path
              onClick={() => setShowProfile((v) => !v)}
              d="m6 9 6 6 6-6"
              name="openProfiel"
            />
          </svg>
          <AnimatePresence>
            {showProfile && <Profile off={setShowProfile}></Profile>}
          </AnimatePresence>
        </button>

        <div
          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
          aria-labelledby="hs-dropdown-custom-trigger"
        >
          <a
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            href="#"
          >
            Newsletter
          </a>
          <a
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            href="#"
          >
            Purchases
          </a>
          <a
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            href="#"
          >
            Downloads
          </a>
          <a
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            href="#"
          >
            Team Account
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
