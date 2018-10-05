var mongoose = require('mongoose');

// var TaskSchema = new mongoose.Schema({
var ShelterSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: "Name is required",
    min: [2, "Name needs to be greater than 3 characters"]
  },
  type: {
    type: String,
    default: '',
    required: "Type of animal is required",
    min: [2, "Type of animal needs to be greater than 3 characters"]
  },
  description: {
    type: String,
    default: '',
    required: "Description of animal is required",
    min: [2, "Description of animal needs to be greater than 3 characters"]
  },
  skills: {
    type: String,
    default: '',
    required: "Skills of animal is required",
    min: [2, "Skills of animal needs to be greater than 3 characters"]
  },
  likes: {
    type: String,
    default: '',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Shelters', ShelterSchema);
// module.exports = mongoose.model('Task', TaskSchema);