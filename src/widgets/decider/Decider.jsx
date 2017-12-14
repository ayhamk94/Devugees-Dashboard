import React from 'react';
import './decider.css';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, open: false };
  }
  componentDidMount() {
  }

  handleClose = () => {
    this.setState({open: false});
  };
  handleSubmit = () => {
    const url = 'https://yesno.wtf/api/';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData, open: true });
    });
  }

  render() {
    const { data } = this.state;
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
      />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
      />,
    ];  
    return (
      <div className="activity">
        <h1>The Decider</h1>

        <RaisedButton label="Ask" 
          onClick={this.handleSubmit}
          primary={true} />
        <Dialog
        title="The answer is..."
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose} >
          {data.answer}
        </Dialog>
    </div>
    );
  }
}
