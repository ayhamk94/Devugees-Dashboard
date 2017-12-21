import React from 'react';
import PropTypes from 'prop-types';

const Branch = ({ payload }) => {
  const {
    ref, master_branch: masterBranch, description
  } = payload;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4>Pushed a new branch</h4>
      <span>Branch Name: {ref}</span>
      <span>Master Branch: {masterBranch}</span>
      <span>{description}</span>
    </div>

  );
};

export default Branch;

Branch.propTypes = {
  payload: PropTypes.object,
};
