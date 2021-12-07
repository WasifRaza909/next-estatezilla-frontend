import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="#000000"
      radius={2}
      height={60}
      width={100}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem',
      }}
    >
      <span className="sr-only">Loading</span>
    </Loader>
  );
};

export default Spinner;
