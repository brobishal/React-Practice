import React ,{useState, useEffect} from 'react';
import axios from 'axios';
const ReactApiPokemon = () =>{

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    // it always expect a function
    useEffect(()=>{
        async function getData(){
            const res = await a xios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name)
            setMoves(res.data.moves.length);
        }
        getData();
    });

    return( 
        <>
        <h1> You choose <span style={{color:"red"}}>{num}</span></h1>
        <h1> my Name is<span style={{color:"red"}}>{name}</span></h1>
        <h1> i Have <span style={{color:"red"}}>{moves}moves</span></h1>
        {/* yeslai update granu parchha useer le kasalai select gareko chha
         */}
         {/* here we pass event object */}
            <select value={num} onChange={(event)=>{
                // ya ke vairacha vanda user le kunai pani option 
                // ko select garchha taba tesko value change hunchha
                // and the moment tesko value change huda kunchai value 
                // change vako chha hami tyo setNum ma update gardeko

                setNum(event.target.value);

            }}
            >
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>                
        </>
    )

        }


export default ReactApiPokemon;
