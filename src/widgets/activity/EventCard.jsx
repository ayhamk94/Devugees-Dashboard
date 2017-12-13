import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const events = {
  PullRequestEvent: 'Pull Request',
  PushEvent: 'Pushed',
  CreateEvent: 'Created a branch',

};

const CardExampleExpandable = (props) => {
  const { actor, payload, type } = props.activity;
  return (
    <Card style={{ margin: '10px', borderRadius: '0.2rem', }}>
      <CardHeader
        title={actor.display_login}
        subtitle={events[type]}
        actAsExpander
        avatar={actor.avatar_url}
        showExpandableButton
      />
      <CardText expandable>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};

export default CardExampleExpandable;
