const express = require('express');
const app = express();
const port = 3000; 
app.use((req, res, next) => {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
    const hours = currentTime.getHours();

    
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17) {
        next(); 
    } else {
        res.send('Working hours are from Monday to Friday, 9 AM to 5 PM. The web application is currently closed.');
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/services', (req, res) => {
    res.send('<h1>Our Services</h1><p>Explore the services we offer here.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Reach out to us for any inquiries.</p>');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
