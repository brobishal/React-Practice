import React,{useState} from 'react';
import todo from "./Image/todoimg.jpg";
import './Todo.css';

const UpdatedTodo = () =>{

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const addItem = () =>{
        if(!inputData){


            alert("please enter data");
             }else if(inputData && !toggleSubmit){
                // yedi yo true chha vane hamro edit wala button hai
                //false chha vane add wala button
                setItems(
                    items.map((elem)=>{
                        if(elem. id===isEditItem){
                            return {...elem, name:inputData}

                        }
                        return elem;
                    })

                )

                setToggleSubmit(true);
                setInputData("");
                setIsEditItem(null);




             }else{

                // directly add garda
                //inputData save nai kar raha


                // yaha ma intead of user jo bi lekh raha hai
                //us data ko save karne ke alawa uske sath ek id pani
                //add garna chahunga

        const allInputData = {id: new Date().getTime().toString(), name:inputData}
        setItems([...items, allInputData]);
        // jaba ek palta data add gare paxi input type box ma 
        //value empty hunako lagi
        setInputData("");
        }  
    }

    // for delete items

    const deleteItem = (index) =>{
        console.log(index);

        const updatedItems =  items.filter((val)=>{
            // toh filter ke under ye jo bi index number hai
            //wo iss id se match nahi karta hai toh sirf usikai return karo
            //and baki sab hata do
            //simply ye jo id hai isse math nai hona chahiye  
            // match hune bahek aarko return garchha
            return  index!==val.id; 
        })
        setItems(updatedItems);
    }

    //edit the item
    //when the user click on edit button
    //1:get the id and name of the data which user clicked to edit
    //2: set the toggle mode to change the submit button into edit button
    //3: Now update the value of the setinput with the new updated value to edit
    //4:To pass the current element ID to new state variable for reference


    const editItem = (id) =>{
        let newEditItem = items.find((elem)=>{
            return elem.id===id;
        })
        console.log(newEditItem);
        setToggleSubmit(false);
// setInputData ko value lai pani update karna hai
    setInputData(newEditItem.name);
    setIsEditItem(id);
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

                        {
                        toggleSubmit ?   <i className="fas fa-plus add-btn"
                      onClick={addItem} title="Add Item"></i> :
                    <i className="far fa-edit add-btn"
                      onClick={addItem} title="Update Item"></i>
                        }
                   

                    </div>
                    <div className="showItems">
                    {/* yo jo ma pahile index use gari rathe as a
                        items.map((val, index) in map ma
                        aba ma index user gardina

                        */}
                           
                        {
                            items.map((val)=>{
                                    return(
                                <div className="eachItem" key={val.id}>
                                        <h3>{val.name}</h3>
                                <i className="far fa-edit add-btn" 
// data haru pass garda fat arrow function use grachhau
                                // click garda data pass garna hami
                                //fat arrow function lai use garchhau taba

                                title="edit item" onClick={()=>{
                                    editItem(val.id);

                               }}></i>

                            <i className="far fa-trash-alt add-btn" 
                            title="Delete item" onClick={()=>{
                                    deleteItem(val.id);

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

export default UpdatedTodo;
