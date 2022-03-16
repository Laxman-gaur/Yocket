const logger = require('../logger');
const feedService = require('../service/feedService');

// This Controller is user to create new post
const createPostController = async (req, res) => {
    try {
      logger.feedLogger.info("Request is Processing");
      // For Every Post There is a Unique Post Id
      var postId = await feedService.createPostId();
      req.body['postId'] = postId;
      // This is used to create stored procedure parameters.
      var requestBodyParameters = await feedService.createPostParameters(req.body);
      // This is used to call insertPost stored procedure
      var createPostResponse = await feedService.insertPost(requestBodyParameters);
      var response = {
        data : {},
        message : "Success"
    }
      logger.feedLogger.info("Request Processed Successfully");
      res.status(200);
      res.send(response);
    }
    catch (error) {
      logger.feedLogger.error(`Error encountered: ${error}`);
      res.status(403);
      var message = { message: error.message };
      res.send(message);
    }
  }

// This Controller is user to like a post
const likePostController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.likePostParameters(req.body);
      // This is used to call likePost stored procedure    
    var likePostResponse = await feedService.likePost(requestBodyParameters);
    var response = {
      data : {},
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}
  
// This Controller is user to create new comment
const commentPostController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // For Every Comment There is a Unique Comment Id
    var commentId = await feedService.createCommentId();
    req.body['commentId'] = commentId;
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.createCommentParameters(req.body);
    // This is used to call createCommentOnPost stored procedure
    var createPostResponse = await feedService.createCommentOnPost(requestBodyParameters);
    var response = {
      data : {},
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}

// This Controller is used to like comment
const likeCommentController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.likeCommentParameters(req.body);
      // This is used to call likeComment stored procedure    
    var likeCommentResponse = await feedService.likeComment(requestBodyParameters);
    var response = {
      data : {},
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}
 
// This Controller is used to fetch posts
const fetchPostController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.fetchPostParameters(req.query);
      // This is used to call fetchPost stored procedure    
    var fetchPosts = await feedService.fetchPosts(requestBodyParameters);
 
    var response = {
      data : fetchPosts,
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}

// This Controller is used to fetch like on posts
const fetchLikeOnPostController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.fetchLikeOnPostParameters(req.query);
      // This is used to call fetchLikeOnPost stored procedure    
    var likesList = await feedService.fetchLikeOnPost(requestBodyParameters);
 
    var response = {
      data : likesList,
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}

// This Controller is used to fetch comment on posts
const fetchCommentOnPostController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.fetchCommentOnPostParameters(req.query);
      // This is used to call fetchCommentOnPost stored procedure    
    var commentsList = await feedService.fetchCommentOnPost(requestBodyParameters);
 
    var response = {
      data : commentsList,
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}


// This Controller is used to fetch like on comments
const fetchLikeOnCommentController = async (req, res) => {
  try {
    logger.feedLogger.info("Request is Processing");
    // This is used to create stored procedure parameters.
    var requestBodyParameters = await feedService.fetchLikeOnCommentParameters(req.query);
      // This is used to call fetchLikeOnComment stored procedure    
    var likesList = await feedService.fetchLikeOnComment(requestBodyParameters);
 
    var response = {
      data : likesList,
      message : "Success"
  }
    logger.feedLogger.info("Request Processed Successfully");
    res.status(200);
    res.send(response);
  }
  catch (error) {
    logger.feedLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}

module.exports = {
    createPostController,
    likePostController,
    commentPostController,
    likeCommentController,
    fetchPostController,
    fetchLikeOnPostController,
    fetchCommentOnPostController,
    fetchLikeOnCommentController
};