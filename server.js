const express = require('express')
const next = require('next')

// Setup
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({dev})
const handle = nextapp.getRequestHandler();

// Server
nextapp.prepare().then(() => {
  // Create an express app
  const app = express()
  
  // Handle all requests
  app.get('*', (req, res) => {
    handle(req, res)
  })
  
  // Listen
  app.listen(port)
})
