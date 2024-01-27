import React, { useEffect, useState } from "react";
import ListeDash from "./comps/ListeDash";
import TimePicher from "./comps/TimePicher";
import PreSelect from "./comps/PreSelect";
import Maxios from "./assets/maxios";
import Load from "./comps/Load";
import LazyLoad from "./LazyLoad";

function Home() {
  const [data, setData] = useState([]);
  const [dataFiliere, setDataFiliere] = useState([]);
  const [load, setLoad] = useState(true);
  const [LoadData, setLoadData] = useState(false);
  console.log(dataFiliere);
  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const { data: response } = await Maxios.get("/getstatistic");
        setData(response);
        const { data: filieres } = await Maxios.get("/getcount");
        setDataFiliere(filieres);
        setLoad(false);
      } catch (error) {
        setLoad(false);
      }
    })();
  }, [LoadData]);
  return (
    <div>
      {load ? (
        <LazyLoad />
      ) : (
        <>
          <ListeDash data={data}></ListeDash>
          <TimePicher></TimePicher>
          <PreSelect data={dataFiliere} />
        </>
      )}
    </div>
  );
}

export default Home;
