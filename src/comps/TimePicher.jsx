import React, { useState } from "react";
import DateArea from "./DateArea";
import DropDown from "./DropDown";

function TimePicher() {
  const [checked, setCheked] = useState({ one: true, two: false });
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(checked);
  return (
    <div className="flex flex-col shadow mt-3 bg-white rounded-lg ">
      <div className=" flex w-full scrollbar-thumb-teal-600 scrollbar-track-gray-200 scrollbar-thin overflow-x-auto">
        {daysOfWeek.map((day) => (
          <DateArea day={day}></DateArea>
        ))}
      </div>
      <div className=" flex flex-wrap-reverse justify-end items-center">
        <div class="inline-flex items-center">
          <span class="inline-flex uppercase items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 ">
            Semestre 1
          </span>
          <label
            class="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox-1"
          >
            <input
              onClick={(e) => {
                if (checked.two) {
                  setCheked((v) => ({ ...v, one: !v.one, two: false }));
                }
              }}
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[35px] before:w-[35px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
              id="checkbox-1"
              checked={checked.one}
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
          <span class="inline-flex uppercase ml-2 items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 ">
            Semestre 2
          </span>
          <label
            class="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox-2"
          >
            <input
              type="checkbox"
              onClick={(e) => {
                if (checked.one) {
                  setCheked((v) => ({ ...v, one:false , two: !v.two }));
                }
              }}
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[35px] before:w-[35px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
              id="checkbox-2"
              checked={checked.two}
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

        <div className=" flex max-w-36 bg-black">
          <DropDown route="filiere" nom={'Filiere'}></DropDown>
        </div>
        <button className="focus:outline-none m-1.5 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-150 ease-in-out hover:bg-teal-700 bg-teal-600 rounded-lg text-white px-4 py-2.5 text-sm">
          Save Plan
        </button>
      </div>
    </div>
  );
}

export default TimePicher;
