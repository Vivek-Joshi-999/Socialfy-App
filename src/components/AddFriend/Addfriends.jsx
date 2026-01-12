import { useState } from "react";

import pro1 from "../../assets/profileSuggetion/pro1.jpg";
import pro2 from "../../assets/profileSuggetion/pro2.jpg";
import pro3 from "../../assets/profileSuggetion/pro3.jpg";
import pro4 from "../../assets/profileSuggetion/pro4.jpg";
import pro5 from "../../assets/profileSuggetion/pro5.jpg";
import pro6 from "../../assets/profileSuggetion/pro6.jpg";
import pro7 from "../../assets/profileSuggetion/pro7.jpg";
import pro8 from "../../assets/profileSuggetion/pro8.jpg";
import pro9 from "../../assets/profileSuggetion/pro9.jpg";
import pro10 from "../../assets/profileSuggetion/pro10.jpg";
import AddFriend from "./AddFriend";
const Addfriends = () => {
  const [card] = useState([
    {
      id: 1,
      profile: pro1,
      name: "Mahi Sharma",
      bio: "Loves traveling and photography",
    },
    {
      id: 2,
      profile: pro2,
      name: "Sumit Verma",
      bio: "Smiles, sunsets, and street food",
    },
    {
      id: 3,
      profile: pro3,
      name: "Karan Mehta",
      bio: "Fitness freak and foodie",
    },
    {
      id: 4,
      profile: pro4,
      name: "Emily Johnson",
      bio: "Music, movies, and long drives",
    },
    {
      id: 5,
      profile: pro5,
      name: "Sneha Joshi",
      bio: "Cricket fan and weekend explorer",
    },
    {
      id: 6,
      profile: pro6,
      name: "Rohit Singh",
      bio: "Early riser, calm thinker",
    },
    {
      id: 7,
      profile: pro7,
      name: "Ankit Malhotra",
      bio: "Always chasing sunsets",
    },
    {
      id: 8,
      profile: pro8,
      name: "Neha Kapoor",
      bio: "Bookworm with coffee addiction",
    },
    {
      id: 9,
      profile: pro9,
      name: "Pooja Agarwal",
      bio: "Creative mind, positive vibes",
    },
    {
      id: 10,
      profile: pro10,
      name: "Aman Gupta",
      bio: "Living life one day at a time",
    },
  ]);

  return (
    <div className="h=fit w-full  flex items-center justify-center p-10 flex-col ">
      <p className="text-3xl font-bold pb-8 text-purple-700 pl-2 ovr ">
        People you may follow
      </p>

      {/* sub-main */}
      <div className="border rounded-2xl border-gray-300 flex flex-col h-[500px] hide-scrollbar overflow-y-auto scroll-smooth gap-6 w-lg shadow-xl p-1  shadow-gray-300 items-center justify-between ">
        {/* container-friend */}

        {card.map((card) => (
          <AddFriend
            key={card.id}
            name={card.name}
            bio={card.bio}
            profile={card.profile}
          />
        ))}
      </div>
    </div>
  );
};

export default Addfriends;
