import { useState, useEffect } from 'react';

export function Serie(props) {
    console.log(props)

    return <section>
        <h2>{props.serie.title}</h2>
    </section>




// function serieLikes() {
//     const [count, setCount] = useState(0);
//
//     // const clickHandler(() => {
//     //     setCount(count + 1)
//     // });
//
//     useEffect(() => {
//         document.title = `Serie was liked ${count} times.`;
//     }, [count]);
//
//     useEffect(() => {
//         console.log("Starting up the serieLikes!");
//     }, [])
//
//     return (
//         <div>
//             <p>Liked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Like</button>
//         </div>
//     );
}