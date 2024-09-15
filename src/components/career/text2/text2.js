import React from "react";
import styles from "./text2.css"
export default function Text2({data}){
    return(
        <div className="text2-main" style={{backgroundColor:data.bgcolor}}>
            <h1 className="text2-h">{data.title}</h1>
            <ul className="text2-ul">
                {data.items.map((i)=>(
                    <li>{i}</li>
                ))}
            </ul>
        </div>
    )
}