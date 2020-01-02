// ========================
// Dependencies
// ========================
const express = require("express");
const app = express();
const cors = require("cors");
const studentsController = require("./controllers/students.js");
const coursesController = require("./controllers/courses.js");


// ========================
// Port
// ========================
const PORT = process.env.PORT || 3000;


// ========================
// Middleware
// ========================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors({origin: 'https://gaoutcomes-frontend.herokuapp.com'}));
// app.use(cors())

const whitelist = ['http://localhost:3001', 'https://gaoutcomes-frontend.herokuapp.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.use("/students", studentsController);
app.use("/courses", coursesController);


// ========================
// Routes
// ========================
app.get("/", (req, res) => {
  res.json({info: "Node, Express and Postgres"});
})


// ========================
// Listener
// ========================
app.listen(PORT, () => {
	console.log("listening on port: ", PORT);
});
