import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';
import LandingPage from '../landingPage/LandingPage';
import ScorePage from '../scorePage/ScorePage';
import QuizPage from '../quizPage/QuizPage';
import PropTypes from 'prop-types';
import './App.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'ss',
      page: 'LandingPage',
      score: 0,
      slideIndex: 0,
      diffeculty: 'easy',
      questionNum: 10,
      questionArr: []
    };
  }

  onStartgame = (user, diffeculty) => {
    const replayApi = `https://opentdb.com/api.php?amount=10&type=boolean&diffeculty=${diffeculty}&encode=url3986`;
    fetch(replayApi)
    .then(response => response.json())
    .then((json) => {
      const questionArr = json.results.map((e) => {
        e.question = unescape(e.question);
        return e;
      });
      if (user === '') {
        this.setState({ user: 'Guest', page: 'QuizPage', questionArr, slideIndex: 1 });
      } else {
        this.setState({ user, page: 'QuizPage', questionArr, slideIndex: 1 });
      }
    });
  }

  quizFinished = (e) => {
    this.setState({ score: e, page: 'ScorePage', slideIndex: 2 });
  }
  tryAgain = () => {
    this.setState({ page: 'QuizPage', score: 0, slideIndex: 1 });
  }
  newGame = () => {
    this.setState({ page: 'LandingPage', score: 0, user: '', slideIndex: 0 });
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    let page = null;
    if (this.state.page === 'LandingPage' || this.state.slideIndex === 0) {
      page = <LandingPage onStartgame={this.onStartgame} />;
    } else if (this.state.page === 'QuizPage' || this.state.slideIndex === 1) {
      page = (<QuizPage
        quizFinished={this.quizFinished}
        questionArr={this.state.questionArr}
      />);
    } else if (this.state.page === 'ScorePage' || this.state.slideIndex === 2) {
      page = (<ScorePage
        user={this.state.user}
        score={this.state.score}
        leaderBoard={this.state.leaderBoard}
        tryAgain={this.tryAgain}
        newGame={this.newGame}
      />);
    }

    return (

      <div className="quizApp noselect">
        <div className="full-width">
          <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
            <Tab label="Start" value={0} />
            <Tab label="Quiz time" value={1} />
            <Tab label="Leader Board" value={2} />
          </Tabs>

          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
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

App.propTypes = {
  user:         PropTypes.string,
  diffeculty:   PropTypes.string,
  questionArr:  PropTypes.array,
  score:        PropTypes.number,
  slideIndex:   PropTypes.number,
  questionNum:  PropTypes.number,
  value:        PropTypes.number,
  onStartgame:  PropTypes.func,
  newGame:      PropTypes.func,
  tryAgain:     PropTypes.func,
  quizFinished: PropTypes.func
};
