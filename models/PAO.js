const mongoose = require('mongoose');

const PAOSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'personage'
  },
  number: {
    type: String,
    default: '101'
  },
  img: {
    // src
    type: String,
    default:
      'https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('pao', PAOSchema);
