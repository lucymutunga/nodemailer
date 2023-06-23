const express = require("express");
const { userRoutes } = require("./routes/userRoutes");


const app = express();

app.use(express.json());

app.use("/", userRoutes);


const port = 5000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
