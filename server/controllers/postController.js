import { v2 as cloudinary } from 'cloudinary'
import catchAsync from '../utils/catchAsync.js'
import Post from '../models/post.js'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find({})

  res.status(200).json({
    success: true,
    data: posts,
  })
})

const createPost = catchAsync(async (req, res, next) => {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });

})

export default {
  getPosts,
  createPost,
}
