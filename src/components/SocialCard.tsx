import React from "react";

interface SocialCardProps {
  username: string;
  title?: string;
  message: string;
  userId: number;
}

const SocialCard: React.FC<SocialCardProps> = ({
  username,
  title,
  message,
  userId,
}) => {
  return (
    <div className="flex flex-col border border-white p-4 rounded-xl mb-8 items-start bg-white/10">
      <div className="flex items-center mb-2">
        <img
          className="rounded-full w-6 h-6"
          data-testid={`profile-pic-${userId}`}
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/${userId}.jpg`}
        />
        <span className="text-xl font-bold ml-4">{username}</span>
      </div>
      {title && <p className="font-semibold">{title}</p>}
      <p>{message}</p>
    </div>
  );
};

export default SocialCard;
