
import { Ellipsis } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";
import { useState } from "react";

const Feed = ({profile,post,name,time}) => {
     const [liked, setLiked] = useState(false);

  return (
    // main container
    
    
    <div className="  h-fit p-5    ">
       
        {/* card */}
        <div className=" shadow-lg border border-gray-300 shadow-gray-400 rounded-2xl overflow-hidden w-72 ">
          {/* Header */}
          <div className=" flex  items-center p-2 ">
            <div className=" w-fit mr-3">
              <img
                className=" rounded-full w-11 h-11 object-cover"
                src={profile}
                alt="profile"
              />
            </div>
            <div className="flex flex-col  w-1/2 items-start mr-0  ">
              <p className="font-semibold text-base leading-none ">{name}</p>
              <p className="text-gray-500 leading-mone ">{time}</p>
            </div>
            <div className=" w-fit ml-12">
              <Ellipsis />
            </div>
          </div>
          {/* image */}
          <div className="w-full h-64 overflow-hidden">
            <img
              src={post}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Actions */}
          <div className=" flex items-center justify-between p-3">
           <div className="flex gap-1.5">
  <span onClick={() => setLiked(!liked)} className="cursor-pointer">
    <Heart
      className={`w-6 h-6 transition ${
        liked ? "fill-purple-700 text-purple-700" : "text-gray-500 "
      }`}
    />
              </span>
              <p>Like</p>
            </div>
            <div className="flex gap-1.5">
              <span>
                <MessageCircle className="w-6 h-6 text-gray-500"/>
              </span>
              <p>0</p>
            </div>

            <div className="flex gap-1.5">
              <span>
                <Share className="w-6 h-6 text-gray-500" />
              </span>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
     
    
  );
};
export default Feed;
