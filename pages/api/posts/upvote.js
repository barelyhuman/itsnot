import upvotePost from 'actions/upvote-post';
import errorHandler from 'lib/error-handler';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const response = await upvotePost(req.body.id);
      return res.send(response);
    }

    res.status(404);
    return res.end();
  } catch (err) {
    console.log(err);
    return errorHandler(res, err);
  }
};
