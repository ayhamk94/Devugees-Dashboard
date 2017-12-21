import React from 'react';
import Check from 'material-ui/svg-icons/navigation/check';
import Close from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import PropTypes from 'prop-types';
import './QuizPage.css';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      score: 0,
    };
  }


  handleValidate = (answer) => {
    let newScore = this.state.score;
    const currentQuestion = this.state.question;
    if (answer && this.props.questionArr[this.state.question - 1].correct_answer === 'True') {
      newScore++;
    } else if (!answer && this.props.questionArr[this.state.question - 1].correct_answer === 'False') {
      newScore++;
    }
    this.setState({ question: currentQuestion + 1, score: newScore });


    if (this.state.question === 10) {
      this.props.quizFinished(newScore);
    }
  }

  handleProgressBar = () => {
    if (this.state.question - 1 === 0) { return null; }

    return `${(this.state.question - 1) * 10}%`;
  }

  render() {
    return (
      <div className="card text-center container noselect">
        <div className="card-header">Question <span>{this.state.question}</span></div>
        <div className="card-block">
          <p className="card-text-question">{this.props.questionArr[this.state.question - 1].question}</p>
        </div>
        <div>
          <CardActions>
            <RaisedButton labelPosition="before" icon={<Check />} primary={false} onClick={e => this.handleValidate(true)} />
            <RaisedButton labelPosition="before" secondary icon={<Close />} onClick={e => this.handleValidate(false)} />
          </CardActions>
        </div>
      </div>


    );
  }
}

export default QuizPage;
QuizPage.propTypes={
  score:          PropTypes.number,
  question:       PropTypes.number,
  questionArr:    PropTypes.array,
  quizFinished:   PropTypes.func,
  handleValidate: PropTypes.func
}
