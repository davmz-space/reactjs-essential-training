import './App.css';
import amongus from "./amongus.jpg";
import { useState } from "react";

// function Header(props) {
//   console.log(props);

//   return (
//     <header>
//       <h1>{props.name}'s' Kitchen</h1>
//       {/* <h1>Eve's Kitchen</h1> */}
//     </header>
//   )
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>

//       <img
//         src={amongus}
//         alt="amongus character game"
//         height={200}
//       />

//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>
//             {dish.title}
//           </li>
//         ))}
//       </ul>

//       {/* <p>We serve the most delicious food around.</p> */}
//     </section>
//   )
// }

// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//       {/* <p>It's true.</p> */}
//     </footer>
//   )
// }

// const dishes = [
//   "Cheese and sprinkles",
//   "Potato ice cream",
//   "Rice and chicken",
// ];

// dishes.map((dish) => {
//   console.log(dish);
// });


// const dishObjects = dishes.map((dish, i) => (
//   { id: i, title: dish }
// ));

// console.log(dishObjects);

function SecretComponent() {
  return (
    <h1>Secret information for authorized users only</h1>
  )
}

function RegularComponent() {
  return (
    <h1>Everyone can see this component</h1>
  )
}

// function App({ authorized }) {
function App() {  
  // const what = useState("happy");
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);

  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={ () => setEmotion("Happy") }>Happy</button>
      <button onClick={ () => setEmotion("Frusturated") }>Frusturated</button>
      <button onClick={ () => setEmotion("Enthusiastic") }>Enthusiastic</button>
      

      {/* {authorized ? 
        <SecretComponent /> : 
        <RegularComponent />} */}
    </>
  )

  // if (props.authorized) {
  //   return <SecretComponent />
  // } else {
  //   return <RegularComponent />
  // }

  // return (
  //   <div className="App">
  //     {/* <h1>Header</h1>
  //     <Header name="David" />
  //     <h2>Main</h2>

  //     <Main adjective="amazing" dishes={ dishes }/>
  //     <Main adjective="amazing" dishes={dishObjects} />

  //     <h3>Footer</h3>
  //     <Footer year={new Date().getFullYear()} /> */}
  //   </div>
  // );
}

export default App;
