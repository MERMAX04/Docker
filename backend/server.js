const express = require('express');

const app = express();
const PORT = 3000;

// Return a small portfolio status object through the Caddy reverse proxy.
app.get('/status', (request, response) => {
  response.json({
    name: 'Methus Promkhunthong',
    position: 'Junior Full Stack Developer',
    status: 'resume-api-ready'
  });
});

// Provide a simple health endpoint for container checks.
app.get('/health', (request, response) => {
  response.json({ ok: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`resume-api listening on ${PORT}`);
});
