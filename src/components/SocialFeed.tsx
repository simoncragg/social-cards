import React from "react";
import SocialCard from "./SocialCard";

const SocialFeed: React.FC = () => {
  const cards = [
    {
      name: "Test",
      title: "Test Title",
      message: "Test Message",
    },
    {
      name: "Another Test",
      title: "You guessed it, another test title",
      message: "woah something different!",
    },
    {
       name: "TheNovice@FrontEnd",
       title: "Despite it not being my usual tech stack, this isn't too bad",
       message: "10/10 would recommend pairing with Simon.",
    }
  ];

  return cards.map((card) => (
    <SocialCard
      username={card.name}
      title={card.title}
      message={card.message}
    />
  ));
};

export default SocialFeed;
