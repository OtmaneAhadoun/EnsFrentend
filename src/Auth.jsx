import React, { useEffect, useState } from "react";
import Load from "./comps/Load";
import Maxios from "./assets/maxios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate(); // Get the navigate function
  const getData = ({ target }) => {
    const { name, value } = target;
    setData((oldValue) => ({ ...oldValue, [name]: value }));
  };
  (async () => {
    try {
      await Maxios.get("/user");
      navigate("/");
    } catch (error) {
        console.error("Error fetching data:", error);
        setIsLogged(false)
    }
  })();
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    await Maxios.get("http://localhost:8000/sanctum/csrf-cookie");
    try {
      const response = await Maxios.post("/login", data);
      navigate("/");
    } catch (error) {
      console.log("catch", error);
      setLoading(false);
    }
  };

  return (
    <>
      {!isLogged ? (
        
        <div className=" fixed inset-0 m-auto font-webFont flex flex-1 flex-col items-center justify-center pb-16 pt-12">
          <h1 className="sr-only">Log in to your Tailwind UI account</h1>

          <form onSubmit={submitForm} method="post" className="w-full max-w-sm">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                onChange={getData}
                className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={getData}
                className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
              />
            </div>
            <button
              type="submit"
              className="relative bg-teal-600  overflow-hidden max-h-11 h-full justify-center rounded-lg text-sm font-semibold inline-flex items-center   text-white hover:bg-teal-700 w-full"
            >
              {!Loading ? <span>Sign in to account</span> : <Load></Load>}
            </button>
          </form>
          <p className=" mt-6 block w-full max-w-sm ">
            <a href="/password/reset" className="text-sm hover:underline">
              Forgot password?
            </a>
          </p>
          <div class="relative mt-7 shrink-0 w-full max-w-sm">
            <div class=" text-sm w-full  h-fit gap-9 text-gray-900 flex items-center justify-between">
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
