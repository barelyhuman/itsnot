import getDBInstance from 'lib/get-db-instance';

export default async function createPost(position, whatItIs, whatItIsNot) {
  try {
    const db = getDBInstance();

    if (!position) {
      throw {
        status: 400,
        error: 'You forgot to tell us the position you want to define',
      };
    }

    if (!whatItIs) {
      throw {
        status: 400,
        error: 'You forgot to tell us what it is.',
      };
    }

    if (!whatItIsNot) {
      throw {
        status: 400,
        error: "You forgot to tell us what it's not",
      };
    }

    const record = {
      position,
      what_it_is: whatItIs,
      what_it_is_not: whatItIsNot,
    };
    const data = await db('posts').insert(record);
    return data;
  } catch (err) {
    throw err;
  }
}
