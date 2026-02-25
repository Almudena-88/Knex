const db = require('./db');

async function listar() {
    try {
        const tabla = await db('libro')
            .insert({
                id: 5,
                nombre: 'Las vacaciones',
                autor: 'Alicia'
            });
        console.log(tabla);
    } catch (err) {
        console.error(err);

    } finally {
        await db.destroy()
    }
}
listar();