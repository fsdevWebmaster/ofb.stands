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
}, {
  virtuals: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
      return ret;
    }
  }
});

export default mongoose.model('User', User);