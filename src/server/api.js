var mongoClint =  require("mongodb").MongoClient;
var express = require("express");
const cors = require("cors");


var connectionString = "mongodb://127.0.0.1:27017";


var app = express();

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//   app.get('/', function(req, res, next) {
//     // Handle the get for this route
//   });
  
//   app.post('/', function(req, res, next) {
//    // Handle the post for this route
//   });



app.use(express.urlencoded({
    extended:true
}))

app.use(express.json());


app.get("/products",(req,res) => {
    mongoClint.connect(connectionString).then(clientObject =>{
        var database = clientObject.db("shopper");
        database.collection("products").find({}).toArray().then(documents =>{
            res.send(documents);
            res.end();
        })
    })
})

app.get("/details/:id",(req,res) =>{
    var id = parseInt(req.params.id);
    mongoClint.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        database.collection("products").find({ProductId:id}).toArray().then((document =>{
           
          
            res.send(document);
            res.end()
        }))
    })
})

app.post("/addproducts",(req,res) =>{
    mongoClint.connect(connectionString).then(clientObject =>{
        var database = clientObject.db("shopper");
        var product = {
            "ProductId" : parseInt(req.body.ProductId),
            "Name" : req.body.Name,
            "Price" : parseFloat(req.body.Price),
            "Stock" : (req.body.Stock=="true")?true:false
        }
        
        database.collection("products").insertOne(product).then(result =>{
            console.log("Record Inserted");
            res.redirect("/products");
            res.end();
        })
    })
})

app.put("/updateproduct",(req,res) => {
    mongoClint.connect(connectionString).then(clientObject =>{
        var database = clientObject.db("shopper");
        var findQuery = {ProductId:parseInt(req.body.ProductId)};
        var updateQuery = {$set : {Name:req.body.Name,Price:parseInt(req.body.Price),Stock:(req.body.Stock=="true")?true:false}}

        database.collection("products").updateOne(findQuery,updateQuery).then(result =>{
            console.log("Record updated");
            res.redirect("/products");
            res.end();
        })
    })
} )

app.delete("/deleteproduct/:id",(req,res) => {
    var id = parseInt(req.params.id);
    mongoClint.connect(connectionString).then(clientObject =>{
        var database = clientObject.db("shopper");
        database.collection("products").deleteOne({ProductId:id}).then(result =>{
            console.log("Record deleted");
            res.redirect("/products");
            res.end(); 
        })
    })
})

app.get("/users",(request,response) => {
    mongoClint.connect(connectionString).then((clientObject) => {
          var database = clientObject.db("shopper");
          database.collection("users").find({}).toArray().then((documents) => {
             response.send(documents);
          })
    })
});

app.post("/registeruser" , (request,response) =>{
   var user = {
     "UserId" : request.body.UserId,
     "UserName" : request.body.UserName,
     "Password" : request.body.Password,
     "Email" : request.body.Email,
     "Age" : parseInt(request.body.Age),
     "Mobile" : request.body.Mobile
   }  
   mongoClint.connect(connectionString).then((clientObject) => {
      var database =  clientObject.db("shopper");
      database.collection("users").insertOne(user).then((result) => {
         console.log("Record Inserted");
         response.redirect("/users");
      })
   })
})

app.listen(8080);
console.log(`Server Started:http://127.0.0.1:8080`);  


