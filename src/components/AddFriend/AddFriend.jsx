

const AddFriend = ({profile,name,bio,}) => {
  return (
   
        <div className="flex justify-between p-7 w-full items-center gap border-b border-gray-200 overflow-hidden  hover:bg-gray-100 ">
          {/* left */}
          <div className="flex">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={profile}
              alt=""
              srcset=""
            />
            <div className="flex flex-col items-start ml-4 w-full ">
              <span className="font-semibold">{name}</span>
              <span className="text-gray-600 w-fit ">{bio} </span>
            </div>
          </div>

          {/* Right */}
          <div>
            <button className=" cursor-pointer bg-gradient-to-r from-purple-700 to-blue-600 p-2 px-6 rounded-3xl text-white font-bold">Follow</button>
          </div>
        </div>
       
        
      
    
  );
};

export default AddFriend;
