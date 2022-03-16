const express = require('express');
const router = express.Router({
    mergeParams: true
});
const feedController = require('../controllers/feedController');

// Log Time
router.use(function timeLog(req, res, next) {
    next();
});

router.get('/fetchPosts', feedController.fetchPostController);
router.post('/createPost', feedController.createPostController);
router.post('/likePost', feedController.likePostController);
router.post('/commentPost', feedController.commentPostController);
router.post('/likeComment', feedController.likeCommentController);
router.get('/fetchLikeOnPost', feedController.fetchLikeOnPostController);
router.get('/fetchCommentOnPost', feedController.fetchCommentOnPostController);
router.get('/fetchLikeOnComment', feedController.fetchLikeOnCommentController);

module.exports = router;