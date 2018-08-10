const axios = require('axios');

const { authenticate, generateToken } = require('./middlewares');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  db('users')
    .insert(user)
    .then(id => {
      db('users')
        .where({ id: id[0] })
        .first()
        .then(user => {
          const token = generateToken(user);

          res.status(201).json(token);
        });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
