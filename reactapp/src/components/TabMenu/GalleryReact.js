import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./GalleryReact.css";
import Menu from './Menu';
import MenuItem from "./MenuItem";
import CatMenu from "./CatMenu";

//const allCatValues = [...new Set(Menu.map((curElem)=>curElem.catgegory)), "all"];

// uniqu data ko tacle karna
// const allCatValues = new Set(Menu.map((currElem)=>{
//     return currElem.category;
// }));

// console.log(allCatValues);

// yesma duplicates value pani vayeko eutai data 2times jati chha

//aba yo object ma hunxa ra object lai array ma convert garnu parchha
//array ma garda [] bracket ma rakhnu parchha

// adding spred operator to the ...new
//yo karne ka matlab ki jaba pani jati pani category maa add gardinchhau
//automatic add hunchha
// all wala part nahi hai toh wo malai last ma chhaiyo so
// aba khali yeslai loop chalana hai ani mero kam ho jayega

// and if there is one line of code return lekhne ki jarut pani paddaina

const allCatValues = [...new Set(Menu.map((currElem)=>{return currElem.category;})), "all"];

console.log("hello");
console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);

  const [cateItem, setCateItem] = useState(allCatValues);
//   now mero yo state items satte variable hai array of any object hai


const filterItem = (cateItem) =>{

  if(cateItem==="all"){
    setItems(Menu);    
    return;
  }
    const updatedItems = Menu.filter((currElem)=>{
        // item match garchha vane return kardo
        return currElem.category===cateItem;
        
    });
    setItems(updatedItems);
}

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order your favourite dish
      </h1>
      <hr/>
      {/* our menu list will come here */}

{/* cateItem ko props pass karna hai */}

        <CatMenu filterItem={filterItem} bishalItem={cateItem}/>
     
        {/* my main items section */}
        <MenuItem items={items}/>
      
    </>
  );
};

export default GalleryReact;
