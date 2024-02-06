import express from 'express';
import dotenv from 'dotenv';

import userRoute from './routes/user.route.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use('/api/user', userRoute);

app.listen(port, () => {
  console.log('Server is runing on port ' + port);
});
