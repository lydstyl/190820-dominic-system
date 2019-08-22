import React, { useContext, useRef } from 'react';
import PAOContext from '../../context/pao/paoContext';

const PAOForm = ({ number }) => {
  const paoContext = useContext(PAOContext);

  const { updatePAO } = paoContext;

  const url = useRef(null);
  const name = useRef(null);

  const onClick = e => {
    const form = e.target.parentNode;

    // get the PAO type from the form
    const btnClass = form.querySelector('button').classList[2];
    let type = '';
    if (btnClass === 'btn-primary') {
      type = 'personage';
    } else if (btnClass === 'btn-success') {
      type = 'action';
    } else {
      type = 'object';
    }

    const update = {
      type,
      number,
      name: form.querySelector('[placeholder=name]').value,
      src: form.querySelector('[placeholder=url]').value
    };

    form.classList.remove('d-block');
    updatePAO(update);
  };

  return (
    <div className='form mb-5 d-none'>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Image URL
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='url'
          ref={url}
        />
      </div>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Name
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='name'
          ref={name}
        />
      </div>
      <button
        type='button'
        className='btn btn-dark mx-auto'
        style={{ display: 'block', width: '100%' }}
        onClick={onClick}
      >
        OK
      </button>
    </div>
  );
};

export default PAOForm;
