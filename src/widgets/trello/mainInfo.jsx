import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

const Link = props => <a href={ props.link }>{ props.children }</a>

class MainInfo extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="" style={{ overflowY: 'scroll' }}>
        <ListItem
          innerDivStyle={{  }}
          primaryTogglesNestedList
          autoGenerateNestedIndicator={false}
          primaryText={
            <div>
              <div style={{ fontSize: '18px', fontWeight: 200 }}>{list.name} - {list.cards.length}</div>
            </div>
            }
            nestedItems={list.cards.map(p => (
            <a href={p.url} target="_blank">
              <Link>
                <ListItem
                  style={{ paddingTop: 5, paddingBottom: 5, whiteSpace: 'pre-wrap', fontSize: '14px', fontWeight: 400 }}
                  disabled
                  key={p.id}
                  primaryText={p.name}
                />
            </Link>
            </a>
            ))}
          />
          <Divider />
        </div>

    );
  };
};

MainInfo.propTypes = {
  data: PropTypes.object.isRequired,
};


export default MainInfo;
