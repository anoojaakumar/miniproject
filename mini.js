const mysql = require("mysql");

// create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anooja*1",
  database: "mini",
});

// connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }

  console.log("Connected to database with ID " + connection.threadId);
});

// export the connection object for use in other parts of your application