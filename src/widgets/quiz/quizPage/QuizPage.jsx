import React from 'react';
import './QuizPage.css';
import RaisedButton from 'material-ui/RaisedButton';


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
    // const divStyle = { width: `${(this.state.question - 1) * 10}%` };
    return (

      <div className="card text-center container noselect">
        <div className="card-header">Question <span>{this.state.question}</span></div>
        <div className="card-block">
          <p className="card-text-question">{this.props.questionArr[this.state.question - 1].question}</p>
        </div>
        <div>
          <RaisedButton primary onClick={e => this.handleValidate(true)}>Right</RaisedButton>
          <RaisedButton secondary onClick={e => this.handleValidate(false)}>Wrong </RaisedButton>
        </div>
      </div>


    );
  }
}

export default QuizPage;
