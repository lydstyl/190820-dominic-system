import React from 'react';
import PAO from './PAO';
import PAOForm from './PAOForm';

const PAOGroup = ({ group }) => {
  return (
    <div>
      <div className='d-flex flex-row justify-content-between flex-wrap mb-3'>
        <PAO
          type={group[0].type}
          title={group[0].title}
          number={group[0].number}
        />
        <PAO
          type={group[1].type}
          title={group[1].title}
          number={group[1].number}
        />
        <PAO
          type={group[2].type}
          title={group[2].title}
          number={group[2].number}
        />
      </div>

      <PAOForm />
    </div>
  );
};

export default PAOGroup;
