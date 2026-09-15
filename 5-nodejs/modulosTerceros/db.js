// const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from 'mongodb/mongodb';

// Connection URL
const url =
  'mongodb+srv://carolinabetancur24_db_user:12345@fullstackuc.kpras5g.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movies');
    console.log('Colección', collection.collectionName);
    // the following code examples can be pasted here...

    return 'done.';
  } catch (error) {
    console.error('Errpr de conexión', error);
  }
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
