import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
      }   
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

const User = mongoose.model("User", userSchema)
