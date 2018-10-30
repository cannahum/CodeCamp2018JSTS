import React from 'react';

export default ({ onClick }) => {

  return (
    <button className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
};
