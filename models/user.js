
const { Schema, model } = require('mongoose')

const UserSchema = Schema ({

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
        type: Boolean,
        default : true,
    },
    google : {
        type: Boolean,
        default : false,
    },

})

// change the name of the request response, hidden id and password
UserSchema.methods.toJSON = function () {
    const { __v, password, ...users } = this.toObject();
    return users;
}

module.exports = model( 'User', UserSchema ) ;