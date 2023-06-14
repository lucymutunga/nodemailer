const express = require("express");
const { router } = require("./routes/userRoutes");

//creating the app server
const app = express();
//enable sending json on the body of the request
app.use(express.json());
//defines where traffic/requests will be sent
app.use("/", router);

//handles undefined rules
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
    success: false,
  });
});
const port = 5000;

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
