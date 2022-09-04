const mongoose = require('mongoose')

//Schema
const booksSchema = new mongoose.Schema ({
    title: {
        type: String
        
    },
    description: {
        type: String
    },
    year: {
        type: Number
        
    },
    Quantity: {
        type: Number
        
    },
    imageURl: {
        type: String,
        default: "https://www.press.uillinois.edu/books/images/no_cover.jpg"
    }
})

//model and export

module.exports = mongoose.model('Books', booksSchema);