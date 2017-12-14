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
    value:null
  };
}

handleChange = (event, index, value) => this.setState({value});

render () {
  let toggleconfig=null;
  const style ={
    cards:{
    'backgroundColor':'#FFA726',
    'textAlign':'center',
  },
  button:{

  }
}

  toggleconfig=(
    <form className="form-control" style={style.cards} onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}>
      <TextField className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} />
      <RaisedButton label="Start Quiz"  type="submit"/>

      <Card style={style.cards}  className='style-override' >
        <CardHeader
          title="Options"
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
        <CardActions>
          <RaisedButton  label="Easy"   primary  ={true}/>
          <RaisedButton  label="Medium" secondary={true}/>
          <RaisedButton  label="Hard" />
        </CardActions>
        <div>
          <SelectField   floatingLabelText="Catagories"
             value={this.state.value}
              onChange={this.handleChange} >
            <MenuItem value={1} primaryText="Film" />
            <MenuItem value={2} primaryText="Music" />
            <MenuItem value={3} primaryText="Television" />
            <MenuItem value={4} primaryText="Sport" />
            <MenuItem value={5} primaryText="Art" />
          </SelectField>
        </div>
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
