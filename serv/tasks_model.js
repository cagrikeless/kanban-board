const App = require('../src/components/App')
const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database:"kanban_db",
    password:1234,
    port:5432
})
const getBacklogTask = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT BACKLOG FROM TASKS ', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const getINProgressTask = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT IN_PROGRESS FROM TASKS', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const getTestedTask = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT TESTED FROM TASKS', (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}
const getDoneTask = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT DONE FROM TASKS', (error, reject) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    })
}
var a =1
const createTask = (body) => {
    return new Promise(function(resolve, reject) {
        const { task } = body
        pool.query('INSERT INTO TASKS (BACKLOG) VALUES (1,2) RETURNING *', [BACKLOG], (error,results) => {
            if (error) {
                reject(error);
            }
            resolve(`A new task has been added: ${results.rows[0]}`);
        })
    })
}





























// const { CardPlugin } = require('bootstrap-vue')
// const { Client } = require('pg')

// const client = new Client({
//     user:"postgres",
//     password:1234,
//     host:"localhost",
//     port:5432,
//     database:"kanban_db"

// })

// client.connect()
// .then(() => console.log("Succesfully"))
// .catch(e => console.log(e))
// .finally(() => client.end())