import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
    name: {
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

const Topic = mongoose.model("Topic", topicSchema)

export default Topic