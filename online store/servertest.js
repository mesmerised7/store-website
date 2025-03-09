const express = require('express');
const path=require('path');
const app = express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname)
app.post('/submit',(req,res)=>{
  const postdata=req.body;
  console.log('recieved data.',JSON.parse(postdata));
})
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','html/store.html'))
})
app.get('/checkout',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','html/checkout.html'))
})
app.listen(port,()=>{
  console.log(`server is running on port:${port}`)
})
