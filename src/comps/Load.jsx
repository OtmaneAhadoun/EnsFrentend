import React from "react";
function Load({ rem }) {
  return (
    <div
      className={` ${
        rem ? "w-[2rem] h-[2rem]" : "w-7 h-7 "
      } border-t-[3px] absolute inset-0 m-auto border-t-[#eeee] border-teal-600 border-[3px] animate-spin rounded-full`}
    ></div>
  );
}

export default Load;
