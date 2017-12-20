import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import './ScorePage.css';

class ScorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state={
    currUser:this.props.user,
    currScore:this.props.score,
    }
    this.handleLeaderBoard=this.handleLeaderBoard.bind(this);
  }

//setting up the local storage with current user and score then sort and adding them to the app State up to 5 rows
handleLeaderBoard(){
  let leaderBoardObj= {score:this.state.currScore,user:this.state.currUser};
  if(localStorage.getItem("leaderBoard")===null)//checking if the localStorage is empty and if so init with current user and scroe
      {
        localStorage.setItem("leaderBoard",JSON.stringify([leaderBoardObj]));
      }
    else {
      let temp =JSON.parse(localStorage.getItem("leaderBoard"));
      if(temp.length>0){//when we have more than 2 row in the leader board sort them by high score then clip them by 5 rows max
         temp.push(leaderBoardObj);
         temp.sort(function (a, b) {return b.score - a.score});
         let temp1= temp.slice(0,5);
         localStorage.setItem("leaderBoard",JSON.stringify(temp1));
        }
      }//else end
}//end of handleLeaderBoard


handleLeaderBoardComponent(){
let leaderBoardObj = JSON.parse(localStorage.getItem("leaderBoard"));
let tempcom = leaderBoardObj.map((userleader,index)=>{
  return (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{userleader.user}</td>
              <td>{userleader.score}/10</td>
            </tr>
            )
          });

return  tempcom;

}

componentWillMount() {
this.handleLeaderBoard();

}

render() {
  return (
    <div  className='container-scorePage noselect'>
      <div className='left-pane'>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">Your Score:</h3>
            <p className="card-text text-danger" id="scoreText"><span>{this.props.score}</span>/10</p>
          </div>
        </div>
      </div>
      <div className='right-pane'>
        <div className='btn-center '>
          <RaisedButton primary='true' id="rightbtn" onClick={() => this.props.tryAgain()}>Try Again
            <i className="ml-2 fa fa-retweet" aria-hidden="true"/></RaisedButton>
          <RaisedButton secondary='true' id="rightbtn" onClick={() => this.props.newGame()}>New Game
              <i className="ml-2 fa fa-play" aria-hidden="true"/></RaisedButton>
        </div>
      </div>
    </div>
  )
}
};

export default ScorePage;
