require('dotenv').config()


//mongoDB connection
const MongoClient = require('mongodb').MongoClient;

// add database connections
const uri = 'mongodb+srv://mccannbr:brodieSIT725@cluster0.xlkct3q.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.MongoClient = client;