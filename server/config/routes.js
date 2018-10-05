var path = require('path'),
  pets = require('../controllers/pets.js');
// var mongoose = require('mongoose'),
// Task = mongoose.model('Task')

module.exports = function (app) {
  app.get('/servpets', pets.index);
  app.post('/servpets/new', pets.create);
  app.patch('/servpets/:id/edit', pets.update);
  app.delete('/servpets/:id', pets.delete);
  app.get('/servpets/:id/', pets.info);

  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });
}