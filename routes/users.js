const express = require('express');
const router = express.Router();

// @ route      POST api/auth
// @ desc       Auth user & get token
// @ access     Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
