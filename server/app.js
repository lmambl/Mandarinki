require('@babel/register');

const express = require('express');

const serverConfig = require('./config/serverCofnig');
const indexRouter = require('./routes/index.routes');


const app = express();

serverConfig(app);



app.use('/', indexRouter);

const PORT = 4000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
