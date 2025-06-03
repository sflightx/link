const express = require('express');
const app = express();

const redirects = {
  "logo": "https://sflightx.com/resources/v4/database/logo/logo.png",
  "favicon": "https://sflightx.com/resources/v4/assets/favicon.ico"
  // Add more keys and URLs here
};

app.get('/s/:key', (req, res) => {
  const key = req.params.key;
  const target = redirects[key];
  if (target) {
    res.redirect(301, target);
  } else {
    res.status(404).send('Redirect key not found');
  }
});

// Optional: health check
app.get('/', (req, res) => {
  res.send("Short Link Redirector is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
