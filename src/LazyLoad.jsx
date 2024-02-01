import React from "react";

function LazyLoad() {
  return (
    <div>
      <div>
        <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div class="bg-white shadow rounded-lg p-4  ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div className=" w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className=" w-36 h-6 mt-1 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                <div className=" bg-gray-200 animate-pulse p-1  h-14 w-14 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg p-4  ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div className=" w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className=" w-36 h-6 mt-1 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                <div className=" bg-gray-200 animate-pulse p-1  h-14 w-14 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg p-4  ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div className=" w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className=" w-36 h-6 mt-1 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              <div class="ml-5 w-0  inline-flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                <div className=" bg-gray-200 animate-pulse p-1  h-14 w-14 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col  pt-3 px-1 bg-white rounded-lg shadow mt-3">
        <div className=" w-full flex px-8 gap-16">
          {Array.from({ length: 6 }).map((e) => {
            return (
              <div className=" w-full rounded-lg h-6 bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>
        <div className=" w-full mt-3 flex gap-1">
          {Array.from({ length: 6 }).map((e) => {
            return (
              <div className=" w-full rounded-lg h-[87px] bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>
        <div className=" w-full mt-1 flex  gap-16 px-8">
          {Array.from({ length: 6 }).map((e) => {
            return (
              <div className=" w-full rounded-lg h-2 bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>
        <div className=" w-full mt-1 flex gap-1">
          {Array.from({ length: 6 }).map((e) => {
            return (
              <div className=" w-full rounded-lg h-[87px] bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>
        <div className=" flex w-full gap-2 justify-end ">
          <div className=" h-10 flex my-1 justify-center gap-2  items-center">
            <div className=" bg-gray-200 rounded-lg h-7 w-24"></div>
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
          </div>
          <div className=" h-10 flex my-1 justify-center gap-2  items-center">
            <div className=" bg-gray-200 rounded-lg h-7 w-24"></div>
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
          </div>
          <div className=" h-10 my-1 w-44 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className=" h-10 my-1 w-44 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      </div>
      <div className=" w-full my-3 flex-col flex p-3 gap-3 bg-white rounded-lg shadow">
        <div className=" w-48 bg-gray-200 h-10 rounded-lg animate-pulse"></div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className=" w-full p-3 ">
          <div className=" w-full items-center flex gap-2">
            <div className=" bg-gray-200 rounded-lg h-5 w-5"></div>
            <div className=" w-64 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-10 ml-4 h-7 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="  grow  ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-40 ml-4 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className=" w-7 ml-4 h-3 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LazyLoad;
