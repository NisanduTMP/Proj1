import React from "react";
import styles from "./card.css"
export default function Card({data}){
    return(
        <div className="career-foot-card-main" style={{backgroundColor:data.bgcolor}}>
            <div className="career-foot-card-main-inner">
                <div className="career-foot-card-txt-sec">
                    <h1 className="career-foot-card-txt-sec-h">
                        {data.title}
                    </h1>
                    <p className="career-foot-card-txt-sec-p">
                    {data.des}
                    </p>
                </div>
                <div className="career-foot-card-img-sec">
                    <img src={data.img} className="career-foot-card-img-sec-img"/>
                </div>
            </div>
        </div>
    )
}