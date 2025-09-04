//Criar as rotas do CRUD

const express = require('express');
const Games = require('../models/Games');

const router = express.Router();

//POST
router.post('/', async (req, res, next) => {
    try {
        const aluno = await Games.create(req.body);
        return res.status(201).json(aluno);
    } catch (error) {
        next(error); //Criar a rota de interceptação
    }
});

//GET (lista de registros)

router.get('/', async (req, res, next) => {
    try {
        const { nome } = req.query;
        const filtro = {};
        if (nome) {
            filtro.nome = new RegExp(nome, "i");
        }
        const games = await Games.find(filtro).sort({ createdAt: -1 });
        return res.json(games);
    } catch (error) {
        next(error);
    }
});

//GET (único registro)

router.get('/:id', async (req, res, next) => {
    try {
        const aluno = await Games.findById(req.params.id);
        if(!aluno){
            return res.status(404).json({erro: "Registro não encontrado."});
        }
        return res.json(aluno);
    } catch (error) {
        next(error);
    }
});

//UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const games = await Games.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!games) {
            return res.status(404).json({ erro: "Game não encontrado para update." });
        }
        return res.json(games);
    } catch (error) {
        next(error);
    }
});

//DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const game = await Games.findByIdAndDelete(req.params.id);
        if(!game){
            return res.status(404).json({ erro: "Game não encontrado para remoção"});
        }
        return res.status(204).send();
    } catch (error) {
        next(error);
    }
})

module.exports = router;