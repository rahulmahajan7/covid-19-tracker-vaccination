// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const NewsContext = createContext()

// export const NewsContextProvider = (props) => {
//     const [data,setData] = useState();
//     const apiKey = "40143529df464b19bed157607d94d5e9";

//     useEffect(() => {
//       const newsDataFetch = async () =>{
//         await fetch(
//             `https://newsapi.org/v2/everything?q=coronavirus+lockdown+covid+vaccine&apiKey=${apiKey}` )
//             .then((response)=> response.json())
//             .then((data)=> {
//                 setData(data);
//                 console.log("yoo >>>>>>>>>",data);
//             })
//       }

//       newsDataFetch();
//     },[]);

//     return(
//         <NewsContext.Provider value={{ data }}>
//             {props.children}
//         </NewsContext.Provider>
//         data
//     );
// }