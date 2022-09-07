import React ,{useState, useEffect}from 'react';

const ReactHoolChallg = () =>{
    const [data, setData] = useState(0);

    useEffect(()=>{
        document.title=`you clicked me ${data} times`;
    })

    return(
        <>

            <button onClick={()=>{
                setData(data+1)
            }}>Click Me {data}</button>
        </>
    )

}

export default ReactHoolChallg;
