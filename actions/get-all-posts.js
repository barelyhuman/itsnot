import getDBInstance from 'lib/get-db-instance';

export default async function getAllPosts(offset = 0, limit = 10) {
  try {
    const db = getDBInstance();

    const data = await db('posts').where({}).offset(offset).limit(limit);

    return data;
  } catch (err) {
    throw err;
  }
}
