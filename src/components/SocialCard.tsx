import React from 'react';

interface SocialCardProps {
    //TODO add propeties and types
    name: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ name }) => {
  return (
      <div>
        <p>{ name }</p>
      </div>
  );
};

export default SocialCard;
