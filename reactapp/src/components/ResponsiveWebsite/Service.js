import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Sdata from './Sdata';
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* in bootstrap 5 we have gutter  jasle card ko horizontally
                space lai badauchha */}
            <div className="row gy-4">{/* mobile ma 10 lincha */}
            {Sdata.map((val, index)=>{
                {/* aba yo card ma as a props pass garne ho
                 */}
                return(<Card
                  // yesma aba array sdata ma vako sabai data lai pass garne
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                />)
                
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
