import React from "react";

interface DialoguesLayoutProps {
    children : React.ReactNode;
};

const  ProverbsLayout : React.FC<DialoguesLayoutProps> = (props)=>{
    return (
         <div>
            {props.children}
         </div>
    )
};



export default ProverbsLayout;