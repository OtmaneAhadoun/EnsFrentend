import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Maxios from "../assets/maxios";

function Profile({off}) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    document.addEventListener("click", ({target}) =>{
      if(target.name!='openProfiel'){
        off(false) 
      }
    } );
    return () => {
      document.removeEventListener("click",() => off(false))
    };
  }, []);
  const LogOut = async () => {
    try {
      setIsLogin(true);
      await Maxios.post("/logout");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ y: -20, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      class=" absolute top-full right-0 border-t  duration w-[200px] bg-white shadow-md rounded-lg p-2 mt-1  "
    >
      <div class="py-2 first:pt-0 overflow-hidden font-medium last:pb-0">
        <a
          class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 "
          href="#"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          Newsletter
        </a>
        <a
          class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 "
          href="#"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
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
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          Purchases
        </a>
        <a
          class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 "
          href="#"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
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
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m8 17 4 4 4-4" />
          </svg>
          Downloads
        </a>
        <a
          class="flex  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 "
          href="#"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Team Account
        </a>
        <hr className=" my-1" />
        <button
          onClick={LogOut}
          class="flex w-full  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 "
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <span className=" truncate">
            {!isLogin ? "Deconexion Le Compte" : "En Deconexion..."}
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default Profile;
