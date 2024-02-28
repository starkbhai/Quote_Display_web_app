import React from "react";

interface QuotesLayoutProps {
    children : React.ReactNode;
};

const  QuotesLayout : React.FC<QuotesLayoutProps> = (props)=>{
    return (
         <div>
            {props.children}
         </div>
    )
};



export default QuotesLayout;