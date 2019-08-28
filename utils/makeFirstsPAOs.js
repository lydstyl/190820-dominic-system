const PAO = require('../models/PAO');

module.exports = async (userId, res) => {
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
  console.log('in makeFirstsPAOs()');
};
