import React from 'react';
import './QuizPage.css';
import RaisedButton  from 'material-ui/RaisedButton';


class QuizPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      question:1,
      score:0,
    }
    this.handleValidate= this.handleValidate.bind(this);
    this.handleProgressBar= this.handleProgressBar.bind(this);
  }


handleValidate(answer){
  let newScore=this.state.score;
  let currentQuestion = this.state.question;
    if(answer && this.props.questionArr[this.state.question-1].correct_answer==="True"){
      newScore++;

    }else if(!answer && this.props.questionArr[this.state.question-1].correct_answer==="False"){
      newScore++;
    }
    this.setState({question:currentQuestion+1,score:newScore})


      if(this.state.question===10){
    this.props.quizFinished(newScore)
  }
}

 handleProgressBar() {
  if(this.state.question - 1 === 0) {return null}
  else {
  return  (this.state.question - 1) * 10 + "%"
  }
}

  render () {
    const divStyle={width:(this.state.question-1)*10+"%"};
  //  const divStyleScore={width:(this.state.score)*10+"%"};
    return(

      <div className="card text-center container noselect">
        <div className="card-header">Question <span>{this.state.question}</span></div>
        <div className="card-block">
          <p className="card-text  ">{this.props.questionArr[this.state.question-1].question}  </p>
        </div>
        {/* <div className="progress ">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow={this.state.question*10} aria-valuemin="0" aria-valuemax="100" style={divStyle}>
            <span>{this.handleProgressBar()}</span>
          </div>
        </div> */}
        <div className="card-footer text-muted ">
          <RaisedButton primary={true}  id="rightbtn" onClick={(e)=>this.handleValidate(true)}>Right  </RaisedButton>
          <RaisedButton secondary={true}              onClick={(e)=>this.handleValidate(false)}>Wrong </RaisedButton>
        </div>
      </div>


    )
  }
};

export default QuizPage;
