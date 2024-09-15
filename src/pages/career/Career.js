import React from "react";
import Banner from "../../components/career/banner/banner";

export default function Career(){
    const obj = {
        bgcolor:"#172741",
        job:"Senior Full Stack Engineer",
        description:"Stagnation is repulsive. Join a team that values individual and collective grown"
    };
    return (
        <div>
            <Banner data={obj}/>
        </div>
    )
}