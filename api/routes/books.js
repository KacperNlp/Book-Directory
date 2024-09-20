import express from 'express';

const router = express.Router();

const books = [
    {
        id: 1,
        title: 'Example title',
        author: 'Adam Example',
        category: ['horror']
    },
    {
        id: 2,
        title: 'Wiedźmin',
        author: 'Andrzej Sapkowski',
        category: ['fantasy']
    },
    {
        id: 3,
        title: 'Pan Wołodyjowski',
        author: 'Henryk Sienkiewicz',
        category: ['history', 'Sci-fun']
    },
    {
        id: 4,
        title: 'Narnia',
        author: 'example',
        category: ['history']
    }
]

router.get('/', (req, res) => {
    res.json(books)
})

export default router;


