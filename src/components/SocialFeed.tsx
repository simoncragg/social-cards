import React from "react";
import SocialCard from "./SocialCard";
import { getCards } from "../repositories/SocialCardRepository";
import { useNavigate } from "react-router-dom";
import FloatingButton from "./FloatingButton";
import { HiPlus } from "react-icons/hi";

const SocialFeed: React.FC = () => {
  const navigate = useNavigate();
  const cards = getCards();
  return (
    <>
      {cards.map((card) => (
        <SocialCard
          username={card.username}
          title={card.title}
          message={card.message}
          userId={card.userId}
        />
      ))}
      <FloatingButton ariaLabel= "compose-new-echo" onClick={() => navigate("/new-echo")} >
        <HiPlus className="w-6 h-6" />
      </FloatingButton>
    </>
  );
};

export default SocialFeed;
