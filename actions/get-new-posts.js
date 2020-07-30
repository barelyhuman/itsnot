import getDBInstance from 'lib/get-db-instance';

export default async function getNewPosts(offset = 0, limit = 10) {
  try {
    const db = getDBInstance();

    const data = await db('posts')
      .where({})
      .orderBy('created_at', 'desc')
      .offset(offset)
      .limit(limit);

    return data;
  } catch (err) {
    throw err;
  }
}
