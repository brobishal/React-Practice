import React,{useState} from 'react';
import todo from "./Image/todoimg.jpg";
import './Todo.css';

const Todo = () =>{


    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () =>{

        if(!inputData){
            alert("please enter data");
        }else{
        //user le kunaai pani data add nagarda data empty data
        //na hos vanna ko lagi 

        // array ma data garda array ke under rakhne ho
        //euta state bata arko state ma add or store garda

        // and previous state ko data lai save garnawe use spread operator
        setItems([...items, inputData]);
        // jaba ek palta data add gare paxi input type box ma 
        //value empty hunako lagi
        setInputData("");
        }


    }

    // for delete items

    const deleteItem = (id) =>{
        console.log(id);

        const updatedItems =  items.filter((val, index)=>{
            // toh filter ke under ye jo bi index number hai
            //wo iss id se match nahi karta hai toh sirf usikai return karo
            //and baki sab hata do
            //simply ye jo id hai isse math nai hona chahiye
            
            // match hune bahek aarko return garchha
            return  index!==id; 
        })

        setItems(updatedItems);


    }

    // removeAll
    const removeAll = () =>{
        // empty array dina hai
        setItems([]);

    }

    return(
        <>
            <div className="main-div">
                <div className="child-div">
                {/* img ko lagi figure */}
                    <figure>
                        <img src={todo} alt=""/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Item..."
                            name=""
                            value={inputData}
                            onChange={(e)=>{
                                setInputData(e.target.value);

                            }}

                        />
                     <i className="fas fa-plus add-btn" onClick={addItem} title="Add Item"></i>

                    </div>
                    <div className="showItems">
                           
                        {
                                items.map((val, index)=>{
                                    return(
                                <div className="eachItem" key={index}>
                                        <h3>{val}</h3>
                                <i className="far fa-trash-alt add-btn" 
// data haru pass garda fat arrow function use grachhau
                                // click garda data pass garna hami
                                //fat arrow function lai use garchhau taba

                                title="Delete item" onClick={()=>{
                                    deleteItem(index);

                               }}></i>
                                </div>
                                     )

                                })
                            }

                         
                    </div>

                    {/* clear all button */}
                    <div className='showItems'>
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>
                        Remove All
                        </span>
                        </button>


                    </div>
                </div>

            </div>

        </>
    )
}

export default Todo;
