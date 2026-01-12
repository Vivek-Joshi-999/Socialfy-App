import pro1 from "../../assets/profiles/pro1.jpg";
import pro2 from "../../assets/profiles/pro2.jpg";
import pro3 from "../../assets/profiles/pro3.jpg";
import pro4 from "../../assets/profiles/pro4.jpg";
import pro5 from "../../assets/profiles/pro5.jpg";
import pro6 from "../../assets/profiles/pro6.jpg";
import post1 from "../../assets/posts/post1.jpg";
import post2 from "../../assets/posts/post2.jpg";
import post3 from "../../assets/posts/post3.jpg";
import post4 from "../../assets/posts/post4.jpg";
import post5 from "../../assets/posts/post5.jpg";
import post6 from "../../assets/posts/post6.jpg";
import { Ellipsis } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";
import { useState } from "react";

import Feed from "./Feed";

const FeedCard=()=>{

    const[card]=useState([

        {
            id:1,
            profile:pro1,
            post:post1,
            name:"@User-Mahi",
            time:"2 hour ago"
        },
        {
            id:2,
            profile:pro2,
            post:post2,
            name:"@User-Vivek",
            time:"9 hour ago"
        },
        {
            id:3,
            profile:pro3,
            post:post3,
            name:"@User-Jay",
            time:"1 hour ago"
        },
        {
            id:4,
            profile:pro4,
            post:post4,
            name:"@User-Veer",
            time:"22 hour ago"
        },
        {
            id:5,
            profile:pro5,
            post:post5,
            name:"@User-Ajay",
            time:"3 hour ago"
        },
        {
            id:6,
            profile:pro6,
            post:post6,
            name:"@User-Pradeep",
            time:"8 hour ago"
        },
        
    ])
    return(

        

<div className="p-5">    <p className="text-4xl font-bold pb-8 text-purple-700 ">Feed Preview</p>
       <div className="flex  justify-center items-center h-full w-full flex-wrap ">
    

            <>
            {
                card.map((card)=>(

                    <Feed
                    key={card.id}
                    profile={card.profile}
                    post={card.post}
                    name={card.name}
                    time={card.time}

                    
                    />
                ))}
            
            
            </>
        </div>
        </div>

    );
}

export default FeedCard