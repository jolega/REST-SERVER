require('dotenv').config();

const express = require('express')
const cors = require('cors')


class Server {


    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users' ;

        //middlewares

        this.middlewares();

        // routes de mi app
        this.routes();
    }

    middlewares(){

    // CORS

    this.app.use( cors() )

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