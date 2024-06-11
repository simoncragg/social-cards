import React from "react";
import SocialCard from "./SocialCard";
import { getCards } from "../repositories/SocialCardRepository";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
      <button type="button" onClick={() => navigate("/new-echo")}>
        <FiPlusCircle className="w-8 h-8 text-cyan-500" />
      </button>{" "}
    </>
  );
};

export default SocialFeed;
