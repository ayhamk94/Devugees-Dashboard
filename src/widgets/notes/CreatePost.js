import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';

const ErrorMessage = ({ error, open, close }) => {
  const message = {
    noContent: 'You should write something',
    noTitle: 'Please provide a title',
    maxLength: `That's a very long text`,
  }
  return (
    <Snackbar
      open={open}
      message={message[error] || 'Error'}
      autoHideDuration={2000}
      onRequestClose={close}
    />
  )
}

ErrorMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.string,
  close: PropTypes.func.isRequired
}


class CreatePost extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      text: '',
      error: '',
      snackbar: false,
      expanded: false
    }
  }
  handleChange = event => {
    const { id, value } = event.target
    id === 'title' ? this.setState({ title: value }) : this.setState({ text: value })
  }
  handleSubmit = () => {
    const { title, text } = this.state
    const data = this.props.data

    const error = this.validate(title, text)
    if (error) return

    data.unshift({ title, text, created: Date.now() })

    localStorage.setItem(`post-db`, JSON.stringify(data))
    this.props.addPost()
    this.handleExpand(false)
  }
  handleExpand(expanded){
    this.setState({expanded})
  }
  handleError = (snackbar, error) => {
    this.setState({snackbar, error})
  }
  validate(title, text){
    if (title.length === 0) {
      this.handleError(true, "noTitle")
      return true
    }
    if (text.length === 0) {
      this.handleError(true, 'noContent')
      return true
    }
    if (title.length > 60 || text.length > 240) {
      this.handleError(true, 'maxLength')
      return true
    }
  }
  render () {
    const { text, title, error, snackbar } = this.state

    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={e => this.handleExpand(e)}
        key="card" style={{boxShadow: "0 0"}}>
        <CardHeader
          title="Create note"
          actAsExpander={true}
          showExpandableButton={true}
          style={{textAlign: 'left'}}
        />
        <CardText expandable={true}>
          <TextField
            id="title"
            floatingLabelText="Title"
            value={title}
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            id="text"
            floatingLabelText="Note"
            multiLine={true}
            value={text}
            fullWidth={true}
            onChange={this.handleChange}
            style={{textAlign: 'left'}}
          />
          <div style={{display: "flex", justifyContent: 'flex-end', }}>
            <FlatButton
              onClick={this.handleSubmit}
              style={{marginTop: "20px"}}
              label="Submit"
              primary={true} />
          </div>
        </CardText>
        <ErrorMessage error={error} open={snackbar} close={() => this.handleError(false, error)}/>
      </Card>
    )
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default CreatePost;
