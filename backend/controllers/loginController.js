// GET ALL USER DETAILS LIST
const bcrypt = require('bcrypt');
const db = require("../config/db");

const getRegisterDetails=async(request,response)=>{
    const { username, email} = request.body;
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  const selectUserQuery = `SELECT * FROM user WHERE email = '${email}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    const createUserQuery = `
      INSERT INTO 
        user_details (username, email, password) 
      VALUES 
        (
          '${username}', 
          '${email}',
          '${hashedPassword}'
        )`;
    const dbResponse = await db.run(createUserQuery);
    const newUserId = dbResponse.lastID;
    response.send(`Created new user with ${newUserId}`);
  } else {
    response.status = 400;
    response.send("User already exists");
  }
};


const getLoginDetails=async(request,response)=>{
    const { email, password } = request.body;
    
    const selectUserQuery = `SELECT * FROM user_details WHERE email = '${email}'`;
    const dbUser = await db.get(selectUserQuery);
    if (dbUser === undefined) {
        response.status(400);
        response.send("Invalid User");
    } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatched === true) {
      response.send("Login Success!");
    } else {
      response.status(400);
      response.send("Invalid Password");
    }
  }
};


module.exports={getRegisterDetails,getLoginDetails};