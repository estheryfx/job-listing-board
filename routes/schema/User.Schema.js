const Schema = require('mongoose').Schema;


exports.UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        favorites: {
            type: Array,
            default: [],
        },
        // list: {
        //     type: Array,
        // }
    },
    {
        collection: 'users'
    },
)