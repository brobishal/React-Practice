import React,{useState} from 'react';
import './Category.css';

import './Categories';
import Categories from './Categories';
const Category = () =>{


    // create state
// i will be passing this array is initail value

    const [data, setData] = useState(Categories);

    const filterResult = (categoryItem) =>{
        // filter method is nothing but if the condition is mathched
        //only that result is will be given as the output
        //and rest all the result will be filter out

        //filter le match condition lai matra dekhauxa ra remining lai ignore garchha
        //yesle new aaray banauxa ra original array lai effect gardaina
        // aaray.filter
        //categoryItem is nothing but whatever pass inside this button

        const result = data.filter((currVal)=>{
            return currVal.category !==categoryItem;
        });

        setData(result);

    }
    return(
        <>
            <div className="main_category">
            <div className="category">
                <div className="second_div">
                    <button onClick={()=>{
                        filterResult('Men')
                    }}
                    >Men</button>
                    <button
                     onClick={()=>{
                        filterResult('Women')
                    }}
                    >Women</button>
                    <button
                     onClick={()=>{
                        filterResult('Men')
                    }}
                    >Black</button>
                </div>
                <div className="card_div">

                    {data.map((val)=>{
                        {/* now this val have been entire data  */}
                        {/* const {id, title, price , image} = val; */}
                        return(
                            <>
                            {/* val chai hamro card hunxa */}
                            <div className="card">
                        <h1>{val.title}</h1>
                        <p>{val.id}</p>
                        <p>This is card </p>
                        <img src={val.image} alt="img"/>
                        <p>{val.price}</p>
                        <button>Check</button>

                    </div>

                            </>
                        )

                    })}
                     </div>

            </div>
            </div>
        </>
    )
}

export default Category;