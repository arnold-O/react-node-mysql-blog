const {Posts} = require("../models")




exports.creatPost = async (req, res)=>{


    const { title, postText, username} = req.body

    const newPost = await Posts.create({
        title,
        postText,
        username

    })


    res.json({
        newPost
    })
}

exports.getAllPost = async (req, res)=>{


    const { title, postText, username} = req.body

    const newPost = await Posts.findAll()
        

    res.json({
        newPost
    })
}