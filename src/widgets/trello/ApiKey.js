import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';

const ErrorMessage = ({ error, open, close }) => {
  const message = {
    noContent: 'You should write something',
    noTitle: 'Please provide a title',
    maxLength: 'That\'s a very long text',
  };
  return (
    <Snackbar
      open={open}
      message={message[error] || 'Error'}
      autoHideDuration={2000}
      onRequestClose={close}
    />
  );
};

ErrorMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.string,
  close: PropTypes.func.isRequired
};


class ApiKey extends React.Component {
  constructor() {
    super();
    this.state = {
      api_key: '',
      token: '',
      board_id: '',
      error: '',
      snackbar: false,
    };
  }


  handleError = (snackbar, error) => {
    this.setState({ snackbar, error });
  }

  validate(api_key, token, board_id) {
    if (api_key.length === 0) {
      this.handleError(true, 'noTitle');
      return true;
    }
    if (token.length === 0) {
      this.handleError(true, 'noContent');
      return true;
    }
    if (board_id.length === 0) {
      this.handleError(true, 'noContent');
      return true;
    }
    if (api_key.length > 60 || token.length > 240) {
      this.handleError(true, 'maxLength');
      return true;
    }
  }
  componentWillMount() {
    const trello = JSON.parse(localStorage.getItem('trello-db'));
    if (trello) {
      this.setState({ api_key: trello.api_key, token: trello.token, board_id: trello.board_id });
    }
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    id === 'api_key' ? this.setState({ api_key: value }) : id === 'board_id' ? this.setState({ board_id: value }) : this.setState({ token: value });
  }

  handleSubmit = () => {
    const { api_key, token, board_id } = this.state;
    let data = this.props.data;

    const error = this.validate(api_key, token, board_id);
    if (error) return;

    data = {
      api_key, token, board_id, created: Date.now()
    };

    localStorage.setItem('trello-db', JSON.stringify(data));
    this.props.addTrelloInfo();
  }

  render() {
    const {
      token, api_key, board_id, error, snackbar
    } = this.state;

    return (
      <Card
        key="card"
        style={{ boxShadow: '0 0' }}
      >
        <CardHeader
          title="Settings"
          titleStyle={{ padding: 0 }}
          style={{ textAlign: 'left' }}
        />
        <CardText >
          <TextField
            id="api_key"
            floatingLabelText="Api Key"
            value={api_key}
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            id="token"
            floatingLabelText="Token"
            value={token}
            fullWidth
            onChange={this.handleChange}
            style={{ textAlign: 'left' }}
          />
          <TextField
            id="board_id"
            floatingLabelText="Board ID"
            value={board_id}
            fullWidth
            onChange={this.handleChange}
            style={{ textAlign: 'left' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <FlatButton
              onClick={this.handleSubmit}
              style={{ marginTop: '20px' }}
              label="Submit"
              primary
            />
          </div>
        </CardText>
        <ErrorMessage error={error} open={snackbar} close={() => this.handleError(false, error)} />
      </Card>
    );
  }
}

ApiKey.propTypes = {
  addTrelloInfo: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default ApiKey;
