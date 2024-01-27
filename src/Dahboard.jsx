import React, { useEffect, useState } from "react";
import Maxios from "./assets/maxios";
import { Outlet, useNavigate } from "react-router-dom";
import Load from "./comps/Load";
import Header from "./comps/Header";
import Aside from "./comps/Aside";
import ProfTable from "./comps/ProfTable";
import Footer from "./comps/Footer";
import Toast from "./comps/Toast";
import { AnimatePresence } from "framer-motion";
import ListeFiliere from "./comps/ListeFiliere";
import ListeDash from "./comps/ListeDash";
import ListeStudents from "./comps/ListeStudents";
import PreSelect from "./comps/PreSelect";
import TimePicher from "./comps/TimePicher";
function Dahboard() {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [openSide, setOpenSide] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  useEffect(() => {
    (async () => {
      try {
        if (!user) {
          const { data } = await Maxios.get("/user");
          console.log(data);
          setUser(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login");
      }
    })();
  }, []);
  return (
    <div className=" w-full scrollbar-thin scrollbar-thumb-teal-600  font-webFont min-h-screen">
      {Loading ? (
        <Load></Load>
      ) : (
        <>
          <Header user={user} openSide={setOpenSide}></Header>
          <div class="flex overflow-hidden bg-white pt-11">
            <Aside off={setOpenSide} isOpen={openSide}></Aside>
            {/* <div
              class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div> */}
            <div
              id="main-content"
              class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-56"
            >
              <main>
                <div class="p-3">
                  <Outlet />

                  {/* <ListeDash></ListeDash>
                  <TimePicher></TimePicher>
                  <PreSelect /> */}

                  {/* <ProfTable></ProfTable> */}
                </div>
              </main>
              {/* <Footer></Footer> */}
              <p class="text-center text-sm text-gray-500 my-10">
                &copy; 2024-2024 École Normale Supérieure. Tous droits réservés.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dahboard;
