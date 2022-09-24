# REST-SERVER


# run  install
npm i express dotenv 


# run 
nodemon app

# endpoint in postman 

http://localhost:8080/api/users

https://rest-server-node-js-jolega.herokuapp.com/api/users/



# example get

http://localhost:8080/api/users/?greeting=hola&id=1&page=3&limit=10

http://localhost:8080//api/users/?limit=1&since=5

# example pos 

http://localhost:8080/api/users/

json

{
    "name": "Johan Garcia",
    "years": "32"
}

# example pur 
http://localhost:8080/api/users/1

# heroku

https://rest-server-node-js-jolega.herokuapp.com/