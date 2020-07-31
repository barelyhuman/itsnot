exports.up = function (knex) {
  return knex.schema.table('posts', function (table) {
    table.integer('votes').notNullable().defaultsTo(0);
    knex('posts').update('votes', 'posts.upvotes + posts.downvotes');
  });
};

exports.down = function (knex) {
  return knex.schema.table('posts', function (table) {
    return knex.schema.hasColumn('posts', 'votes').then((isExists) => {
      if (isExists) {
        table.dropColumn('votes');
      }
    });
  });
};
