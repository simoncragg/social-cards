import React from "react";
import { FaRegComment } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

interface CardProps {
  id: number;
  userId: number;
  username: string;
  message: string;
  imagePath?: string;
  timestamp: number;
}

const Card: React.FC<CardProps> = ({
  userId,
  username,
  message,
  imagePath,
  timestamp,
}) => {
  return (
    <div className="flex flex-col w-full bg-white/50 text-sky-800 pt-2 px-2 pb-1 b-8 items-start mb-2 rounded-md gap-2 md:w-1/2">
      <div className="flex items-center">
        <img
          className="rounded-full w-6 h-6"
          data-testid={`profile-pic-${userId}`}
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/${userId}.jpg`}
        />
        <span className="text-lg font-semibold ml-2">{username}</span>
      </div>
      <p>{message}</p>
      <div className="flex w-full justify-center items-center">
      </div>

      <div className="flex w-full justify-between items-center gap-4">
        <p className="text-xs">{`Echoed: ${new Date(timestamp).toLocaleDateString()} ${new Date(timestamp).toLocaleTimeString()}`}</p>
        <div className="flex items-center gap-2 ml-auto">
          <FiHeart className="w-4 h-4 ml-auto" />
          <span>0</span>
        </div> 
        <div className="flex items-center gap-2">
          <FaRegComment className="w-4 h-4"></FaRegComment>
          <span>0</span>
        </div> 
      </div>
    </div>
  );
};

export default Card;