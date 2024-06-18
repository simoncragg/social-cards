
import React, { useState } from "react";
import SlotCounter from "react-slot-counter";
import { FiHeart } from "react-icons/fi";
import { motion } from 'framer-motion';

import useAuth from "../hooks/useAuth";
import { addLikeAsync, removeLikeAsync } from "../services/FeedService";

interface LikesProps {
  postId: number;
  likes: number;
  isLiked: boolean;
}

const Likes: React.FC<LikesProps> = ({
  postId,
  likes,
  isLiked: liked,
}) => {

  const { userId } = useAuth();
  const [isLiked, setIsLiked] = useState(liked);
  const [likesTally, setLikesTally] = useState(likes);

  const toggleLike = async () => {
    const liked = !isLiked;
    if (liked) {
      setIsLiked(true);
      setLikesTally(likesTally + 1);
      await addLikeAsync(postId, userId);
    } else {
      setIsLiked(false);
      setLikesTally(likesTally - 1);
      await removeLikeAsync(postId, userId)
    }
  };

  return (
    <div className="flex items-center gap-1 ml-auto">
			<button type="button" className="outline-none" onClick={toggleLike}>
        <motion.div
          animate={{
            scale: isLiked ? [1, 2, 1] : [1, 1.5, 1],
            transition: { 
              duration: 0.3, 
              delay: 0.3
            }
          }}
        >
          <FiHeart className={`w-4 h-4 ml-auto ${isLiked ? "fill-red-500 stroke-red-900" : ""}`} />
        </motion.div>
			</button>
			<SlotCounter
				value={likesTally}
				charClassName="text-xs -mt-1"
				animateUnchanged={false}
				sequentialAnimationMode={true}
			/>
		</div>
  );
};

export default Likes;
