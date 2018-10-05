let shelters = require('../models/pet');

module.exports = {
  index: (req, res) => {
    shelters.find({}, (err, shelters) => {
      if (err) {
        return res.status(400).json(err.errors);
      }
      return res.json(shelters);
    }).sort({'type': 1, 'name': 1})
  },
  create: function (req, res) {
    var pet = new shelters({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      skills: req.body.skills
    });
    pet.save(function (err) {
      if (err) {
        console.log("We have an error!", err);
        return res.status(400).json(err.errors);
      } else {
        return res.json(pet);
      }
    });
  },
  update: function (req, res) {
    shelters.update({
      _id: req.params.id
    }, req.body, {runValidators: true, context: 'query'}, function (err, pet) {
      if (err) {
        console.log("We have an error!", err);
        return res.status(400).json(err.errors);
      } else {
        return res.json(pet);
      }
    });
  },
  delete: function (req, res) {
    shelters.remove({
      _id: req.params.id
    }, function (err) {
      if (err) {
        console.log("We have an error!", err);
        return res.status(400).json(err.errors);
      }
      return res.json("Pet removed successfully")
    });
  },
  info: function (req, res) {
    shelters.findOne({
      _id: req.params.id
    }, function (err, pet) {
      if (err) {
        return res.json({
          message: "testing"
        });
      }
      return res.json(pet)
    });
  },
  // likes: function (req, res) {
  //   shelters.update({
  //     _id: req.params.id
  //   }, req.body, {runValidators: true, context: 'query'}, function (err, pet) {
  //     if (err) {
  //       console.log("We have an error!", err);
  //       return res.status(400).json(err.errors);
  //     } else {
  //       return res.json(pet);
  //     }
  //   });
  // }
}