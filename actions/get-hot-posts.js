import getDBInstance from 'lib/get-db-instance';

export default async function getHotPosts(offset = 0, limit = 10) {
  try {
    const db = getDBInstance();

    const data = await db('posts')
      .where({})
      .orderBy('upvotes', 'desc')
      .offset(offset)
      .limit(limit);

    return data;
  } catch (err) {
    throw err;
  }
}
