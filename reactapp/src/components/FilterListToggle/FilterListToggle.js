

import React from 'react';

const FilterListToggle = ({option, value, selectToggle}) =>{
    (
        <>
            <button
            value={value}
            onChange={selectToggle}
            // consa class se aaya hai
            className={classes.root}

            >
                    {option.map(({label, id, value})=>{

                        <button className={classes.toggle} key={id}
                         value={value}>
                        {label}</button>
                    })}

            </button>
        </>
    )
}

export default FilterListToggle;