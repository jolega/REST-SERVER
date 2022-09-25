const { response } = require('express')
const  User  = require ('../models/user');
const  bcryptjs = require('bcryptjs');
const user = require('../models/user');




const userGet =  async (req, res = response) => {
const query = { status : true  }

const {limit = 5, since = 0 } = req.query 

    const [count, users] = await Promise.all([
      User.countDocuments( query ),
      User.find(query )
        .skip(Number( since ))
        .limit(Number( limit ))
    ])

    res.json({
      count,
      users,
    });

  }

  const userPut = async (req, res = response) => {


    const id  = req.params.id
    const { _id, password, google, email,  ...rest } = req.body;

    if(password) {

          // encrypt password  with  bcryptjs
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync( password , salt )

    }

    const userUpdate = await User.findByIdAndUpdate ( id , rest )

    res.json(userUpdate);
  }
  
const userPost = async ( req, res = response) => {




   // const { google, ...rest } = req.body; // exclude fields 
   const { name, email, password, role } = req.body;
   const user = new User({ name, email, password, role} );
 
    // encrypt password  with  bcryptjs
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password , salt )

 //   const body = req.body;
//    const user = new User( body ); // create instance
    user.save(); // save in mongo

    res.status(201).json({
        msg: 'post API - controller',
        user
    });
  }

const userDelete = async (req, res  = response) => {
  const id  = req.params.id
  const user = await User.findByIdAndDelete ( id ) ;
  res.json({
        id,
        msg: `the record with id ${id}  was deleted`,
        user
    });
  }

const userInactive = async (req, res  = response) => {
    const id  = req.params.id
    const user = await User.findByIdAndUpdate( id, { status : false } ) ;
    res.json({
          id,
          msg: `the record with id ${id}  was inactive`,
          user
      });
    }

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
  }

  module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch,
    userInactive,
  }