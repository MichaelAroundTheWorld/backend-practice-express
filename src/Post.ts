import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export type PostType = {
  _id: string;
  author: string;
  title: string;
  content: string;
  __v: number;
};

export default mongoose.model('Post', Post);
