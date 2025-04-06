const express = require("express");
const app = express();
const pull = 3002;
// app.use(express.json());

// const loginmiddleware = function (req, res, next) {
//   console.log("Login middleware called");
//   next();
// };
// app.use(loginmiddleware);

// const authmiddleware = function (req, res, next) {
//   console.log("Login middleware called");
// //   next();
// res.send("Welcome")
// };
// app.use(authmiddleware);

// const validmiddleware = function (req, res, next) {
//   console.log("Login middleware called");
//   next();
// };

// app.use(validmiddleware);

const route =require('./Routes/route');

app.use('/auth',route);

// // Define a simple route
// app.get("/", (req, res) => {
//     console.log("route handler")
//   console.log(req.body);
//   res.send("hello middleware!  route handler");
// });

// app.post("/item", (req, res) => {
//   res.send("Item added successfully!");
// });

// app.put("/item/:id", (req, res) => {
//   res.send(`Item with ID ${req.params.id} updated successfully!`);
// });

// app.delete("/item/:id", (req, res) => {
//   res.send(`Item with ID ${req.params.id} deleted successfully!`);
// });

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
