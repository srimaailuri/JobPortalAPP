const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Update with your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Madhu@9100',
  database: 'users',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    const [rows, fields] = await pool.query(
      "INSERT INTO user_details (username, email, password) VALUES (?, ?, ?)",
      [username, email, hash]
    );

    res.send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: "Registration failed" });
  }
});

app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
  

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM user_details WHERE email = ?",
        [email]
      );
  
      if (rows.length > 0) {
        const match = await bcrypt.compare(password, rows[0].password);
  
        if (match) {
          req.session.user = rows[0];
          res.send({ loggedIn: true, user: rows[0] });
        } else {
          res.status(401).send({ message: "Wrong username/password combination!" });
        }
      } else {
        res.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).send({ error: "Login failed" });
    }
  });
  

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
