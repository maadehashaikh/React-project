import React, { useState }  from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js"
import Navbar from "./navbar.js";

const uniqueList =[...new Set(Menu.map((curElem) => {
  return curElem.category;
})
),
"All",
];
console.log(uniqueList);


const Restraunt = () => {
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setmenuList]  = useState(uniqueList);
  const filterItem = (category) =>{
   if(category === "All"){
    setMenuData(Menu);
    return;
   }

    if(category === "All"){
      setMenuData(Menu);
    }
   const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
   });
   setMenuData(updatedList);
  };
  console.log(menuData);
  return (
    <> 
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
     </>
  );
};
export default Restraunt;

//... is spread operator