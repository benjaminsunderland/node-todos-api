// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }
    console.log("Success: Connected, baby.");

    // deleteMany

    // deleteOne

    // findOneAndDelete

    db.collection("Users").deleteMany({name: "Benjamin Sunderland"}).then((result) => {
      console.log(result)
    });
    // db.close();
});
