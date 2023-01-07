import express from 'express';
import { db } from './dbConnect.js';
const app = express();

app.use(express.json()) 

app.get("/", async (request, response) => {
    console.log(request.body);
    const {name, age, gender} = request.body;
    db
  let result =  await db.client.query('select * from users limit 1');
    response.send({data:"Hi there",result});
});

app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});