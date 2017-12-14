import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LandingPage from "../landingPage/LandingPage.jsx";
import QuizPage from "../quizPage/QuizPage.jsx";
import './nav.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {  padding: 10,},
};

class nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs  onChange={this.handleChange}  value={this.state.slideIndex}  >
          <Tab label="Start" value={0} />
          <Tab label="Quiz time" value={1} />
          <Tab label="Leader Board" value={2} />
        </Tabs>

        <SwipeableViews   index={this.state.slideIndex}  onChangeIndex={this.handleChange}  >
          <div>
            <h2 style={styles.headline}></h2>
            <LandingPage onStartgame={this.props.onStartgame}/>
          </div>
          <div style={styles.slide}>

          </div>
          <div style={styles.slide}>

          </div>
        </SwipeableViews>
      </div>
    );
  }
}
export default nav;
