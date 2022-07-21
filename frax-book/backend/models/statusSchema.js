const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    private: {
        type: Boolean,
    },

    title: {
        type: String,
        required: false
    },

    details: {
        type: String,
        required: true
    },

    created_at: {
        type: String,
        default: Date.now()
    },

    created_by: {
        type: String,
        
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Status', statusSchema)