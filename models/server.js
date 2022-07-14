require('dotenv').config();

const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config') ;


class Server {


    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users' ;

        // connect base date 

        this.connectDb();

        //middlewares

        this.middlewares();

        // routes de mi app
        this.routes();
    }

    async connectDb() {
        await dbConnection() ;
    }


    middlewares(){

    // CORS
    this.app.use( cors() )

    // reading from  body
    this.app.use( express.json())

    // directory public
    this.app.use( express.static('public') )

    }

    routes() {

       this.app.use(this.usersPath, require('../routes/user'))

    }

    listen( ){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port )
        }) ;
    }

}

module.exports = Server;