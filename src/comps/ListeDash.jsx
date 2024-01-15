import React from "react";

function ListeDash() {
  return (
    <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              2,340
            </span>
            <h3 class="text-base capitalize  font-normal text-gray-500">
              Total d'etudients{" "}
            </h3>
          </div>

          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  pb-3 px-3 pt-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6 "
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              5,355
            </span>
            <h3 class="text-base capitalize font-normal text-gray-500">
              total de professeur{" "}
            </h3>
          </div>
          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  pb-3 px-3 pt-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6 "
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              385
            </span>
            <h3 class="text-base capitalize font-normal text-gray-500">
              Total de filieres
            </h3>
          </div>
          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  py-3 px-3  rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  class="flex-shrink-0 w-5 h-5"
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeDash;
