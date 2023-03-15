var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(express.static('html'));

var data = {};
var id = 0;

app.post('/Annotations', (req, res) => {
  var body = req.body;
  data[id]=body;
  // Sauvegarde de l'annotation dans data
  console.log(data);
  id++;
  res.redirect('Formulaire');
});

app.get('/Formulaire', (req, res) => {
    res.render('form');
  });

/*
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}); */

app.listen(port, function(){
    console.log('serveur listening on port : ' + port);
});