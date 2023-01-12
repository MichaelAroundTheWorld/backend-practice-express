import Post from './Post';
import express from 'express';
import PostService from './PostService';

class PostContoller {
  async create(req: express.Request, res: express.Response) {
    try {
      const post = await PostService.create(req.body);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req: express.Request, res: express.Response) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostContoller();
