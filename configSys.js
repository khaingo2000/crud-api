if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

export const PORT = 4000

export const MONGO_OPTIONS = {
  uri: process.env.MONGO_URI,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
  db_options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    retryWrites: true,
    w: 'majority'
  },
  useFindAndModify: true
}
