import React from 'react';
import moment from 'moment';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Branch from './CardContent/Branch';
import PullRequest from './CardContent/PullRequest';


const events = {
  PullRequestEvent: 'Pull Request',
  CreateEvent: 'Created a branch',

};

const EventCard = (props) => {
  const {
    actor, payload, type, created_at
  } = props.activity;
  let cardText;
  if (type === 'PullRequestEvent') {
    cardText = <PullRequest payload={payload} />;
  } else if (type === 'CreateEvent') {
    cardText = <Branch payload={payload} />;
  }
  return [
    <Card
      key='card'
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
      />
      <CardText expandable style={{ padding: '0px' }}>
        {cardText}
      </CardText>
    </Card>,
    <Divider key='divider'/>
  ];
};

export default EventCard;
