import type { PersonalisedPost } from "../data/Posts.ts";
import sleep from "./sleep";
import { addLikedPostAsync, removeLikedPostAsync, getUserAsync } from "./UserService.ts";
import { addPosts, getPosts } from "../data/Posts.ts";

async function getPersonalisedPostsAsync(userId: number): Promise<PersonalisedPost[]> {

  await sleep(1000);
  const user = await getUserAsync(userId);

  const posts = getPosts();
  return posts.map(post => {
    const isLiked = user.likedPostIds?.find(id => id === post.id) ?? false;
    return { ...post, isLiked } as PersonalisedPost;
  });
}

async function addPostAsync(req: { message: string; userId: number; }) {
  await sleep(100);
  const user = await getUserAsync(req.userId);
  //TODO: Do we need to getPosts to find the latest Id?
  const post = {
    id: 4, // will need to be auto generated.
    author: {
      id: user.id,
      username: user.username,
    },
    message: req.message,
    timestamp: new Date().getTime(),
    likes: 0
  };
  addPosts(post);
}

async function addLikeAsync(postId: number, userId: number): Promise<void> {
  await sleep(300);
  const posts = getPosts();
  const post = posts.find(post => post.id === postId);
  if (post) {
    post.likes++;
  }

  addLikedPostAsync({ userId, postId });
}

async function removeLikeAsync(postId: number, userId: number): Promise<void> {
  await sleep(300);
  const posts = getPosts();
  const post = posts.find(post => post.id === postId);
  if (post) {
    post.likes--;
  }

  removeLikedPostAsync({ userId, postId });
}

export { getPersonalisedPostsAsync, addPostAsync, addLikeAsync, removeLikeAsync };
