import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'; 
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8080

app.engine('handlebars', handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine' , 'handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT ,() => console.log(`Listening on ${PORT}`));
