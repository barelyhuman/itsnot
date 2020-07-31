import getDBInstance from 'lib/get-db-instance';

export default async function downvotePost(postId) {
  try {
    const db = getDBInstance();

    if (!postId) {
      throw {
        status: 400,
        error: 'Cannot Update without a postId',
      };
    }

    const data = await db('posts')
      .where('id', '=', postId)
      .decrement('downvotes', 1)
      .returning('id');

    return data;
  } catch (err) {
    throw err;
  }
}
