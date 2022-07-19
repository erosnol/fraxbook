const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    private: {
        type: Boolean,
        
    },

    title: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    created_by: {
        type: String,
        
    }
})

module.exports = mongoose.model('Blog', blogSchema)