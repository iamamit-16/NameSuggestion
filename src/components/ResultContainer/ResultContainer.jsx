import React from "react";
import './ResultContainer.css';
import NameCard from "../NameCard/NameCard";

const ResultContainer = ({suggestedNames})=>{
    const suggestedNameJsx = suggestedNames.map(suggestedName=>{
        return <NameCard key ={suggestedName}suggestedName={suggestedName}/>;
    });
        return(
        <div className="result-container">
        {suggestedNameJsx}
        </div>
    );
};
export default ResultContainer;