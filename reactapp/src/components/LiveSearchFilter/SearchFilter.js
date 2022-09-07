import React,{useState} from 'react';
import SearchResult from './SearchResult';

const SearchFilter = () =>{

    // malai euta state chaiyo user le ke ke type gareko chha
    const [img , setImg] = useState("");

    // use le ke ke tyoe gari rako teslai janna ko lagi we passs
    //we pass as a event (or props) jsale garda user ka sara input data ko 
    //access garna sakchhau

    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);

    }


    return(
        <>
            <input type="text" placeholder='Search Anything'
            // hamro state ya save ho jaye
                value={img}
                onChange={inputEvent}
            />

            {img === "" ? null : <SearchResult name={img}/>}
        
        </>
    )

}

export default SearchFilter;