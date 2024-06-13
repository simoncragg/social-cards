import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import type { CardType } from "../services/Data";
import Card from "./Card";
import FloatingButton from "./FloatingButton";
import { getCardsAsync } from "../services/SocialCardService";
import { events } from "../constants";

const SocialFeed: React.FC = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const initCards = async () => {
      setIsLoading(true);
      setCards(await getCardsAsync());
      setIsLoading(false);
    };
    initCards();
    document.addEventListener(events.REFRESH_PAGE, () => initCards());
  }, []);

  return (
    <>
      { isLoading && <p className="text-xl mb-4">Loading...</p> }

      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          userId={card.userId}
          username={card.username}
          message={card.message}
          imagePath={card.imagePath}
          timestamp={card.timestamp}
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