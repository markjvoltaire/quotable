const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const fetch = require('cross-fetch');

module.exports = Router()
  .post('/', async (req, res, next) => {
    // TODO: Implement me!
    console.log('req.body.name', req.body.name);
    const profile = await ProfileService.create({ name: req.body.name });
    res.send(profile);
  })
  .get('/', async (req, res) => {
    console.log('req.body', req.body);
    res.send('hey Mark');
  });
