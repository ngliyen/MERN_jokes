const express = require("express")
const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// 2. CONFIGURATION FOR YOUR EXPRESS SERVER
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Import routes
const Routes = require("./routes/jokes.routes");
Routes(app);

// 4. RUN YOUR EXPRESS SERVER
const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);