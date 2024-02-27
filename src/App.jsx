//! video 42 (Conditional rendering) -> preventing componenet from rendering
// Cannot read properties of null (reading 'map') -> null don't have map method (array does)
import { useState } from "react";

const App = () => {
  let [data, setData] = useState(null);
  (async function () {
    let res = await window.fetch("https:/api.github.com/users");
    let finalVal = await res.json();
    setData(finalVal);
  })();
  return (
    <div>
      {data === null
        ? "Loading...."
        : data.map((user) => {
            return (
              <>
                <li>{user.login}</li>
              </>
            );
          })}
      {/* {data.map((user) => {
        return (
          <>
            <li>{user.login}</li>
          </>
        );
      })} */}
    </div>
  );
};

export default App;

//! video 42 (Conditional rendering)
//! SHORT CIRCUIT AND Operator && ->  when you want to render something or nothing

// import { useState } from "react";

// let data = ["Shashi is teaching reactjs", "Dixith is teaching Java"];

// const App = () => {
//    // let [messages, setMessages] = useState(data);
//   return (
//     <div>
//       {/* <div>
//         Notifications
//         {/* using && -> when you have only if then we can go for short circuit operator */}
//       {/* Inline if with logical && operator */}
//       {messages.length > 0 && <sup>{messages.length}</sup>}
//       {/* using inline if-else with conditional rendering will create another node for the else part, not recommended*/}
//       {/* {messages.length > 0 ? <sup>{messages.length}</sup> : ''}
//       </div> */}
//     </div>
//   );
// };

// export default App;

//! video 41 (Conditional rendering_3)
//! How to use sup to look like notification
// const App = () => {
//   return (
//     <div>
//       <h1>Hello World!<sup>1</sup></h1>
//     </div>
//   )
// }

// export default App

//! video 41 (Conditional rendering_3)
//! CONDITIONAL RENDERING USING IIFE (IMMEDIATELY INVOLE FUNCTION EXPRESSION)
// import { useState } from "react";
// import Notification from "./components/messages/Notification";

// const App = () => {
//   let [state, setState] = useState([
//     {
//       text: "info text",
//       status: "info",
//     },
//     {
//       text: "warning text",
//       status: "warning",
//     },
//     {
//       text: "Error text",
//       status: "error",
//     },
//   ]);
//   return (
//     <div>
//       <Notification state={state} />
//     </div>
//   );
// };

// export default App;

//! video 41 (Conditional rendering_3)
//! Conditional rendering using switch case  -> For admin and user panel
// import { useState } from "react";
// import User from "./components/auth/User";
// import Users from "./components/auth/Users";

// const App = () => {
//   let [state, setState] = useState([
//     {
//       id: 1,
//       name: "Imran",
//       age: 22,
//       company: "TYSS",
//       salary: 20000,
//       role: "user",
//     },
//     {
//       id: 1,
//       name: "Lawan",
//       age: 24,
//       company: "Alpha",
//       salary: 20000,
//       role: "admin",
//     },
//   ]);
//   return <div>
//     <Users state={state}/>
//   </div>;
// };

// export default App;

//! video 41 (Conditional rendering)
//! Rendering using switch case
// import { useState } from "react"

// const App = () => {
//   const [mode, setMode] = useState('b');
//   const [color, setColor] = useState("green");
//   switch ((mode, color)){
//     case ('a', 'red'): return <h1 style={{color}}>You are A</h1>
//     // case 'a' && "red": return <h1 mode={mode} color={color}>You are A</h1>
//     case 'b' && "green": return <h1 style={{color}}>You are B</h1>
//     case 'c' && "blue": return <h1 style={{color}}>You are C</h1>
//     default:
//       return <h1>No mode is selected here...</h1>
//   }
// }

// export default App

// import { useState } from "react";
// import Products from "./components/products/Products";
// import DATA from './data.json';

// //! Product App
// const App = () => {
//   let [state, setState] = useState(DATA)
//   return (
//     <div>
//       <section id="productsBlock">
//         <article className="container">
//           <Products state={state}/>
//         </article>
//       </section>
//     </div>
//   );
// };

// export default App;

//! LOGIN LOGOUT USING CONDITIONAL RENDERING AND COMPONENT
// import { useState } from "react";
// import Navbar from "./components/navbar/Navbar"

// const App = () => {
//   const [isLoggedIn, isSetLoggedIn] = useState(false);
//   return (
//     <div>
//       <Navbar data={{isLoggedIn, isSetLoggedIn}}/>
//     </div>
//   )
// }

// export default App

//! BASIC CONDITIONAL RENDERING
// import { useState } from "react";

// const App = () => {
//   let [displayText, setDisplayText] = useState(0);
//   if (displayText) {
//     return (
//       <>
//         <h1>Current Display Text: {displayText}</h1>
//         <p>
//           nbfvkb buihlvzkucn nejofjl ioejiojq 9j ew0 hehhiosdhvkl ewj
//           0jiosdafjj9 -9fjjioj
//         </p>
//       </>
//     );
//   } else {
//     return <>No data available</>;
//   }
// };

// export default App;
