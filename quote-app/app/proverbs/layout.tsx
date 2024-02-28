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


export const getServerSideProverbs= async ()=>{
    const proverbsData = await (await fetch("https://wordsapi-nkj3.onrender.com/proverbs")).json();
    return {
        props:{
            proverbsData,
        }
    }
}

export default ProverbsLayout;