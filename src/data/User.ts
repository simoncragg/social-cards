export interface User {
  id: number
  username: string;
  likedPostIds?: number[];
}

export const user: User = {
  id: 24,
  username: "novice@frontend",
  likedPostIds: [1]
};
