import React from "react";

interface ProverbsLayoutProps {
    children : React.ReactNode;
};

const  ProverbsLayout : React.FC<ProverbsLayoutProps> = (props)=>{
    return (
         <div>
            {props.children}
         </div>
    )
};



export default ProverbsLayout;