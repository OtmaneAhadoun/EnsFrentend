import React from "react";

function ListeDash({ data }) {
  return (
    <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4  ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {data.inscription}
            </span>
            <h3 class="text-base capitalize  font-normal text-gray-500">
              Total d'étudiants{" "}
            </h3>
          </div>

          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  pb-3 px-3 pt-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 flex-shrink-0 mt-2 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4  ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {data.professeurs}
            </span>
            <h3 class="text-base capitalize font-normal text-gray-500">
              Total des professeurs{" "}
            </h3>
          </div>
          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  pb-3 px-3 pt-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 flex-shrink-0 mt-2 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4  ">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {data.filieres}
            </span>
            <h3 class="text-base capitalize font-normal text-gray-500">
              Total des filières{" "}
            </h3>
          </div>
          <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <div className=" p-1 bg-teal-50 rounded-full">
              <span class="inline-flex  items-center  py-3 px-3  rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 flex-shrink-0 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
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
