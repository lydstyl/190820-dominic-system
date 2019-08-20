import React from 'react';

const PAO = ({ img, title, type }) => {
  let badge = 'badge badge-';
  if (type === 'personage') {
    badge += 'primary';
  } else if (type === 'action') {
    badge += 'success';
  } else {
    badge += 'danger';
  }
  return (
    <div class='card p-2 '>
      <img className='card-img-top' src={img} alt='pao' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <span className={badge}>{type}</span>
      </div>
    </div>
  );
};

export default PAO;
