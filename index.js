const mongose = require("mongoose");

var app = require("./app");
var port = process.env.PORT || 3678;

mongose.connect(
  "mongodb://localhost:27017/prueba",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Failed to connect to the database");
    } else {
      console.log("Connected to the database");
    }
  }
);

app.listen(port, () => {
  console.log("Server on port", port);
});
