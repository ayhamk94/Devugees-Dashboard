import React from 'react';

const PullRequest = (props) => {
  const { payload } = props;
  console.log(payload);
  return (
    <p>{payload.pull_request.title}</p>
  );
};

export default PullRequest;
