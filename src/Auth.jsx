import React, { useEffect, useState } from "react";
import Load from "./comps/Load";
import Maxios from "./assets/maxios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [error, setError] = useState({ One: false, Two: false });
  const [unauth, setUnauth] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  const getData = ({ target }) => {
    const { name, value } = target;
    if (name == "email") {
      setError((v) => ({ ...v, One: false }));
    } else {
      setError((v) => ({ ...v, Two: false }));
    }
    setData((oldValue) => ({ ...oldValue, [name]: value }));
  };
  (async () => {
    try {
      await Maxios.get("/user");
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLogged(false);
    }
  })();
  const submitForm = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError({ One: true, Two: true });
      return;
    }
    setLoading(true);
    await Maxios.get("http://localhost:8000/sanctum/csrf-cookie");
    try {
      await Maxios.post("/login", data);
      navigate("/");
    } catch (error) {
      console.log("catch", error);
      setError({ One: true, Two: true });
      setUnauth(true);
      setLoading(false);
      console.log(unauth);
    }
  };

  return (
    <>
      {!isLogged ? (
        <div className=" bg-white fixed inset-0 text-black m-auto font-webFont flex flex-1 flex-col items-center justify-center pb-16 pt-12">
          <form
            onSubmit={submitForm}
            method="post"
            className="w-full relative max-w-[310px]"
          >
            {unauth && (
              <div
                class="max-w-xs absolute -top-14 w-full bg-white border rounded-xl shadow-sm "
                role="alert"
              >
                <div class="flex p-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </div>
                  <div class="ms-3">
                    <p class="text-sm text-gray-700 font-semibold capitalize">
                      Email or password Incorecct
                    </p>
                  </div>
                  <span onClick={()=>setUnauth(false)} className="absolute bottom-[10px] inline-flex items-center justify-center w-8 mt-auto right-2  h-8 hover:bg-gray-100 transition-all duration-100 rounded-full  cursor-pointer">
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            )}

            <div className="mb-1">
              <label
                htmlFor="email"
                className="block mb-1 capitalize text-sm font-semibold leading-6 text-black"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                onChange={getData}
                className={
                  "appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 " +
                  (error.One ? "ring-2 ring-red-400" : "") +
                  " focus:ring-teal-500 ring-1 ring-slate-200"
                }
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block mb-1 capitalize text-sm font-semibold leading-6 text-black"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={getData}
                className={
                  "appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 " +
                  (error.Two ? "ring-2 ring-red-400" : "") +
                  " focus:ring-teal-500 ring-1 ring-slate-200"
                }
              />
            </div>
            <button
              type="submit"
              className="relative bg-teal-600  overflow-hidden max-h-11 h-full justify-center rounded-lg text-sm font-semibold inline-flex items-center   text-white hover:bg-teal-700 w-full"
            >
              {!Loading ? <span>Sign in to account</span> : <Load></Load>}
            </button>
          </form>
          <p className=" mt-6 block w-full max-w-[310px] ">
            <a href="/password/reset" className="text-sm hover:underline">
              Forgot password?
            </a>
          </p>
          <div class="relative mt-7 shrink-0 w-full max-w-[310px]">
            <div class=" text-sm w-full  h-fit  text-black flex items-center justify-between">
              <p class="text-left">Don't have an account?</p>
              <a
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                href="/all-access"
              >
                <span>
                  Get access <span aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Load></Load>
      )}
    </>
  );
};

export default Auth;
