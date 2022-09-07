import React from "react";

// for multiple data milne wala hai toh direct destructuring garna sakchhau
//for single ko lagi props pass garchhau
const MenuItem = ({items }) =>{
    return(
        <>
            
        <div className="menu-item container-fluid mt-5">
          <div className="row">
            <div className="row my-5">
            {/* yo jaga ma loop chalana hai */}

            {
                items.map((elem)=>{
                    {/* ya sabai data lai desctructure garna chahanchhu */}
                    {/* const {id, name , image, description, price} = elem; */}

                    return (
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-2" key={elem.id}>
                  <div className="row item-inside">
                    {/* for images */}
                    <div className="col-12  col-md-12 col-lg-4 img-div ">
                      <img src={elem.image} alt={elem.name} className="img-fluid" />
                    </div>

                    {/* menu item description */}
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="main-title pt-4 pb-3">
                        <h1>{elem.title}</h1>
                        <p>{elem.description}</p>
                      </div>
                      <div className="menu-price-book">
                        <div className="price-book-divide d-flex justify-content-between">
                          <h2>Price : {elem.price}</h2>
                          <a to="#">
                            <button className="btn btn-primary">
                              Order Now
                            </button>
                          </a>
                        </div>
                        <p>Prices may vary on selected date</p>
                      </div>
                    </div>
                  </div>
              </div>

                    )
                })
            }

    
            </div>
          </div>
        </div>

        </>
    )
}

export default MenuItem;