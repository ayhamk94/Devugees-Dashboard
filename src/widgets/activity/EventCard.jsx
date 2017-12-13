import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Branch from './CardContent/Branch';
import Push from './CardContent/Push';
import PullRequest from './CardContent/PullRequest';

const events = {
  PullRequestEvent: 'Pull Request',
  PushEvent: 'Pushed',
  CreateEvent: 'Created a branch',

};

const EventCard = (props) => {
  const { actor, payload, type } = props.activity;
  let cardText;
  if (type === 'PullRequestEvent') {
    cardText = <PullRequest payload={payload} />;
  } else if (type === 'PushEvent') {
    cardText = <Push payload={payload} />;
  } else if (type === 'CreateEvent') {
    cardText = <Branch payload={payload} />;
  }
  return (
    <Card style={{ marginTop: '10px', borderRadius: '0.2rem', }}>
      <CardHeader
        title={actor.display_login}
        subtitle={events[type]}
        actAsExpander
        avatar={actor.avatar_url}
        showExpandableButton
      />
      <CardText expandable>
        {cardText}
      </CardText>
    </Card>
  );
};

export default EventCard;
