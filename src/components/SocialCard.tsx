import React from 'react';

interface SocialCardProps {
    username: string;
    title?: string;
    message: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ username, title, message }) => {
  return (
      <div className="border border-white p-4 rounded-xl">
        <h1 className="text-3xl font-bold">{ username }</h1>
        {title && <p>{ title }</p>}
        <p>{ message }</p>
      </div>
  );
};

export default SocialCard;
