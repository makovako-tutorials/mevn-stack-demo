const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middle ware

const posts = require("./routes/api/posts")


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/api/posts', posts)


const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));