const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async (role = '') => {
    const  existsRole = await Role.findOne({ role }) ;
    if( !existsRole ) {
       throw new Error(`the rol ${ rol } not register form base date `) 
    }

  }
  

    // validate email witch  express-validator

    
    const isEmailValid = async (email = '') => {
       const existsEmail = await User.findOne( { email }) ;
        if ( existsEmail ) {
            throw new Error(`the email ${ email } , already registered `) 
            }
     }

    
  module.exports = {
    isRoleValid,
    isEmailValid
  }