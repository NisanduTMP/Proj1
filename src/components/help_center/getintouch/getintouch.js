import React from "react";
import styles from "./Getintouch.css"
export default function Getintouch({data}){
    return(
        <div className="help-foot-card-main" style={{backgroundColor:data.bgcolor1}}>
            <div className="help-foot-card-main-inner">
                <div className="help-foot-card-txt-sec" style={{backgroundColor:data.bgcolor2}}>
                    <h1 className="help-foot-card-txt-sec-h">
                        {data.title}
                    </h1>
                    <p className="help-foot-card-txt-sec-p">
                    {data.des}
                    </p>
                    <button className="help-getintouch-btn">Submit a Request</button>
                </div>
                <div className="help-foot-card-img-sec">
                    <img src={data.img} className="help-foot-card-img-sec-img"/>
                </div>
            </div>
        </div>
    )
}