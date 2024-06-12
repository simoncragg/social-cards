import React, { useEffect, useState } from "react";
import SocialCard from "./SocialCard";
import type { Card } from "../services/SocialCardService";
import { getCardsAsync } from "../services/SocialCardService";
import { useNavigate } from "react-router-dom";
import FloatingButton from "./FloatingButton";
import { HiPlus } from "react-icons/hi";

const SocialFeed: React.FC = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initCards = async () => {
      setCards(await getCardsAsync());
      setIsLoading(false);
    };
    initCards();
  }, []);

  return (
    <>
      { isLoading && <p className="z-90 text-3xl">Loading...</p> }

      {cards.map((card) => (
        <SocialCard
          username={card.username}
          title={card.title}
          message={card.message}
          userId={card.userId}
        />
      ))}

      <FloatingButton
        ariaLabel="compose-new-echo"
        onClick={() => navigate("/new-echo")}
      >
        <HiPlus className="w-6 h-6" />
      </FloatingButton>
    </>
  );
};

export default SocialFeed;
