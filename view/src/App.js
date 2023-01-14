import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./components/container/Container";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setData(err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <Container data={data} />
    </div>
  );
};

export default App;

// (async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/products");
//     setData(response.data);
//   } catch (err) {
//     setData(err);
//   }
// })();

//  <ul>
//    {data &&
//      data.map(({ id, title }) => (
//        <li key={id}>
//          <h3>{title}</h3>
//        </li>
//      ))}
//  </ul>;
