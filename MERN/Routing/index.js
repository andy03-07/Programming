const express = require('express');
const app = express();
const pull= 3001;
const items = require('./Routes/items');
app.use('/api', items);

const birds = require('./Routes/Birds');
app.use('/birds', birds);
// // Define a simple route
// app.get('/', (req, res) => {
//     // res.send('Hello routing');
//     // res.sendFile(__dirname + '/index.html');
//     res.sendFile('./dummy.html', {root: __dirname});

// });
// app.post('/item', (req, res) => {
//     // res.send('Item added successfully!');
//     res.json({message: 'Item added successfully!'});  
// });

// app.put('/item/:id', (req, res) => {
//     res.send(`Item with ID ${req.params.id} updated successfully!`);
// });

// app.delete('/item/:id', (req, res) => {
//     res.send(`Item with ID ${req.params.id} deleted successfully!`);
// });

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
