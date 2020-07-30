import getAllPosts from 'actions/get-all-posts';
import createPost from 'actions/create-post';

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const response = getAllPosts();
      console.log({ response });
      return res.send(response);
    } else if (req.method === 'POST') {
      const response = createPost(
        req.body.position,
        req.body.whatItIs,
        req.body.whatItsNot
      );
      console.log({ response });
      return res.send(response);
    }

    res.status(404);
    return res.end();
  } catch (err) {
    return errorHandler(res, err);
  }
};
