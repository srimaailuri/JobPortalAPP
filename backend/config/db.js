const mysql=require('mysql2/promise');

const mySqlPool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Madhu@9100',
    database:'users',
});

module.exports=mySqlPool;