const azureSqlDb = require('../dataAccess/azureSQLDB')
const sqlDataTypes = require('mssql').TYPES;

const fetchPostId = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchPostId', requestBodyParameters);
}

const fetchCommentId = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchCommentId', requestBodyParameters);
}

const insertPost = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('InsertPost', requestBodyParameters);
}

const createCommentOnPost = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('CreateCommentOnPost', requestBodyParameters);
}

const createPostId = async () => {        
    var requestBodyParameters = []
    var result = await fetchPostId(requestBodyParameters);
    if(result.length == 0 )
    {
        var postId = 'P-1'
        return postId; 
    }
    var id = result[0].PostId.slice(2);
    var updatedId = parseInt(id, 10) + 1
    var updatedPostId = 'P-' + updatedId.toString();
    return updatedPostId
}


const createCommentId = async () => {        
    var requestBodyParameters = []
    var result = await fetchCommentId(requestBodyParameters);
    if(result.length == 0 )
    {
        var commentId = 'C-1'
        return commentId; 
    }
    var id = result[0].CommentId.slice(2);
    var updatedId = parseInt(id, 10) + 1
    var updatedCommentId = 'C-' + updatedId.toString();
    return updatedCommentId
}
const createPostParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'PostId', type: sqlDataTypes.NVarChar, value: requestBody.postId});
    requestBodyParameters.push({ name: 'Title', type: sqlDataTypes.NVarChar, value: requestBody.title });
    requestBodyParameters.push({ name: 'Content', type: sqlDataTypes.NVarChar, value: requestBody.content });
    requestBodyParameters.push({ name: 'UserEmail', type: sqlDataTypes.NVarChar, value: requestBody.userEmail });
    requestBodyParameters.push({ name: 'CreatedBy', type: sqlDataTypes.NVarChar, value: requestBody.userEmail });
    requestBodyParameters.push({ name: 'UpdatedBy', type: sqlDataTypes.NVarChar, value: requestBody.userEmail });
  
    return requestBodyParameters
}

const likePostParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'PostId', type: sqlDataTypes.NVarChar, value: requestBody.postId});
    requestBodyParameters.push({ name: 'User2Email', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'CreatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'UpdatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
  
    return requestBodyParameters
}


const likePost = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('LikePost', requestBodyParameters);
}

const likeComment = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('LikeComment', requestBodyParameters);
}

const fetchPosts = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchPosts', requestBodyParameters);
}

const fetchLikeOnPost = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchLikeOnPost', requestBodyParameters);
}

const fetchCommentOnPost = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchCommentOnPost', requestBodyParameters);
}

const fetchLikeOnComment = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchLikeOnComment', requestBodyParameters);
}

const createCommentParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'CommentId', type: sqlDataTypes.NVarChar, value: requestBody.commentId});
    requestBodyParameters.push({ name: 'PostId', type: sqlDataTypes.NVarChar, value: requestBody.postId });
    requestBodyParameters.push({ name: 'Comment', type: sqlDataTypes.NVarChar, value: requestBody.comment });
    requestBodyParameters.push({ name: 'User2Email', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'CreatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'UpdatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
  
    return requestBodyParameters
}

const likeCommentParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'CommentId', type: sqlDataTypes.NVarChar, value: requestBody.commentId});
    requestBodyParameters.push({ name: 'User2Email', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'CreatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
    requestBodyParameters.push({ name: 'UpdatedBy', type: sqlDataTypes.NVarChar, value: requestBody.user2Email });
  
    return requestBodyParameters
}

const fetchPostParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'UserEmail', type: sqlDataTypes.NVarChar, value: requestBody.userEmail });
  
    return requestBodyParameters
}

const fetchLikeOnPostParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'PostId', type: sqlDataTypes.NVarChar, value: requestBody.postId });
  
    return requestBodyParameters
}

const fetchCommentOnPostParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'PostId', type: sqlDataTypes.NVarChar, value: requestBody.postId });
  
    return requestBodyParameters
}

const fetchLikeOnCommentParameters = async (requestBody) => {
    var requestBodyParameters = [];
    requestBodyParameters.push({ name: 'CommentId', type: sqlDataTypes.NVarChar, value: requestBody.commentId });
  
    return requestBodyParameters
}
module.exports = {
    createPostId,
    createPostParameters,
    insertPost,
    likePostParameters,
    likePost,
    createCommentId,
    createCommentOnPost,
    createCommentParameters,
    likeCommentParameters,
    likeComment,
    fetchPostParameters,
    fetchPosts,
    fetchLikeOnPost,
    fetchLikeOnPostParameters,
    fetchCommentOnPostParameters,
    fetchCommentOnPost,
    fetchLikeOnCommentParameters,
    fetchLikeOnComment
}