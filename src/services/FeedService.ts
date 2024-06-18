import type { Post, PersonalisedPost } from "../data/Posts.ts";
import sleep from "./sleep";
import { addLikedPostAsync, removeLikedPostAsync, getUserAsync } from "./UserService.ts";
import { posts } from "../data/Posts.ts";

async function getPersonalisedPostsAsync(userId: number): Promise<PersonalisedPost[]> {

  await sleep(1000);
  const user = await getUserAsync(userId);

  return posts.map(post => {
    const isLiked = user.likedPostIds.find(id => id === post.id);
    return { ...post, isLiked };
  });
}

async function addCardAsync(post: Post) {
  posts.push(post);
}

async function addLikeAsync(postId: number, userId: number): Promise<void> {

  await sleep(300);
  const post = posts.find(post => post.id === postId);
  if (post) {
    post.likes++;
  }

  addLikedPostAsync({ userId, postId });
}

async function removeLikeAsync(postId: number, userId: number): Promise<void> {

  await sleep(300);
  const post = posts.find(post => post.id === postId);
  if (post) {
    post.likes--;
  }

  removeLikedPostAsync({ userId, postId });
}

export { getPersonalisedPostsAsync, addCardAsync, addLikeAsync, removeLikeAsync };
