// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }
    console.log("Success: Connected, baby.");

    db.collection("Todos").findOneAndUpdate({
      _id: new ObjectID("5a55169e1a1bb84fe3eccee3")
    }, {
      $set: {
        text: "Believe In Yourself Benjamin"
      }
    }, {
      returnOriginal: true
    }).then((result) => {
      console.log(result);
    })
});
