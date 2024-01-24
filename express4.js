//required import
import express from 'express';
//setup 
const app = express();
app.set('port', process.env.PORT || 3000);
//home routr
app.get('/', (req, res) =>{
    res.type('text/plain');
    res.send("Hello World");
});
//about route
app.get('/about', (req, res) =>{
    res.type('text/plain');
    res.send("About Page");
});

// GET route providing query
app.get('/get', (req, res) => {
    // query string parameter
    const queryParams = req.query;

    // Logs queries
    console.log('Query Parameters:', queryParams);

    // text
    res.type('text/plain');
    res.send('Query String Handling');
});



//404 message
app.use((req, res) =>{
    res.type('text/plain');
    res.status(404).send('404 - Not Found');
});

// Setting up the server 
const PORT = process.env.PORT || 3000;


// Starting the server and logging a message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
