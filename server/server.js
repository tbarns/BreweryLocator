const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors'); 
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const app = express();

// CORS Middleware - Adjust to your needs
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

app.get('/api/getGoogleMapsScript', async (req, res) => {
  console.log("Received request for Google Maps script");  // Log statement
  try {
      const googleMapsResponse = await fetch(`https://maps.googleapis.com/maps/api/js?key=${process.env.APIKEY}&callback=initMap&libraries=&v=weekly`);
      console.log("Google Maps API response", googleMapsResponse); // Log statement
      const googleMapsScript = await googleMapsResponse.text();

      res.set('Content-Type', 'application/javascript');
      res.send(googleMapsScript);
  } catch (error) {
      console.error("Error in /api/getGoogleMapsScript: ", error);  // Log statement
      res.status(500).send("Error fetching Google Maps script");
  }
});

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React client
    app.use(express.static(path.join(__dirname, '../client/build')));

    // All other routes will be handled by the React client
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
