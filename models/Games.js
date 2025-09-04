//Criar um schema para Game
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        título: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [1, "Nome muito curto"],
            maxlength: [100, "Nome muito longo"]
        },
        gênero: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [1, "Nome muito curto"],
            maxlength: [100, "Nome muito longo"]

        },
        plataforma: {
            type: String,
            required: [true, "Este campo é obrigatório"],
        },
        lançamento: {
            type: Number,
            min: [0, "Lançamento não pode ser negativo"],
        }
    },
    { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;