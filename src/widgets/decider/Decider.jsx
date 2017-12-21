import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { red500, greenA200 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';
import Spinner from '../../components/Spinner';
import './decider.css';


const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  center: {
    textAlign: 'center',
  },
  mb3: {
    marginBottom: '1em',
  }
};

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, open: false, loading: true };
  }

  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    const url = 'https://yesno.wtf/api/';
    this.setState({ open: true });

    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData, loading: false });
    });
  }

  render() {
    const { data } = this.state;
    const actions = [
      <FlatButton
        key="FlatButton"
        label="close"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];
    return (
      <div className="decider" style={styles.center}>
        <h1>The Decider</h1>
        <p style={styles.mb3}>
          The indispensable tool for every important decision in your company.
        </p>
        <p style={styles.mb3}>
          Just lean back and let the algorythm make the hard work for you!
        </p>
        <RaisedButton
          label="Ask"
          onClick={this.handleSubmit}
          primary
        />
        <Dialog
          title="And the answer is..."
          actions={actions}
          modal={false}
          style={styles.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {
            !this.state.loading ?
              data.answer && data.answer === 'yes' ?
                <div>
                  <h2>{data.answer}</h2>
                  <br />
                  <ThumbsUp style={styles.largeIcon} color={greenA200} />
                </div>
              :
                <div>
                  <h2>{data.answer}</h2>
                  <br />
                  <ThumbsDown style={styles.largeIcon} color={red500} />
                </div>
            :
                <Spinner />
          }
        </Dialog>
      </div>
    );
  }
}
