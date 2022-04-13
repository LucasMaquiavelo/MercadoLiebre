const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(process.env.PORT ||  3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/register", (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.post("/register", (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get("/login", (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'views/login.html'))
})

app.post("/login", (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.post("/searcher", (req,res) =>{
  res.send('Acá aparecen los elementos de búsqueda :)')
})