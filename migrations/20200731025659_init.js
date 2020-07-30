exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.integer('id').increment().unique().notNullable();
    table.text('position').notNullable();
    table.text('what_it_is').notNullable();
    table.text('what_it_is_not').notNullable();
    table.integer('upvotes').notNullable().defaultTo(0);
    table.integer('downvotes').notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};
