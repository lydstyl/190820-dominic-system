const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const PAO = require('../models/PAO');

const makeFirstsPAOs = async (userId, res) => {
  const types = ['personage', 'action', 'object'];
  let newPao;
  for (let i = 0; i <= 99; i++) {
    try {
      for (let j = 0; j <= 2; j++) {
        newPAO = new PAO({
          number: i,
          type: types[j % 3],
          title: `${types[j % 3]} ` + i,
          user: userId
        });

        await newPAO.save();
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error when making firsts PAOs');
    }
  }
};

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      makeFirstsPAOs(user.id, res);

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000 // @todo change this value when project finish
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
