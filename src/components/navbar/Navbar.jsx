/* eslint-disable react/prop-types */
// const Navbar = ({ data: { isLoggedIn, isSetLoggedIn } }) => {
//   const IsAuthenticated = () => {
//     return (
//       <>
//         <li>
//           <button>LOGOUT</button>
//         </li>
//       </>
//     );
//   };
//   const IsAnonymousUser = () => {
//     return (
//       <>
//         <li>
//           <a href="">LOGIN</a>
//         </li>
//         <li>
//           <a href="">REGISTER</a>
//         </li>
//       </>
//     );
//   };

//   return (
//     <section id="navbar">
//       <article className="container">
//         <div className="logoBlock">LOGO</div>
//         <div className="MenuBlock">
//           <ul>
//             <li>
//               <a href="">HOME</a>
//             </li>
//             <li>
//               <a href="">ABOUT</a>
//             </li>
//             {isLoggedIn === true ? <IsAuthenticated /> : <IsAnonymousUser />}
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default Navbar;

//! My navbar logic for coditional rendering
// const Navbar = ({ data: { isLoggedIn, isSetLoggedIn } }) => {
//   const handleClick = (e) => {
//     e.preventDefault();
//     isSetLoggedIn(!isLoggedIn);
//   };

//   return (
//     <section id="navbar">
//       <article className="container">
//         <div className="logoBlock">LOGO</div>
//         <div className="menuBlock">
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             {isLoggedIn ? (
//               <>
//                 <li>
//                   <a href="" onClick={handleClick}>
//                     Logout
//                   </a>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <a href="" onClick={handleClick}>
//                     Login
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">Register</a>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default Navbar;
