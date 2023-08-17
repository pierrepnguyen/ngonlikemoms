// const app = require('./app');
// require('dotenv').config();


// const {PORT = 3000} = process.env;

// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });


// const express = require('express');
// const app = express();

// // Define routes and middleware here

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

const { db } = require("./db/db");
const { app } = require("./app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();