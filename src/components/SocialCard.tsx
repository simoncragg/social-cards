import React from 'react';

interface SocialCardProps {
    username: string;
    title?: string;
    message: string;
    userId: number;
}

const SocialCard: React.FC<SocialCardProps> = ({ username, title, message, userId }) => {
  return (
      <div className="border border-white p-4 rounded-xl mb-8">
        <img className="rounded-full w-12 h-12" data-testid={`profile-pic-${userId}`} src={`https://xsgames.co/randomusers/assets/avatars/pixel/${userId}.jpg`}/>
        <h1 className="text-3xl font-bold">{ username }</h1>
        {title && <p>{ title }</p>}
        <p>{ message }</p>
      </div>
  );
};

export default SocialCard;
