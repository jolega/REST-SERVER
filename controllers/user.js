const { response } = require('express')



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
    const {name, years} = req.body;

    res.json({
        msg: 'put API - controller ',
        id,
        name,
        years
    });
  }
  
const userPost = ( req, res = response) => {

    const {name, years} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        name,
        years,
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