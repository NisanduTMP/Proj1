import React from "react";
import Banner from "../../components/career/banner/banner";
import Card from "../../components/career/card/card";
import Text1 from "../../components/career/text1/text1";
import Text2 from "../../components/career/text2/text2";
import Getintouch from "../../components/help_center/getintouch/getintouch";
import Cardcontainer from "../../components/help_center/card/cardcontainer";
import Pcontainer from "../../components/help_center/partnership/pcontainer";
import styles from './Career.css'
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
    const txtob = {
        bgcolor:"#172741",
        title:"About Us:",
        des:"Strug is a dynamic platform connecting employers with on-demand workers, individuals seeking affordable services like automotive care, and people looking to pick up extra shifts in their free time. Our mission is to simplify and enhance the way people find work and access affordable services."
    }
    const txt2ob = {
        bgcolor:"#172741",
        title:"About Us:",
        items:[
            "Bachelor’s degree in Statistics, Mathematics, or a related field.",
            "Bachelor’s degree in Statistics, Mathematics, or a related field.",
            "Bachelor’s degree in Statistics, Mathematics, or a related field.",
            "Bachelor’s degree in Statistics, Mathematics, or a related field."
        ]
    }
    const gob = {
        title:"Get In Touch",
        des:"Still have questions? Please email us at support@strug.ca or give us a call at +1(647)377-4393 and a service team member will happily assist you!",
        img:"/img/career/row1/banner2.png",
        bgcolor1:"#172741",
        bgcolor2:"#2F6B9F"
    }
    const cardObj = {
        bgcolor:"#172741",
        cards:[
            {
                link:"",
                txt:"Our Impact",
            },
            {
                link:"",
                txt:"Our Impact",
            },
            {
                link:"",
                txt:"Our Service",
            },
        ]
    }
    return (
        <div className="career-main">
            {/* <Banner data={obj}/> */}
            {/* <Card data={cardob}/> */}
            {/* <Text1 data={txtob}/> */}
            {/* <Text2 data={txt2ob}/> */}
            {/* {<Getintouch data={gob}/>} */}
            {/* <Cardcontainer data={cardObj}/> */}
            <Pcontainer/>
        </div>
    )
}