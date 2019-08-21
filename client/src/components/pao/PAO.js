import React from 'react';

const PAO = ({
  img = 'https://jeretiens.net/wp-content/uploads/2018/08/syst%C3%A8me_m%C3%A9morisation_pao_personnage_action_objet.jpg',
  title,
  type,
  number,
  margin
}) => {
  let badge = 'badge badge-';

  if (type === 'personage') {
    badge += 'primary';
  } else if (type === 'action') {
    badge += 'success';
  } else {
    badge += 'danger';
  }

  const onClick = e => {
    if (!margin) {
      // no margin means we are in the settings page
      if (document.querySelector('.form.d-block')) {
        document.querySelector('.form.d-block').classList.remove('d-block'); // hide forms
      }

      // get target infos
      const number = e.target.parentNode
        .querySelector('h4')
        .innerText.split('#')[1];
      const type = e.target.parentNode.querySelector('.badge').innerText;
      const imgSrc = e.target.parentNode.querySelector('img').src;
      const name = e.target.parentNode.querySelector('h5').innerText;

      const form = e.target.parentNode.parentNode.parentNode.querySelector(
        '.form'
      );

      // fill target form
      form.querySelector('[placeholder=url]').value = imgSrc;
      form.querySelector('[placeholder=name]').value = name;

      // remove any button class color
      let btnClassColor = 'btn-dark';
      const colors = [
        btnClassColor,
        'btn-danger',
        'btn-primary',
        'btn-success',
        'btn-danger'
      ];
      colors.forEach(color => {
        form.querySelector('button').classList.remove(color);
      });

      // set button class color
      if (type === 'personage') {
        btnClassColor = 'btn-primary';
      } else if (type === 'action') {
        btnClassColor = 'btn-success';
      } else {
        btnClassColor = 'btn-danger';
      }
      form.querySelector('button').classList.add(btnClassColor);

      // show form
      form.classList.add('d-block');
    }
  };

  return (
    <div className={margin ? 'card m-1' : 'card'} onClick={onClick}>
      <span className={badge}>{type}</span>
      <img className='card-img-top' src={img} alt='pao' />
      <h4 className='badge badge-light'>#{number}</h4>
      <h5 className='card-title'>{title}</h5>
    </div>
  );
};

export default PAO;
