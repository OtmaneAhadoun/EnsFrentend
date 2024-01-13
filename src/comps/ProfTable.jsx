import React, { useState } from "react";
import AddProff from "../forms/proff/AddProff";
import { AnimatePresence } from "framer-motion";
function ProfTable({ setToast }) {
  const [show, setShow] = useState(false);
  const showAddForm = () => {
    setShow((oldValue) => !oldValue);
  };
  return (
    <div class="grid grid-cols-1 grow  2xl:grid-cols-2  xl:gap-4">
      <AnimatePresence>
        {show && <AddProff setToast={setToast} off={showAddForm}></AddProff>}
      </AnimatePresence>
      <div class="bg-white shadow rounded-lg p-3  h-full">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-bold leading-none text-gray-900">
            All Professeur
          </h3>
          <div className="flex gap-2">
            <button
              href="#"
              class="text-sm font-medium text-teal-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2.5 px-3"
            >
              View all
            </button>
            <button
              onClick={showAddForm}
              href="#"
              className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2 text-sm"
            >
              Ajouter Professeur
            </button>
          </div>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="17727a767e7b57607e7973646372653974787a"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                  $320
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                  $3467
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Michael Gough
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="57323a363e3b17203e3933242332257934383a"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                  $67
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Thomes Lean
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                  $2367
                </div>
              </div>
            </li>
            <li class="pt-3 sm:pt-4 pb-0">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Lana Byrd
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                    >
                      [email&#160;protected]
                    </a>
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                  $367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-3 ">
        <div className=" flex justify-between items-center">
          <h3 class="text-xl leading-none font-bold text-gray-900 my-4">
            Module
          </h3>
          <button className="focus:outline-none font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2.5 text-sm">
            Ajouter Module
          </button>
        </div>
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Module
                </th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  filiere
                </th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  mass horaire
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Referral
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  5,649
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">30%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-teal-600 h-2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Referral
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  4,025
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">24%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-orange-300 h-2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Direct
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  3,105
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">18%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-teal-400 h-2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Social
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  1251
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">12%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-pink-600 h-2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Other
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  734
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">9%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-indigo-600 h-2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                  Email
                </th>
                <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                  456
                </td>
                <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">7%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div class="bg-purple-500 h-2 rounded-sm"></div>
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

export default ProfTable;
