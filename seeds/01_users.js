/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Alberto', age: 30},
    {id: 2, name: 'Lara', age: 29},
    {id: 3, name: 'Manuel', age: 31}
  ]);
};
