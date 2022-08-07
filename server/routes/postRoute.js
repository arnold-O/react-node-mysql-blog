const express = require('express')
const { creatPost, getAllPost } = require('../controllers/postController')

const router = express.Router()


router.post('/', creatPost)
router.get('/', getAllPost)









module.exports = router