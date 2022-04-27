//connection to database
const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
    //if existing use database:
})
con.connect((err)=>{
    if(!err)
    {
        console.log('success');
    }
    else
    {
        console.log('something went wrong');
    }
})
//creating database
// con.query('CREATE DATABASE mydb',(err,result)=>{
//     if(!err)
//     {
//         console.log(result);
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// })

//creating table
// const sql='CREATE TABLE dbtable ( id INT NOT NULL , name VARCHAR(20) NOT NULL , age INT NOT NULL , PRIMARY KEY (`id`))';
// con.query(sql,(err,result)=>{
//     if(!err)
//     {
//         console.log('table created successfuly');
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// })

//Insert (C)

// const sql="INSERT INTO dbtable (id, name, age) VALUES ('2', 'suyash sahu', '22')";
// con.query(sql,(err,result)=>{
//     if(!err)
//     {
//         console.log('added to table successfuly');
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// })

//select (R)

// const sql='SELECT * FROM dbtable';
// con.query(sql,(err,result)=>{
//     if(!err)
//     {
//         console.log(result[0]);
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// });

//update (U)

// const sql="UPDATE `dbtable` SET `name` = 'tarandeep singh' WHERE `id` = 0";
// con.query(sql,(err,result)=>{
//     if(!err)
//     {
//         if(result.changedRows)
//         {
//             console.log(result.changedRows,' affected');
//         }
//         else
//         {
//             console.log('nothing changed');
//         }
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// });

//delete (D)

// const sql="DELETE FROM `dbtable` WHERE `name`='rahul bajaj'";
// con.query(sql,(err,result)=>{
//     if(!err)
//     {
//         if(result.affectedRows)
//         {
//             console.log(result.affectedRows,' deleted');
//         }
//         else
//         {
//             console.log('nothing changed');
//         }
//     }
//     else
//     {
//         console.log('something went wrong');
//     }
// });



