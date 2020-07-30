import errorHandler from 'lib/error-handler';
import downvotePost from 'actions/downvote-post';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const response = downvotePost(req.body.id);
      console.log({ response });
      return res.send(response);
    }

    res.status(404);
    return res.end();
  } catch (err) {
    return errorHandler(res, err);
  }
};
