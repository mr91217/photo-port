// import React from 'react';


// const categories = [
//     {
//       name: "commercial",
//       description:
//         "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life" },
//     { name: "food", description: "Delicious delicacies" },
//     {
//       name: "landscape",
//       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
// ];

// // function categorySelected() {
// //     console.log("hello")
// // }

// function categorySelected(name) {
//     console.log(`${name} clicked`)
// }


// function Nav() {

//   return (
//     <header>
//         <h2>
//             <a data-testid="link" href="/">
//             <span role="img" aria-label="camera"> 📸</span> Oh Snap!
//             </a>
//         </h2>
//         <nav>
//             <ul className="flex-row">
//             <li className="mx-2">
//                 <a data-testid="about" href="#about">
//                 About me
//                 </a>
//             </li>
//             <li>
//                 <span>Contact</span>
//             </li>
//             {categories.map((category) => (
//                 <li
//                 className="mx-1"
//                 key={category.name}
//                 >
//                 <span onClick={() => categorySelected(category.name)} >
//                     {category.name}
//                 </span>
//                 </li>
//             ))}
//             </ul>
//         </nav>
//     </header>
//   );
// }

// export default Nav;

/////////========================================================================/////////

// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Nav(props) {
    

//   const {
//     categories = [],
//     setCurrentCategory,
//     currentCategory,
//   } = props;
//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera"> 📸</span> Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about">
//               About me
//             </a>
//           </li>
//           <li className="mx-2">
//             <span>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name && 'navActive'
//                 }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category)
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

//============================================================================//

import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;