import React from "react";
import Banner from "../../components/career/banner/banner";
import Card from "../../components/career/card/card";

export default function Career(){
    const obj = {
        bgcolor:"#172741",
        job:"Senior Full Stack Engineer",
        description:"Stagnation is repulsive. Join a team that values individual and collective grown",
        img:"/img/career/row1/banner1.png"
    };
    const cardob = {
        bgcolor:"#132E4A",
        title:"Equal Opportunity",
        des:"Strug is an equal opportunity employer. We do not discriminate on the basis of race, color, religion, gender identity, sexual orientation, or national origin. Our interest is strictly in your ingenuity, experience, determination, and relentless desire to succeed. We put considerable effort and time in recruiting the right individuals to create a a workplace that results in a daily sense of accomplishment",
        img:"/img/career/row1/banner2.png"
    };
    return (
        <div>
            {/* <Banner data={obj}/> */}
            <Card data={cardob}/>
        </div>
    )
}