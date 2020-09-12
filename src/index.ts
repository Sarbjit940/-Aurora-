import * as express  from 'express';

let app: express.Application = express();


app.listen(5000, () => {
    console.log("server is started on 5000 port")
});