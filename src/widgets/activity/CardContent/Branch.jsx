import React from 'react';

const Branch = ({ payload }) => {
  const {
    ref, ref_type, master_branch, description
  } = payload;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4>Pushed a new branch</h4>
      <span>Branch Name: {ref}</span>
      <span>Master Branch: {master_branch}</span>
      <span>{description}</span>
    </div>

  );
};

export default Branch;
