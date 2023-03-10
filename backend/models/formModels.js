const mongoose = require('mongoose')

const formSchema = mongoose.Schema(
  {
  
text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    email: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    message: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Form', formSchema)
