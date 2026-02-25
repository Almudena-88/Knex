/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Alberto', age: 34},
    {id: 2, name: 'Lara', age: 25},
    {id: 3, name: 'Manuel', age: 21}
  ]);
};
