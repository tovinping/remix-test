import mongoose from 'mongoose'
interface IJokes {
  title: string
  content: string
}

let db: mongoose.Model<IJokes>;

declare global {
  var __db: mongoose.Model<IJokes> | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  console.log('TANG=====')
} else {
  if (!global.__db) {
    mongoose.connect('mongodb://localhost/test')
    const jokesSchema = new mongoose.Schema({
      title: String,
      content: String
    })
    
    global.__db = mongoose.model<IJokes>('jokes', jokesSchema)
  }
  db = global.__db;
}

export { db };
