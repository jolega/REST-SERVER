
const { schema, model } = require('mongoose')

const userSchema = schema ({

    name : {
        type: String,
        required : [ true, 'the name required'],
    },
    email : {
        type: String,
        required : [ true, 'the email required'],
        unique: true
    },
    password : {
        type: String,
        required : [ true, 'the password required'],
    },
    img : {
        type: String,
    },
    role : {
        type: String,
        required : true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    status : {
        type: boolean,
        default : true,
    },
    google : {
        type: boolean,
        default : false,
    },

})

module.exports = model ('user', userSchema ) ;