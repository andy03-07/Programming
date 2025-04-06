const express = require('express')
const router = express.Router()

// // middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)


// Define a simple route
router.get('/', (req, res) => {
    res.send('Hello routing');
    // res.sendFile(__dirname + '/index.html');
    // res.sendFile('../dummy.html', {root: __dirname});

});
router.post('/item', (req, res) => {
    // res.send('Item added successfully!');
    res.json({message: 'Item added successfully!'});  
});

router.put('/item/:id', (req, res) => {
    res.send(`Item with ID ${req.params.id} updated successfully!`);
});

router.delete('/item/:id', (req, res) => {
    res.send(`Item with ID ${req.params.id} deleted successfully!`);
});

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

module.exports = router