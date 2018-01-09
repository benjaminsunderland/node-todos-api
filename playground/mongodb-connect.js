const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(err);
  }
    console.log("Success: Connected, baby.");

    db.collection('Todos').insertOne({

      text: 'Something to do',
      completed: false

    }, (err, result) => {
      if (err) {
        console.log(err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.collection('Users').insertOne({

      name: "Benjamin Sunderland",
      age: 25,
      location: "I don't even know where I am"

    }, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();

});
