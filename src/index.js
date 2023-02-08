//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, addUser } from "./services/users";
import { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById, addComment } from "./services/comments";
import { getPosts, getPostsByUser, getPostById, updatePostTitle, updatePostBody, updatePost, deletePostBy, deletePostsByUserId } from "./services/posts";

//comments
console.log(getCommentById(501));
console.log(getCommentsByPostId(2));
console.log(updateCommentBody(1, "new update comment"));
console.log(deleteCommentById(1));

let commentsObj = {postId : 1, name : "hij uyh play jla", email : "sample@gmail.com", body : "additional comment"};
console.log(addComment(commentsObj));

//posts
console.log(getPosts(1));
console.log(getPostsByUser(1));
console.log(getPostById(1));
console.log(updatePostTitle(1, "The new title"));
console.log(updatePostBody(1, "The new body"));
console.log(updatePost(1, "The new post"));
console.log(deletePostBy(1));
console.log(deletePostsByUserId(1));

// users
console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });

