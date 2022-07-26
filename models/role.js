const { Schema, model } = require('mongoose')


const RoleSchema = Schema ({

    role : {
        type: String,
        required : [ true, 'the role required']
    },

 });

 module.exports = model( 'Role', RoleSchema ) ;