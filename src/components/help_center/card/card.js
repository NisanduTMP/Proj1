import React, { useState, useEffect } from "react";
import styles from "./card.css"
import Loader from "../../loader/loader";
export default function Card({data}){
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        if (data) {
            setCardData(data); 
        }
    }, [data]); 
    return (
        <>{cardData ? <div className="help-card-main-body" style={{backgroundColor:cardData.bg}}>
            <div className="help-card-main-text-body">
                <i class="fa-solid fa-book-open help-card-main-text-body-icon"></i><br/>
                <div className="help-card-main-text-body-txt">{cardData.txt}</div>
            </div>
        </div> : <Loader/>}</>
    )
}