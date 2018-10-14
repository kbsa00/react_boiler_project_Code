const express = require('express');
const app = express(); 

require('./models/googleUser');
require('./models/localUser');
require('./services/passport');
require('./middlewares/appMiddlewares')(app); 
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; 

app.listen(PORT);
console.log(`Now listening to port ${PORT}`);