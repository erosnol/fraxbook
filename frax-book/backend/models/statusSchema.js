const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
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
        
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Status', statusSchema)