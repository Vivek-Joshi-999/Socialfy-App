import { useState } from "react";
import { SquarePen } from "lucide-react";
import {MessageSquareHeart} from "lucide-react"
import { UserPlus} from "lucide-react"
import {MailPlus} from "lucide-react"
import Card from "./Card";

function Cards() {
  const [cards] = useState([
    {
      id: 1,
      title: "Like and Comment",
      desc: "Enagage with content which you like.",
      icon: MessageSquareHeart,
    },
    {
        id: 2,
        title: "Create Post",
        desc: "Share your images and videos easily.",
        icon: SquarePen,
    },
    {
      id: 3,
      title: "Follow peoples",
      desc: "Build your network and stay connect with friends.",
      icon: UserPlus,
    },
    {
      id: 4,
      title: "Real-time chat",
      desc: "Connect instantly with private & group messaging.",
      icon: MailPlus,
    },
  ]);

  return (
        <div className="p-10 flex  justify-around  ">
    <>
      {cards.map((card) => (

        <Card
          key={card.id}
          title={card.title}
          desc={card.desc}
          icon={card.icon}
          />
        ))}
    </>
        </div>
  );
}

export default Cards;
