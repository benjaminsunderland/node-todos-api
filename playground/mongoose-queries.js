const {ObjectID} = require("mongodb")
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var id_one = "5a587fc531dbd25dfafdfdb3";
var id_two = "5a573f8529e106591afa6295";

if (!ObjectID.isValid(id_two)) {
  console.log("ID not valid");
}

User.find({
  _id: id_two
}).then((todos) => {
  console.log("Todos", todos);
});

User.findOne({
  _id: id_two
}).then((todo) => {
  console.log("Todos", todo);
});

User.findById(id_two).then((todo) => {
  if (!todo) {
    return console.log("Failure")
  }
  console.log("Todo by ID", todo);
}).catch((e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todos", todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Failure")
//   }
//   console.log("Todo by ID", todo);
// }).catch((e) => console.log(e));
