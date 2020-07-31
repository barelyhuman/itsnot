import getHotPosts from 'actions/get-hot-posts';
import errorHandler from 'lib/error-handler';

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const response = await getHotPosts();
      return res.send(response);
    }

    res.status(404);
    return res.end();
  } catch (err) {
    return errorHandler(res, err);
  }
};
