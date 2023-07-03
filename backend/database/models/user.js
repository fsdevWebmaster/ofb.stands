import mongoose, { Schema } from "mongoose";

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  idDoc: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  accumulated: {
    type: Number,
    required: true
  }  
})

export default mongoose.model('User', User);