const app = require("./app")
const http = require("http")



app.set("port", process.env.PORT ?? 3000);


const server = http.createServer(app);


server.on("listening", ()=>{
  console.log("Listening")
})


server.listen(process.env.PORT ?? 3000)
