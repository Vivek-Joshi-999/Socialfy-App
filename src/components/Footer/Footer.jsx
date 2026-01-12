import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col gap- justify-between">
      <div className="flex  border-b gap-x-96">
        <div className="flex gap-5 p-5 w-full">
          <span>About</span>
          <span>Privacy policy</span>
          <span>Contact</span>
          <span>Terms</span>
        </div>

        <div className="flex gap-5  w-md p-2">
  

           <div className="flex items-center justify-center 
                w-9 h-9
                bg-gradient-to-r from-purple-700 to-blue-600 
                rounded-full">
  <Instagram className="text-white" size={24} />
</div>
 <div className="flex items-center justify-center 
                w-9 h-9 
                bg-gradient-to-r from-purple-700 to-blue-600 
                rounded-full">
  <Facebook className="text-white" size={24} />
</div>
          <div className="flex items-center justify-center 
                w-9 h-9 
                bg-gradient-to-r from-purple-700 to-blue-600 
                rounded-full">
  <Linkedin className="text-white" size={24} />
</div>

        </div>
      </div>
      <div>
        <span>@2026 Socialfy </span>
      </div>
    </div>
  );
};

export default Footer;
