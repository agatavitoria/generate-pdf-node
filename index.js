const express = require("express");
const app = express();
const pdf = require("html-pdf");
const ejs = require("ejs");

app.use(express.json());

app.post("/create", function(req, res) {
  const { nome, curso, categoria } = req.body;

  try {
    ejs.renderFile(
      "./meuarquivo.ejs",
      { nome: nome, curso: curso, categoria: categoria },
      (err, html) => {
        if (err) {
          throw new Error("Erro ao renderizar html");
        } else {
          pdf.create(html, {}).toFile("./contrato.pdf", (err, resul) => {
            if (err) {
              throw new Error("Erro ao criar pdf");
            }
          });
        }
      }
    );

    return res.json({
      status: 1,
      msg: "PDF criado"
    });
  } catch (err) {
    return res.json({
      status: 2,
      msg: err.message
    });
  }
});

app.listen(3000);
