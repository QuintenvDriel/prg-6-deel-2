import {useEffect, useState} from "react";
import {Serie} from "./Serie";

const URI_COLLECTION = "https://145.24.222.185:8000/series"

export function App() {
   const [series, setSeries] = useState([])

    const showSeries = series.map((value , key) =>
    <Serie key={value.id} serie={value}/>)


    const loadJson = () => {
       fetch(URI_COLLECTION, {
           method: 'GET',
           headers: {
               'Accept': 'application/json'
           }
       })
           .then((response) => response.json())
           .then((result) => setSeries(result.items))
    }

    useEffect(loadJson, [])

    // const allSeries = serie.map((ser, index) => (
    //     <Detail key={index} url={ser.url} />
    // ));

   return (
       <div>
           <h1>Hello Series!</h1>
           { showSeries }
       </div>
   );
}