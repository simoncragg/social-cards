import { useState } from 'react';

// Only partially implemented for this kata
const useAuth = () => {
  const [userId] = useState<number>(24);
  return { userId };
};

export default useAuth;
