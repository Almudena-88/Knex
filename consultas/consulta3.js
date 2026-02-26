const db = require('../db');

async function listarLibros() {
    try {
        const libros = await db('libro')
            .where('id', 1)
            .update({
                autor: 'Alberto',
                nombre: 'Sol'
            })
        console.log(libros)

    } catch (err) {
        console.error(err)
    } finally {
        await db.destroy()
    }
}
listarLibros();