import React, { useContext, useRef, useEffect } from 'react';
import PAO from '../pao/PAO';
import PAOContext from '../../context/pao/paoContext';

const Tool = () => {
  const paoContext = useContext(PAOContext);

  const { paos, getPAOs, updateToolPAOs, getToolPAOs, toolPAOs } = paoContext;

  const text = useRef('');

  useEffect(() => {
    if (!paos) {
      getPAOs();
    }
    getToolPAOs();
    // eslint-disable-next-line
  }, [paoContext, toolPAOs, paos]);

  const onChange = e => {
    if (text.current.value !== '') {
      const val = e.target.value;
      let cards = val.match(/.{1,2}/g);
      let newCards = [];
      let position = -1;
      cards.forEach(num => {
        position++;
        newCards.push(paos[num][position]);
        if (position === 2) {
          position = -1;
        }
      });
      updateToolPAOs(
        newCards.map(card => (
          <PAO
            margin={true}
            key={card.number} // todo generate unique key here because if for exemple 45 45 45 66 --> 3 times same 45 key
            type={card.type}
            title={card.title}
            number={card.number}
            img={card.img}
          />
        ))
      );
    }
  };

  return (
    <div>
      <input
        ref={text}
        type='number'
        placeholder='Type your number here'
        onChange={onChange}
        className='form-control mt-3 mb-3'
      />
      <div className='d-flex flex-row justify-content-center flex-wrap'>
        {toolPAOs !== null && toolPAOs}
      </div>
    </div>
  );
};

export default Tool;
