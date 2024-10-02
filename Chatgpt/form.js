const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatgpt');

// Create Schema and Model
const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    taste: { type: String, required: true },
    isDrink: { type: Boolean, required: true },
    num_sales: { type: Number, required: true }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const app = express();
const PORT = 4006; // Change this if necessary

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // To handle URL-encoded data

// Serve static files (HTML)
app.use(express.static('public'));

// POST route to add menu item
app.post('/menu', async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).send(menuItem);
    } catch (error) {
        res.status(400).send({ message: 'Error saving menu data', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
