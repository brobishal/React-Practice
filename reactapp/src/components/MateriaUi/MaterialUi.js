import React from 'react';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';

const MaterialUi = () =>{
    return(
        <>
        <h1>hello</h1>
        
        {/* <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Container</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>     */}

        {/* ........................ */}


        <Button color="error" variant="outlined" size="small">Primary</Button>
        <Button disabled> disabled</Button>
        <Button href="text">Link</Button>
      

        {/* ....................... */}
    




        </>
    )
}

export default MaterialUi;