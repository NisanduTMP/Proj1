import React from "react";
import styles from './banner.css'
export default function Banner({data}){
    return (
        <div className="career-banner-main" style={{backgroundColor:data.bgcolor}}>
            <div className="career-banner-sec-main">
                <div className="career-banner-button-sec">
                    
                        <div><i class="fa-solid fa-arrow-left career-banner-button-sec-ico"></i></div>
                        <div className="career-banner-a-txt">
                            back to Strug.ca
                        </div>
                </div>
                <div className="career-banner-title-sec">
                    <h1 className="career-banner-title-sec-h">{data.job}</h1>
                </div>
                <p className="career-banner-p-sec">{data.description}</p>
            </div>
            <div className="career-banner-img-sec">
                <img src={data.img} className="career-banner-img-sec-img"/>
            </div>
        </div>
    )
}