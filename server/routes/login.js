var express = require('express');
var router = express.Router();
const mongodb = require('mongodb')
const { find } = require('./db.js')
const { insert } = require('./db.js')
const { connect } = require('./db.js')
    // import { find } from './db.js'
    // import { insert } from './db.js'
    // import { connect } from './db.js'
    // var url = require('url');
    /* GET users listing. */
router.get('/', function(req, res, next) {
    const name = req.query.name;
    let password = req.query.password;
    // new Promise((resolve, reject) => {
    // const name = req.query.name;
    // const password = req.query.password;        // 关闭连接

    const ress = find('user', { name })

    res.send(ress)
        // resolve(ress)
        // return ress
        // }).catch(() => {


    // })

    // connect();
    // let ress = find('user', { name })

    // if (ress.length == 0) {
    //     insert('user', [{ name, password }]);
    //     // res.send(ress);
    // } else {
    //     // res.send(ress)
    // }

    // const MongoClient = require('mongodb').MongoClient;
    // // 踊跃测试
    // const assert = require('assert');
    // // Connection URL
    // const url = 'mongodb://localhost:1908';
    // // Database Name
    // const dbName = 'jd';
    // const col = 'user'
    // const connect = () => {
    //     return new Promise((resolve, reject) => {         // Use connect method to connect to the server
    //         MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    //             assert.equal(null, err);
    //             err ? reject(err) : resolve(client)
    //             console.log("Connected successfully to server");
    //         });
    //     })
    // };
    // // const find = (col, { name }) => {
    // //         return new Promise(async(resolve, reject) => {
    // //             const client = await connect();         // 选中需要连接的库
    // //             const db = client.db(dbName);         // 选中表
    // //             const collection = db.collection(col);         // Find some documents

    // //             collection.find(query ? query : {}).toArray(function(err, docs) {             // assert.equal(err, null);
    // //                 // console.log("Found the following records");
    // //                 // console.log(docs)
    // //                 err ? reject(err) : resolve(docs)
    // //             });         // 关闭连接

    // //             client.close();
    // //         })
    // //     }

});

module.exports = router;