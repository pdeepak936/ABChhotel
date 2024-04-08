const mongoose = require('mongoose');

const { Schema } = mongoose;

const formDataSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  cardId:{
    type: Number,
  },
  delay: {
    type: String 
  },
  rating: {
    type: Number
  },
  task: {
    type: String,
    required: true
  },
  selectedDateTime: {
    type: String,
    required: true
  },
  serviceRequest: {
    type: String
  },
  itemRequest: {
    type: String
  },
  status: { 
    type: String, 
    enum: ['Not Accepted', 'Ongoing', 'Scheduled', 'Completed', 'Delayed', 'Ontime'] },
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

module.exports = FormDataModel;
