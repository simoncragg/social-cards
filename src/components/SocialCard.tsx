import React from 'react';

interface SocialCardProps {
    //TODO add propeties and types
    name: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ name }) => {
  return (
      <div className="border border-white p-4 rounded-xl">
        <h1 className="text-3xl font-bold">{ name }</h1>
      </div>
  );
};

export default SocialCard;
