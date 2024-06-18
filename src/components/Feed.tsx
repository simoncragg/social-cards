import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import type { PersonalisedPost } from "../data/Posts";
import Card from "./Card";
import FloatingButton from "./FloatingButton";
import useAuth from "../hooks/useAuth";
import { getPersonalisedPostsAsync } from "../services/FeedService";
import { events } from "../constants";

const Feed: React.FC = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PersonalisedPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const initCards = async () => {
      setIsLoading(true);
      setPosts(await getPersonalisedPostsAsync(userId));
      setIsLoading(false);
    };
    initCards();
    document.addEventListener(events.REFRESH_PAGE, () => initCards());
  }, [userId]);

  return (
    <>
      { isLoading && <p className="text-xl mb-4">Loading...</p> }

      {posts.map(post => (
        <Card key={post.id} post={post} />
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

export default Feed;