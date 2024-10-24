import React from "react";
import styles from './card.css'
export default function Card({data}) {
    return (
        <div className="pcontainer-card-main">
            <p className="pcontainer-card-main-p">{data.title}</p>
            <div className="pcontainer-card-group">
                <div className="pcontainer-card-img-sec">
                    <img src={data.img} className="pcontainer-card-img-sec-img"/>
                </div>
                <div className="pcontainer-card-txt-sec">
                    <p className="pcontainer-card-txt-sec-p">{data.des}</p>
                </div>
            </div>
        </div>
    )
}