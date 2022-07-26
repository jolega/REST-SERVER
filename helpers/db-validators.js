const Role = require('../models/role');

const isRoleValid = async (role = '') => {
    const  existsRole = await Role.findOne({ role }) ;
    if( !existsRole ) {
       throw new Error(`the rol ${ rol } not register form base date `) 
    }

  }

  module.exports = {
    isRoleValid
  }