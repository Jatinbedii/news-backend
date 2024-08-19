import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: false, 
  },
  createdBy: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], 
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;