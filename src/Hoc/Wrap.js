import React from 'react';
const Wrap = ( props ) => {
return(
    <div className={props.className}>
        {props.children}
    </div>
);
    
}



export default Wrap;