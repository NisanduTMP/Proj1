import React from "react";
import styles from './pcontainer.css'
import Card from "./card";
export default function Pcontainer(){
    const obj = {
        cards:[
            {
                title:"Expand Your Reach",
                img:"/img/career/row1/banner2.png",
                des:"Strug connects individuals and businesses with service providers based on their needs and budgets, allowing potential clients to actively seek out services like yours. Joining Strug gives you access to a broader client base beyond traditional marketing methods"
            },
            {
                title:"Attract New Clients",
                img:"/img/career/row1/banner2.png",
                des:"Efficiently manage your workforce with Strug's flexible engagement model. Accept tasks and fill shifts on demand, scaling operations to meet fluctuating demand without long-term commitments."
            },
            {
                title:"Cost-Effective Solutions",
                img:"/img/career/row1/banner2.png",
                des:"Traditional marketing methods can be expensive and yield uncertain results. Strug offers a cost-effective solution by facilitating direct client engagement, reducing your marketing costs, and improving your return on investment."
            },
        ]
    }
    return(
        <div className="pcontainer-main">
            <div className="inner-pcontainer-main">
                <p className="inner-pcontainer-main-p">Welcome to Strug's Partnership Page! We're eager to collaborate with organizations and businesses looking to leverage our expansive platform to deliver affordable, flexible solutions to a wider audience. Partnering with Strug means joining a community dedicated to mutual success. We’re committed to helping your business grow by connecting you with clients who need your services and providing the resources to manage your workforce efficiently.</p>
                <p className="inner-pcontainer-main-p pcontainer-p-addm">Why Partner with Strug?...Why not? </p>
                {
                    obj.cards.map((element,index)=>(
                        <div key={index}>
                            <Card data={element}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}