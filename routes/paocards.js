const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const PAO = require('../models/PAO');

// @route     GET api/paocards
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const paos = await PAO.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(paos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/paocards
// @desc      Update the pao selected with its user's id, type and number
// @access    Private
router.put('/', auth, async (req, res) => {
  const { type, number, title, img } = req.body;

  try {
    const lookFor = {
      user: req.user.id,
      type,
      number
    };

    const changedFields = { title, img };

    const changedPAO = await PAO.findOneAndUpdate(lookFor, {
      $set: changedFields
    });

    res.json(changedPAO);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
