const express = require('express');
const faunadb = require('faunadb');

const app = express();
app.use(express.json());

const q = faunadb.query;

// Configuración del cliente de FaunaDB
const client = new faunadb.Client({ 
    secret: 'fnAFuqYbdwAAQonCnTe4x_ZgcimxrsX2HXMpXYwD', // Reemplaza con tu clave secreta
    domain: 'db.fauna.com',
    port: 443,
    scheme: 'https'
});

// Obtener todos los documentos de una colección
app.get('/collections/:name/documents', async (req, res) => {
    const { name } = req.params;
    try {
        const documents = await client.query(
            q.Paginate(q.Documents(q.Collection(name)))
        );
        res.json(documents.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las colecciones
app.get('/collections', async (req, res) => {
    try {
        const collections = await client.query(
            q.Paginate(q.Collections())
        );
        res.json(collections.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
