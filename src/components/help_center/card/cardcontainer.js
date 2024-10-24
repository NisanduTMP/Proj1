import React from "react";
import styles from "./cardcontainer.css"
import Card from "./card";

export default function Cardcontainer({data}){
    return(
        <div className="help_center_card_container_main" style={{backgroundColor:data.bgcolor}}>
            {
                data.cards.map((element, index) => (
                    <div key={index}>
                        <Card data={{...element,bg:data.bgcolor}} />
                    </div>
                ))
            }
        </div>
    )
}