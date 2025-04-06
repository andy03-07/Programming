const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send("hello");
});
 
app.post('/item', (req, res) => {
    res.send('Item added successfully!');
});

app.put('/item/:id', (req, res) => {
    res.send(`Item with ID ${req.params.id} updated successfully!`);
});

app.delete('/item/:id', (req, res) => {
    res.send(`Item with ID ${req.params.id} deleted successfully!`);
});


// Start the server
const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

