import React, {useState} from 'react';

import MyAccordion from './MyAccordion';
const Accordion = () =>{

    // this is api
    let questions=[
        {
           id:1,
           question:"How ar  e you",
           answer:"Install the song" 
        },
        {
            id:2,
           question:"How can i help you",
           answer:"Install the song" 
        },
        {
            id:3,
           question:"How are you",
           answer:"Install the song" 
        },
        {
            id:4,
           question:"How are you",
           answer:"Install the song" 
        }
    ]
    const [data, setData] = useState(questions);


    return(
        <>

        <section className='main_div'>
        <h1>React Interview Question</h1>
        {
            data.map((currVal, index)=>{
                const {id, question, answer} = currVal;
                return <MyAccordion key={index} {...currVal}/>

            })
        }

        </section>

        </>
    )
}

export default Accordion;