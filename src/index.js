const express = require('express');
// const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/vehicle'));
app.use(require('./routes/review'));
app.use(require('./routes/technician'));

// Public

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});