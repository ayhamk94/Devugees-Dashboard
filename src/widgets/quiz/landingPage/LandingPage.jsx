import React from 'react';
import RaisedButton  from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import './LandingPage.css';
import TextField from 'material-ui/TextField';

class LandingPage extends React.Component {
constructor(props){
  super(props);
  this.state={
    user:'',
    value:null,
    diffeculty:"easy"
  };
}

handleChange = (event, index, value) => this.setState({value});


render () {
  let toggleconfig=null;
  const style ={
    cards:{
    'textAlign':'center',
  },
    Options_tap:{
      display:"flex",
      flexFlow:"column",
      justifyContent:"center",
      alignItems: "center"

  },
  button:{
    marginLeft:"20px"
  }
}

  toggleconfig=(
    <form className="form-control" style={style.cards} onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user,this.state.diffeculty,this.state.value)}}>
      <TextField className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} />

        <RaisedButton style={style.button} label="Start Quiz"  type="submit"/>

      <Card style={style.cards}  className='style-override' >
        <CardHeader
          title="Options"
          actAsExpander={true}
          showExpandableButton={false}
        />
      <CardText expandable={false} style={style.Options_tap}>
        <CardActions>
          <RaisedButton  label="Easy"   primary  ={true} onClick={(e)=>this.setState({diffeculty:"easy"})}/>
          <RaisedButton  label="Medium" secondary={true} onClick={(e)=>this.setState({diffeculty:"medium"})}/>
          <RaisedButton  label="Hard"                    onClick={(e)=>this.setState({diffeculty:"hard"})}/>
        </CardActions>
      </CardText>
    </Card>
    </form>)


  return(
    <div className="container">
      {toggleconfig}
    </div>
  );
}
}
export default LandingPage;
