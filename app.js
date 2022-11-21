
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const { engine } = require('express-handlebars');
/*
const mongoose = require('mongoose')
const path = require('path')


const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
*/
const connectDB = require('./config/db')


// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
// Handlebars
  app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
  app.set('view engine', '.hbs');
  app.set('views', './views');


const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )