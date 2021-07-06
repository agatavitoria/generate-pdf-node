var pdf = require('html-pdf');
var ejs = require('ejs');

var nomeDoUsuario = "Agata Lima";
var curso = "Formação Node.js";
var categoria = 'JavaScript';

ejs.renderFile("./meuarquivo.ejs", {
    nome: nomeDoUsuario,
    curso: curso,
    categoria: categoria,
}, (err, html) => {
    if (err) {
        console.log('ERRO!');
    } else {

        pdf.create(html, {}).toFile("./meupdf.pdf", (err, res) => {
            if (err) {
                console.log("UM ERRO ACONTECEU");
            } else {
                console.log(res);
            }
        });

    }
});