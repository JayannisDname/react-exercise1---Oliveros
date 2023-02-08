import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  return [...posts]
}

export function getPostsByUser(userId) {
  return posts.find((posts) => posts.userId === userId);
}

export function getPostById(id) {
  return posts.find((posts) => posts.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.

}

export function updatePostTitle(id, title) {
  //update post title
  var updateTitle = getPostById(id);
  updateTitle.title = title;
  return updateTitle;
}

export function updatePostBody(id, body) {
  //update post body
  var updateBody = getPostById(id);
  updateBody.body = body;
  return updateBody;
}

export function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  var updatePost = getPostById(id);
  updatePost.post = post;
  return updatePost;
}

export function deletePostBy(id) {
  //delete post by id
  return posts.filter((posts) => posts.id !== id);
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  return posts.filter((posts) => posts.userId !== userId);
}
