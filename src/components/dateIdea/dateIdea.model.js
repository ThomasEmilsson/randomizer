import mongoose from 'mongoose'

const dateIdeaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 60,
  },
  location: {
    type: String,
    required: false,
    trim: true,
    maxLength: 60,
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxLength: 200,
  },
  price: {
    type: String,
    enum: ['$', '$$', '$$$'],
    default: '$',
  },
  topics: {
    type: [String],
    required: false,
  },
  type: {
    type: [String],
    enum: [
      'Romantic',
      'Casual',
      'Fun',
      'Cozy',
      'Relaxing',
      'Outdoors',
      'Adventure',
      'New',
    ],
  },
  //   created_by: {
  //     type: mongoose.SchemaTypes.ObjectId,
  //     ref: 'user',
  //     required: true,
})

const DateIdea = mongoose.model('dateIdea', dateIdeaSchema)

export { DateIdea }
