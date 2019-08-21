import React from 'react';

const PAOForm = () => {
  const onClick = e => {
    e.target.parentNode.classList.remove('d-block');
    // @TODO modifier le nom de la carte via la methode de context updatePAO
  };

  return (
    <div className='form mb-5 d-none'>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Image URL
          </span>
        </div>
        <input type='text' className='form-control' placeholder='url' />
      </div>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Name
          </span>
        </div>
        <input type='text' className='form-control' placeholder='name' />
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
