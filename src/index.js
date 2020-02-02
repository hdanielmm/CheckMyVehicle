const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/vehiculo'));
app.use(require('./routes/revision'));
app.use(require('./routes/technician'));
app.use(require('./routes/item'));

// Public

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});