var express = require('express');
var { User, Comment } = require('../models');

var router = express.Router();

router.get('/:id', function(req, res, next) {
    Comment.findAll({
        include: {
            model: User,
            where: { id: req.params.id },
        },
    })
        .then((comments) => {
            console.log(comments);
            res.json(comments);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.post('/', function(req, res, next) {
    Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
    })
        .then((result) => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.patch('/:id', function(req, res, next) {
    Comment.update({ comment: req.body.comment }, { where: { id: req.params.id } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.delete('/:id', function(req, res, next) {
    Comment.destroy({ where: { id: req.params.id } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;

// var express = require('express');
// var { User,Comment } = require('../models')
//
// var router = express.Router();
// router.route('/:id')
//     .get(async (req,res,next)=> {
//         try {
//             const comment =  await Comment.findAll({
//                 include:{
//                     model: User,
//                     where:{ id: req.params.id }
//                 }
//             });
//             console.log(comment)
//             await res.json(comment);
//         } catch (err) {
//             console.error(err);
//             next(err);
//         }
//     })
//     .patch(async (req,res,next) => {
//         try {
//             const comment = await Comment.update(
//                 { comment: req.body.comment },
//                 { where: { id: req.params.id } }
//             )
//             await res.json(comment);
//         } catch (err) {
//             console.error(err);
//             next(err);
//         }
//     })
//     .delete(async (req,res,next) => {
//         try {
//             const comment = await Comment.destroy(
//                 { where: {id : { id: req.params.id } } }
//             );
//             await res.json(comment);
//         } catch(err) {
//             console.log(err);
//             next(err);
//         }
//     })
// router.post('/',async (req,res,next) => {
//     try {
//         const comment = await Comment.create({
//             commenter: req.body.id,
//             comment: req.body.comment
//         });
//         console.log(comment);
//         await res.status(201).json(comment);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// });
