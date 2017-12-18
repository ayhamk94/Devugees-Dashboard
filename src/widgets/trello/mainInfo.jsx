import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import {cyan100, lightBlack} from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';

class MainInfo extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="" style={{overflowY: 'scroll'}}>
        <ListItem
          innerDivStyle={{paddingTop: 5, paddingBottom: 5}}
          primaryTogglesNestedList={true}
          autoGenerateNestedIndicator={false}
          primaryText={
          <div>
            <div style={{fontSize: "18px", fontWeight: 200}}>{list.name}</div>
            <div style={{color: lightBlack, fontSize: "0.7em"}}>
            {list.cards.length}
            </div>
          </div>
          }
          nestedItems= {list.cards.map(p => (
            <a href={p.url} target="_blank">
              <ListItem style={{paddingTop: 5, paddingBottom: 5, whiteSpace: "pre-wrap", fontSize: "14px", fontWeight: 400}} disabled={true} key={p.id} primaryText={p.name}/>
          </a>
          ))}

          hoverColor={cyan100}
          />
        <Divider />
      </div>

     );
  }
}

MainInfo.propTypes = {
  data: PropTypes.object.isRequired,
};


export default MainInfo;
