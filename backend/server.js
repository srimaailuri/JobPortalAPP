const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const app = express();
const JWT_SECRET = "JOB_PORTAL"; 

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
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
  const { username, Email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await pool.query("INSERT INTO user_details (username, email, password) VALUES (?, ?, ?)", [username, Email, hash]);
    res.send({ message: "User registered successfully"});
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { Email, password } = req.body;

  try {
    const [rows, fields] = await pool.query("SELECT * FROM users.user_details WHERE email = ?", [Email]);
    console.log("Email:",Email);
    console.log("fields:",fields);

    if (rows.length > 0) {
      const match = await bcrypt.compare(password, rows[0].password);

      if (match) {
        const token = jwt.sign({ id: rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
        res.send({ jwt_token: token });
      } else {
        res.status(401).send({ error: "Wrong email/password combination!" });
        return;
      }
    } else {
      res.status(404).send({ error: "User not found" });
      return;
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ error: "Login failed" });
    return;
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

