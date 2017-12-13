import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
const events = {
  PullRequestEvent: 'Pull Request',
  PushEvent: 'Pushed',
  CreateEvent: 'Created a branch',

};

const CardExampleExpandable = (props) => {
  const { actor, payload, type } = props.activity;
  return (
    <Card style={{ margin: '10px', borderRadius: '0.2rem', }} className="activity">
      <CardHeader
        title={actor.display_login}
        subtitle={events[type]}
        actAsExpander
        avatar={actor.avatar_url}
        showExpandableButton
      />
      <CardText expandable>
        {
            payload.commits?
              payload.commits.map((commit) =>
                <ListItem primaryText={commit.message} leftIcon={<ContentInbox />} />
              )
            : payload.pull_request?
                <ListItem primaryText={payload.pull_request.title} leftIcon={<ContentInbox />} />
            : payload.ref_type?
                <ListItem primaryText={payload.ref} leftIcon={<ContentInbox />} />
            :

            <div>
              "Not yet implemented"
            </div>
          }
        </CardText>
      </Card>
  );
};

export default CardExampleExpandable;
