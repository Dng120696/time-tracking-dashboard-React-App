import { useEffect, useState } from "react";
import { MainBox } from "./MainBox";
import { Boxes } from "./Boxes";

export default function App() {
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState("weekly");
  console.log(data);
  const fetchData = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main__container">
      <MainBox onsetActive={setActiveItem} activeItem={activeItem}></MainBox>
      <Boxes data={data} activeItem={activeItem} />
    </main>
  );
}
