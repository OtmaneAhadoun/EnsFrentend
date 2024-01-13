import React, { useState } from "react";
import InitSession from "../forms/InitSession";
import { AnimatePresence } from "framer-motion";

function DateArea({ day }) {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  function compareTime(time1, time2) {
    const date1 = new Date(`2000-01-01T${time1}`);
    const date2 = new Date(`2000-01-01T${time2}`);
    console.log(time1, time2, date1 <= date2);
    return date1 <= date2;
  }
  function compareTimeTwo(time1, time2) {
    const date1 = new Date(`2000-01-01T${time1}`);
    const date2 = new Date(`2000-01-01T${time2}`);
    console.log(time1, time2, date1 <= date2);
    return date1 >= date2;
  }
  return (
    <div className=" flex  flex-col w-full">
      <div onClick={() => setOpen(true)} className="flex-1  text-center">
        <h1 className="text-[1rem] py-2 border-b  font-semibold text-center border-r">
          {day}
        </h1>
        <AnimatePresence>
          {open && <InitSession data={setData} off={setOpen}></InitSession>}
        </AnimatePresence>
        <div className="h-20 shrink-0 w-full hover:bg-gray-100 cursor-pointer transition-all text-sm  justify-center gap-1 flex flex-col border-r  text-white p-1 items-center  bg-white">
          {data?.session.start &&
            data?.session.end &&
            data?.module &&
            data?.prof &&
            compareTime(data?.session?.end, "12:00") &&
            compareTimeTwo(data?.session?.start, "09:00") && (
              <>
                <span class="items-center max-w-[160px] truncate capitalize text-center gap-x-1.5 py-1.5 px-3 rounded-lg w-full text-xs font-medium bg-teal-500 text-white">
                  {data?.module}
                </span>
                <span class="w-full items-center max-w-[160px] truncate text-center gap-x-1.5 py-1.5 px-3 text-xs font-medium bg-teal-100 text-teal-800  rounded-lg">
                  {data?.session.start}-{data?.session.end}
                </span>
              </>
            )}
        </div>
      </div>
      <div className="  py-1 flex items-center w-full gap-1 text-[12px] text-gray-500">
        <hr className=" grow" />
        12:00-13:00
        <hr className=" grow" />
      </div>
      <div
        onClick={() => setOpen(true)}
        className="flex-1 shrink-0   text-center"
      >
        <div className="h-20 w-full border-b hover:bg-gray-100 cursor-pointer transition-all  gap-1 flex flex-col border-r  text-white p-1 items-center  bg-white">
          {data?.session.start &&
            data?.session.end &&
            data?.module &&
            data?.prof &&
            compareTime(data?.session?.end, "17:00") &&
            compareTimeTwo(data?.session?.start, "13:00") && (
              <>
                <span class="items-center max-w-[160px] truncate capitalize text-center gap-x-1.5 py-1.5 px-3 rounded-lg w-full text-xs font-medium bg-teal-500 text-white">
                  {data?.module}
                </span>
                <span class="w-full items-center text-center max-w-[160px] truncate gap-x-1.5 py-1.5 px-3 text-xs font-medium bg-teal-100 text-teal-800  rounded-lg">
                  {data?.session.start}-{data?.session.end}
                </span>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default DateArea;
