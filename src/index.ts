import * as express  from 'express';

let app: express.Application = express();


app.listen(5000, () => {
    console.log("server is running at 5000 port")
});