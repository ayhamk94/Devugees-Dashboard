import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import './App.css';

import LandingPage from '../landingPage/LandingPage.jsx';
import ScorePage from '../scorePage/ScorePage.jsx';
import QuizPage from '../quizPage/QuizPage.jsx';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {  padding: 10,},
};

class App extends React.Component {

constructor(props){
  super(props);
    this.state = {
      user:'',
      page:'LandingPage',
      score:0,
      slideIndex: 0,
      diffeculty:"hard",
      questionNum:10,
      catagories:"",
      questionArr:[]
      }

      this.onStartgame=this.onStartgame.bind(this);
      this.quizFinished=this.quizFinished.bind(this);
      this.tryAgain=this.tryAgain.bind(this);
      this.newGame=this.newGame.bind(this);
    }

  onStartgame(user,diffeculty) {
    let replayApi='https://opentdb.com/api.php?amount=10&type=boolean&diffeculty='+diffeculty+'&encode=url3986';
    fetch(replayApi)
    .then((response)=>response.json())
    .then((json)=>{
    let questionArr=  json.results.map((e)=>{
        e.question= unescape(e.question);
        return e;
      });
      if(user===""){
        this.setState({user:"Guest",page:"QuizPage",questionArr:questionArr,slideIndex: 1});
      }else{
      this.setState({user:user,page:"QuizPage",questionArr:questionArr,slideIndex: 1});
}

    })
  }

  quizFinished(e){
    this.setState({score:e,page:"ScorePage",slideIndex: 2})

  }
  tryAgain(){
    this.setState({page:"QuizPage",score:0,slideIndex: 1})
  }
  newGame(){
    this.setState({page:"LandingPage",score:0,user:"",slideIndex: 0})
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    let page = null;
    if(this.state.page==="LandingPage"||this.state.slideIndex===0){
      page = <LandingPage onStartgame={this.onStartgame}/> ;
    }else if (this.state.page==="QuizPage"||this.state.slideIndex===1) {
      page = <QuizPage quizFinished={this.quizFinished}
        questionArr={this.state.questionArr} />
    }else if(this.state.page==="ScorePage"||this.state.slideIndex===2){
      page = <ScorePage
        user={this.state.user}
        score={this.state.score}
        leaderBoard={this.state.leaderBoard}
        tryAgain={this.tryAgain}
        newGame={this.newGame}/>
    }

    return (

        <div className='App'>
          <div className="full-width">
            <Tabs   onChange={this.handleChange}  value={this.state.slideIndex}  >
              <Tab label="Start" value={0} />
              <Tab label="Quiz time" value={1} />
              <Tab label="Leader Board" value={2} />
            </Tabs>

            <SwipeableViews    index={this.state.slideIndex}  onChangeIndex={this.handleChange}  >
              <div style={styles.headline}>
                {page}
              </div>
              <div style={styles.headline}>
                {page}
              </div>
              <div style={styles.headline}>
                {page}
              </div>
            </SwipeableViews>
          </div>

      </div>
    
    );
  }
}

export default App;
