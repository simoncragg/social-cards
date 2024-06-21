import type { User } from "../data/User.ts";
import { user } from "../data/User.ts";
import sleep from "./sleep";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getUserAsync(_: number): Promise<User> {
  await sleep(1000);
  return user;
}

async function addLikedPostAsync(req: { userId: number, postId: number }) {
  const { userId, postId } = req;
  const user = await getUserAsync(userId);
  const likedPosts = [...user.likedPostIds ?? [], postId];
  const distinctPosts = [...new Set(likedPosts)];
  user.likedPostIds = distinctPosts;
}

async function removeLikedPostAsync(req: { userId: number; postId: number }) {
  const { userId, postId } = req;
  const user = await getUserAsync(userId);
  user.likedPostIds = user.likedPostIds?.filter(id => id !== postId) ?? [];
}

export { getUserAsync, addLikedPostAsync, removeLikedPostAsync };
