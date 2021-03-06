import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PullRequest = (props) => {
  const {
    title, user, merged_by, head, created_at, merged, html_url: htmlUrl
  } = props.payload.pull_request;
  return (
    <div className="pull-request">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4><a href={htmlUrl} target="_blank">{title}</a></h4>
        <span>Status: {props.payload.action}</span>
        <span>{moment(created_at).fromNow()}</span>
        <span>Branch: {head.ref}</span>
        <span>Opend by:  <a href={user.html_url} target="_blank">{user.login} </a></span>
        { merged ? <span>Merged by: <a href={merged_by.html_url} target="_blank">{merged_by.login}</a></span>
             : null}
      </div>
    </div>

  );
};

export default PullRequest;

PullRequest.propTypes = {
  payload: PropTypes.object,
};
