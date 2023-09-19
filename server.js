const express  = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const url = require("url");
const bodyParser = require("body-parser");

app.use(bodyParser());

let clientResponseRef;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });

// app.get('/*', (req, res)=>{
//     const pathName = url.parse(req.url).pathname;
//     const obj = {
//         pathname: pathName,
//         method: "get",
//         params: req.query
//     }

//     io.emit("page-request", obj);
//     clientResponseRef = res;
// });

// app.post('/*', (req, res)=>{
//     const pathName = url.parse(req.url).pathname;
//     const obj = {
//         pathname: pathName,
//         method: "post",
//         params: req.body
//     }

//     io.emit("page-request", obj);
//     clientResponseRef = res;
// });

io.on("connection", (socket)=>{
    console.log("A server connected !");
    // socket.on("page-response",(response)=>{
    //     clientResponseRef.send(response);
    // })
})

const PORT = process.env.PORT || 3001;
const server = http.listen(port, () => console.log(`App listening on port ${PORT}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


// http.listen(PORT,()=>{
//     console.log("Listening on :"+ PORT);
// })