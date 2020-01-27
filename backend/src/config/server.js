const port = 3003;

const Bodyparser = require ("body-parser");
const express =  require ("express");

const server = express();

server.use(Bodyparser.urlencoded({ extended: true}));


server.listen(port , () =>{
    console.log(`Server is running on port: ${port}`);
})



 
