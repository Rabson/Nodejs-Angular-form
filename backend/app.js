const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

//  user list
const list = [
    {
        firstName: "Yogesh",
        lastName: "Nishad",
        middleName: "ram",
        gender: "male",
        id: 1
    }
];

// middleware
app.use(bodyParser.json());
app.use(cors("*"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/list', (req, res) => res.send({
    error: false,
    mgs: "Success",
    data: list
}));

app.post('/list', async (req, res) => {

    const {
        firstName,
        lastName,
        middleName,
        gender,
        id
    } = req.body;

    if (!firstName || !lastName || !middleName || !gender || !id) {
        let error = new Error("Bad request.");
        error.error = true;
        error.code = 401;
        throw error;
    }

    list.push({
        firstName,
        lastName,
        middleName,
        gender,
        id
    })
    res.send({ error: false, mgs: "Added successfully" })
});

app.get('/', (req, res) => res.send("Running."));

app.listen(3000, () => {
    console.log("Server is running.")
})
