import React from 'react';

const PAO = ({
  img = 'https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg',
  title,
  type,
  number
}) => {
  let badge = 'badge badge-';
  if (type === 'personage') {
    badge += 'primary';
  } else if (type === 'action') {
    badge += 'success';
  } else {
    badge += 'danger';
  }
  return (
    <div className='card m-1'>
      <span className={badge}>{type}</span>
      <img className='card-img-top' src={img} alt='pao' />
      <h4 className='badge badge-light'>#{number}</h4>
      <h5 className='card-title'>{title}</h5>
    </div>
  );
};

export default PAO;
