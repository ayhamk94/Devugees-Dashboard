import React from 'react';
import moment from 'moment';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Branch from './CardContent/Branch';
import Push from './CardContent/Push';
import PullRequest from './CardContent/PullRequest';
import Divider from 'material-ui/Divider';

const events = {
  PullRequestEvent: 'Made a Pull Request',
  PushEvent: 'Pushed a Branch',
  CreateEvent: 'Created a branch',

};

const EventCard = (props) => {
  const {
    actor, payload, type, created_at
  } = props.activity;
  let cardText;
  if (type === 'PullRequestEvent') {
    cardText = <PullRequest payload={payload} />;
  } else if (type === 'PushEvent') {
    cardText = <Push payload={payload} />;
  } else if (type === 'CreateEvent') {
    cardText = <Branch payload={payload} />;
  }
  return [
    <Card
      style={{
        marginTop: '5px',
        borderRadius: '0.2rem',
        boxShadow: 'none',
}}
    >
      <CardHeader
        title={actor.display_login}
        subtitle={`${events[type]} ${moment(created_at).fromNow()}`}
        actAsExpander
        avatar={actor.avatar_url}
        showExpandableButton
      />
      <CardText expandable>
        {cardText}
      </CardText>
    </Card>,
    <Divider />
  ];
};

export default EventCard;
