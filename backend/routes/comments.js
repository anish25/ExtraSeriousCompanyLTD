const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req,res)=>{
    Comment.find()
        .then(comments=>res.json(comments))
        .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/add').post((req,res)=>{
    const incidentNumber = req.body.incidentNumber;
    const comment = req.body.comment;

    const newComment = new Comment({incidentNumber,comment});
    newComment.save()
        .then(()=>res.json('Comment added!'))
        .catch(err=>res.status(400).json("Error:"+err));
});

module.exports = router;