// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }
    console.log("Success: Connected");
    //
    // db.collection("Todos").find().count().then((count) => {
    //   console.log(count);
    //   console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //   console.log("Error", err);
    // });

    db.collection("Users").find({name: "Benjamin Sunderland"}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    });
    // db.close();
});
