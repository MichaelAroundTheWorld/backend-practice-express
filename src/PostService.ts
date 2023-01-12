import Post from './Post';
import { PostType } from './Post';

class PostService {
  async create(post: PostType) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const foundPosts = await Post.find();
    return foundPosts;
  }

  async getOne(id: string) {
    if (!id) throw new Error('ID was not provided');
    const post = await Post.findById(id);
    return post;
  }

  async update(post: PostType) {
    if (!post._id) {
      throw new Error('ID was not provided');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id: string) {
    if (!id) {
      return new Error('ID was not provided');
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
