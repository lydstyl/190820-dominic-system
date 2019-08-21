import React, { useContext, useEffect } from 'react';
import PAOGroup from '../pao/PAOGroup';

import PAOContext from '../../context/pao/paoContext';

const Settings = () => {
  const paoContext = useContext(PAOContext);

  let { getPAOs, paos } = paoContext;

  useEffect(() => {
    getPAOs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='d-flex flex-row justify-content-around flex-wrap'>
      {paos !== null &&
        paos.map((group, index) => {
          return <PAOGroup key={index} group={group} />;
        })}
    </div>
  );
};

export default Settings;
