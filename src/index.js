const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin: 'http://localhost:3001'}));

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/vehiculo'));
app.use(require('./routes/revision'));

// Public

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
