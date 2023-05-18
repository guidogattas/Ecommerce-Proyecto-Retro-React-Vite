// import { useEffect, useState } from "react";

// export default function useFetch(url, dependencies = []) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function leerDatos() {
//       const fetchResponse = await fetch(url);
//       const responseJSON = await fetchResponse.json();
//       setData(responseJSON.results);
//     }
//     leerDatos();
//   }, [..]);

//   return data;
// }
