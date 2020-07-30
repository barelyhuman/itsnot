import errorHandler from 'lib/error-handler';
import upvotePost from 'actions/upvote-post';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const response = upvotePost(req.body.id);
      console.log({ response });
      return res.send(response);
    }

    res.status(404);
    return res.end();
  } catch (err) {
    return errorHandler(res, err);
  }
};
