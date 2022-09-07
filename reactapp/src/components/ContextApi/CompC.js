import React from "react";
import { FirstName, LastName } from "./App";
const CompC = () => {
  return (
    <>
      {/* jaba hami consumer consumer create garchhau
        ra jaba pani consumer create garchhau taba yeslai function chahinchha
        yeslai component samajdaina
        
         */}
      {/* yaha fname  ma user le uta value ma je pani value lekheko chha teslai get garchhau */}
      {/*  consumer jaba pani lekhchhau taba tyo ek function 
         ko nai accept garchha*/}

      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return(<h1>This is compc {fname} and {lname}</h1>)
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
