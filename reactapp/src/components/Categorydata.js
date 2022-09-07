import React,{useState} from 'react';
import './Category.css';

import './Categories';
import Categories from './Categories';

/* 
add component state for categoryids
add name, value, attribute
add onChange event listener
add databse query in controller
add checked attribute to checkbox input


*/
const Categorydata = () =>{


//     // create state
// // i will be passing this array is initail value

//     const [data, setData] = useState(Categories);

//     // search

//     const filterResult = (categoryItem) =>{
//         // filter method is nothing but if the condition is mathched
//         //only that result is will be given as the output
//         //and rest all the result will be filter out

//         //filter le match condition lai matra dekhauxa ra remining lai ignore garchha
//         //yesle new aaray banauxa ra original array lai effect gardaina
//         // aaray.filter
//         //categoryItem is nothing but whatever pass inside this button

//         const result = Categories.filter((currVal)=>{
//             return currVal.category != categoryItem;
//         });

//         setData(result);

//     }


const [categoryIds, setCategoryIds] = useState([]);


const handelCategory = (e) =>{
    const currentCategoryChecked = e.target.value;
    // concatenate what we gonna already have
    const allCategoryChecked = [...categoryIds];
    const indexFound = allCategoryChecked.indexOf(currentCategoryChecked);
    let  updateCategoryIds;
    // negative 1 is that means it returns it wasnot found
    if(indexFound ===-1){
            //add
            updateCategoryIds = [...categoryIds, currentCategoryChecked];
            setCategoryIds(updateCategoryIds);
    }else{
        //if it was found remove
        //remove

        updateCategoryIds = [...categoryIds];
        // and then remove by using splice
        //splice method add and remove array elements
        // splice(index, howmany)
        updateCategoryIds.splice(indexFound,1);
        setCategoryIds(updateCategoryIds);


    }





}

    return(
        <>
            <div className="main_category">
            <div className="category">
                <div className="second_div">

                    
                   <input type="checkbox"
                   name="category"
                   value=""
                   id="checkbox"
                   onChange={handelCategory}
                    />

                </div>
                <div className="card_div">

                    
                     </div>

            </div>
            </div>
        </>
    )
}

export default Categorydata;