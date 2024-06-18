import React from "react";
import { FaRegComment } from "react-icons/fa";

import type { PersonalizedPost } from "../data";
import Likes from "./Likes";

interface CardProps {
  post: PersonalizedPost;
}

const Card: React.FC<CardProps> = ({ 
  post: { 
    id: postId,
    author,
    message,
    imagePath,
    timestamp,
    likes,
    isLiked,
  }
 }) => {

  return (
    <div className="flex flex-col w-full bg-white/50 text-sky-800 pt-2 px-2 pb-1 b-8 items-start mb-2 rounded-md gap-2 md:w-1/2">
      <div className="flex items-center">
        <img
          className="rounded-full w-6 h-6"
          data-testid={`profile-pic-${author.id}`}
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/${author.id}.jpg`}
        />
        <span className="text-lg font-semibold ml-2">{author.username}</span>
      </div>
      <p>{message}</p>
      <div className="flex w-full justify-center items-center">
        { imagePath && <img src={imagePath} alt={"?"} data-testid={`posted-image-${postId}`} /> }
      </div>

      <div className="flex w-full justify-between items-center gap-4">

        {/* Posted time */}
        <p className="text-xs">{`Echoed: ${new Date(timestamp).toLocaleDateString()} ${new Date(timestamp).toLocaleTimeString()}`}</p>
        
        {/* Likes */}
        <Likes postId={postId} likes={likes} isLiked={isLiked} />

        {/* Comments */}
        <div className="flex items-center gap-1">
          <FaRegComment className="w-4 h-4"></FaRegComment>
          <span className="text-xs">0</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
