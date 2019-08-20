import React from 'react';
import PAO from './PAO';

const PAOGroup = () => {
  return (
    <div className='d-flex flex-row justify-content-around mb-3'>
      <PAO
        type='personage'
        title='personageX'
        img='https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg'
      />
      <PAO
        type='action'
        title='actionX'
        img='https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg'
      />
      <PAO
        type='object'
        title='objectX'
        img='https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg'
      />
    </div>
  );
};

export default PAOGroup;
