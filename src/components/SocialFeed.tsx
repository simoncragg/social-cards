import React from "react";
import SocialCard from "./SocialCard";
import getCards from "../repositories/SocialCardRepository";

const SocialFeed: React.FC = () => {
  const cards = getCards();

  return cards.map((card) => (
    <SocialCard
      username={card.name}
      title={card.title}
      message={card.message}
      userId={card.userId}
    />
  ));
};

export default SocialFeed;
