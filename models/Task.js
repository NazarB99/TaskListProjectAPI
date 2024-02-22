const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String, required: true },
  completed: { type: Boolean, default: false },
  isImportant: {type: Boolean, required: true },
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
