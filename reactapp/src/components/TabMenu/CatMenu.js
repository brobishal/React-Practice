import React from 'react';

const CatMenu = ({filterItem,bishalItem}) =>{
    return(
        <>
         <div className="menu-tabs comtainer">
        <div className="menu-tab d-flex justify-content-around">

        {
            bishalItem.map((currElem, index)=>{
                return  <button className="btn btn-warning"
                key={index} 
                   onClick={()=>{
            filterItem(currElem)
          }}

          >{currElem}</button>
            })
        }

{/* 
          <button className="btn btn-warning" onClick={()=>{
            // yeske under ek argument pass karna chahunga
            filterItem("breakfast");
          }}>Break Fast</button>
          <button className="btn btn-warning" 
          onClick={()=>{
            filterItem("morning")
          }}
          >Lunch</button>

          <button className="btn btn-warning" 
                   onClick={()=>{
            filterItem("evening")
          }}

          >Evening</button>

          <button className="btn btn-warning"
                   onClick={()=>{
            filterItem("lunch")
          }}

          >Dinnder</button>

          <button className="btn btn-warning"
                   onClick={()=>{
            filterItem("morning")
          }}>Morning</button>

<button className="btn btn-warning"
                   onClick={()=>{
            filterItem("timepass")
          }}>Timepass</button> */}

        {/* <button className="btn btn-warning"
                   onClick={()=>{
        setItems(Menu);
          }}>All</button> */}

        </div>
        </div>

        </>
    )
}
export default CatMenu;