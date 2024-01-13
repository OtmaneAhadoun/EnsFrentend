import React from "react";
import DateArea from "./DateArea";

function TimePicher() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="flex flex-col shadow mt-3 bg-white rounded-lg ">
      <div className=" flex">
        {daysOfWeek.map((day) => (
          <DateArea day={day}></DateArea>
        ))}
      </div>
      <div className=" flex justify-end items-center">
        <div class="inline-flex items-center">
          <label
            class="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox-3"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[35px] before:w-[35px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
              id="checkbox-3"
            />
            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
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
          <label
            class="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox-3"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[35px] before:w-[35px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
              id="checkbox-3"
            />
            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
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
        </div>
        <div class="hs-dropdown relative bg-white inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            class=" py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Filiere
            <svg
              class="hs-dropdown-open:rotate-180 w-4 h-4"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class=" transition-[opacity,margin]  bg-white rounded-lg duration w-36 absolute opacity-1 right-0 top-[107%] shadow p-1.5"
            aria-labelledby="hs-dropdown-default"
          >
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
              href="#"
            >
              Newsletter
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
              href="#"
            >
              Purchases
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
              href="#"
            >
              Downloads
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
        <button className="focus:outline-none m-1.5 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2.5 text-sm">
          Save Plan
        </button>
      </div>
    </div>
  );
}

export default TimePicher;
