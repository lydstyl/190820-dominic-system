import React, { useContext, useRef, useEffect } from 'react';
import PAO from '../pao/PAO';
import PAOContext from '../../context/pao/paoContext';
import AuhtContext from '../../context/auth/authContext';

const Tool = () => {
  const paoContext = useContext(PAOContext);

  const authContext = useContext(AuhtContext);

  const {
    paos,
    getPAOs,
    updateToolPAOs,
    getToolPAOs,
    toolPAOs,
    setCurrentNumber
  } = paoContext;

  let { currentNumber } = paoContext;

  const text = useRef(currentNumber);

  useEffect(() => {
    authContext.loadUser();

    if (currentNumber) {
      if (!document.querySelector('input').value) {
        // set input value
        document.querySelector('input').value = currentNumber;
      }
      updateCards(currentNumber);
      getToolPAOs();
    } else if (localStorage.getItem('currentNumber')) {
      const val = parseInt(localStorage.getItem('currentNumber'), 10);
      document.querySelector('input').value = val;

      updateCards(val);
      getToolPAOs();

      // @TODO what if no card after /tool reloaded ?
      // what if 4.654654444444445e+28 after reloaded a big number  ?
    }
    // eslint-disable-next-line
  }, []);

  const updateCards = val => {
    val = val.toString();
    setCurrentNumber(val);
    localStorage.setItem('currentNumber', val);

    let cards = val.match(/.{1,2}/g);
    let newCards = [];
    let position = -1;

    cards.forEach(num => {
      num = parseInt(num, 10);
      position++;

      if (paos) {
        newCards.push(paos[num][position]);
      } else {
        getPAOs();
      }
      if (position === 2) {
        position = -1;
      }
    });

    updateToolPAOs(
      newCards.map((card, index) => (
        <PAO
          margin={true}
          key={index}
          type={card.type}
          title={card.title}
          number={card.number}
          img={card.img}
        />
      ))
    );
  };

  const onChange = e => {
    if (text.current.value !== '') {
      const val = e.target.value;

      updateCards(val);
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
