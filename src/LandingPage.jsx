import React, { useEffect, useState } from "react";
import Load from "./comps/Load";
import { Outlet } from "react-router-dom";
import Content from "./Content";

function LandingPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Import the CSS file when the component mounts
    import("./style.css")
      .then(() => {
        console.log("Landing page CSS loaded");
      })
      .catch((error) => {
        console.error("Failed to load landing page CSS", error);
      })
      .finally(() => {
        // Set loading state to false when the CSS file is loaded or fails to load
        setLoading(false);
      });

    // Clean up function to unload the CSS file when the component unmounts
    return () => {
      console.log("Landing page CSS unloaded");
    };
  }, []);

  return (
    <div className=" min-h-[100vh-140px]">
      {loading ? (
        <Load rem={true}></Load>
      ) : (
        <div className="font-webFont min-h-screen text-[62.5%]">

          <Content></Content>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
