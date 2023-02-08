import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getCommentById(id) {    
  return comments.find((comments) => comments.id === id);
}

export function getCommentsByPostId(postId) {
  var postIdComments = comments.filter((comments) => comments.postId === postId);
  return postIdComments;
}

export function updateCommentBody(id, body) {
    var updateCom = getCommentById(id);
      updateCom.body = body;
      return updateCom;
  }

export function deleteCommentById(id) {
  return comments.filter((comment) => comment.id !== id);
}

export function addComment(comment) {
  // add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  var newId = generateId();
  newRecord(comment, newId);
  return getCommentById(newId);
}

var newRecord = (comment, newId) => {
    comments.push({postId: comment.postId, id: newId, 
                        name: comment.name, email: comment.email, body: comment.body});

}

function generateId(){
  return comments[comments.length - 1].id++;
}


