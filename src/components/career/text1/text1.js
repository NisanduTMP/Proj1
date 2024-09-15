import React from "react";
import styles from "./text1.css"
export default function Text1({data}){
    return(
        <div className="text1-main" style={{backgroundColor:data.bgcolor}}>
            <h1 className="text1-h">{data.title}</h1>
            <p className="text1-p">{data.des}</p>
        </div>
    )
}