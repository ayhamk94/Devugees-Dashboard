import React from 'react';
import moment from 'moment';

const PullRequest = (props) => {
  const {
    title, user, merged_by, head, created_at, merged, html_url
  } = props.payload.pull_request;
  return (
    <div>
      <h3><a href={html_url}>{title}</a></h3>

      <ul>
        <li className="list-item">Open by <a href={user.html_url}>{user.login} </a> </li>
        { merged ?
          <li className="list-item">
            {<span>Merged by <a href={merged_by.html_url}>{merged_by.login}</a></span>}
          </li> : null}
        <li className="list-item">Branch Name: {head.ref}</li>
        <li className="list-item">Created {moment(created_at).fromNow()} </li>
      </ul>
    </div>

  );
};

export default PullRequest;
