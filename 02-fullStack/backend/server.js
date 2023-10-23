import 'dotenv/config'
// import "dotenv/config"
import  express  from "express";

const app = express();

app.get("/",(req, res) => {
    res.send("sita ram");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content : "This is another joke"
        },
        {
            id: 3,
            title: "Another title",
            content: "This is another title"
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT||5000;
app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})