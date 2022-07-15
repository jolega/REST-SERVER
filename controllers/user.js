const { response } = require('express')
const  User  = require ('../models/user');


const userGet = (req, res = response) => {

    const {greeting, id , page = 1, limit } = req.query

    res.json({
        msg: 'get API -  controller',
        greeting,
        id,
        page,
        limit,
    });

  }

  const userPut = (req, res = response) => {

    const id = req.params.id
    const body = req.body;

    res.json({
        msg: 'put API - controller ',
        body
    });
  }
  
const userPost = async ( req, res = response) => {

    const body = req.body;
    const user = new User( body ); // create instance
    user.save(); // save in mongo

    res.status(201).json({
        msg: 'post API - controller',
        user
    });
  }

const userDelete =  (req, res  = response) => {
    res.json({
        msg: 'delete API - controller'
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
  }