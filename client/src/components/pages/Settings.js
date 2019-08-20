import React from 'react';
import PAOGroup from '../pao/PAOGroup';

const makeFirstPAOs = () => {
  // this temporaly replace bdd
  const arr = [];
  let group = [];
  for (let i = 0; i <= 99; i++) {
    arr.push([
      { number: i, type: 'personage', title: 'personage ' + i },
      { number: i, type: 'action', title: 'action ' + i },
      { number: i, type: 'object', title: 'object ' + i }
    ]);
  }
  return arr;
};

const Settings = () => {
  return (
    <div className='d-flex flex-row justify-content-around flex-wrap'>
      {makeFirstPAOs().map((group, index) => {
        return <PAOGroup key={index} group={group} />;
      })}
    </div>
  );
};

export default Settings;
