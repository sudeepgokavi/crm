import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 4000;

// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRM', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// BodyParser  Setup
app.use(bodyParser.urlencoded( { extended:true}));
app.use(bodyParser.json());

// Passing our app to the routes here. This way we can add routes in the specific file.
routes(app);

app.get('/', (req,res) => {
    res.send(`Node & Express server is running on : ${PORT}`);
});

app.listen(PORT, () => 
    console.log(`The server is running on PORT : ${PORT}`)
);