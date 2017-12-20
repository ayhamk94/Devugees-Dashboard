import React from 'react';

// Utils
import moment from 'moment';

// Material UI
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { cyan100, lightBlack } from 'material-ui/styles/colors';

// Components
import CreatePost from './CreatePost';

class PostsList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    const local = localStorage.getItem('post-db');
    if (local === null) {
      localStorage.setItem('post-db', JSON.stringify([]));
    }
  }
  componentDidMount() {
    this.handleData();
  }
  handleState(posts) {
    this.setState({ posts });
  }
  handleData = () => {
    const local = localStorage.getItem('post-db');
    const posts = JSON.parse(local);
    this.handleState(posts);
  }
  render() {
    const { posts } = this.state;

    const style = {
      padding: 0,
      textAlign: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    };
    return (
      <List style={style}>
        <ListItem containerElement={<CreatePost data={posts} addPost={this.handleData} />} />
        <Divider />
        <div className="" style={{ overflowY: 'scroll' }}>
          {posts.map(p => (
            <div key={`${p.created}`}>
              <ListItem
                primaryTogglesNestedList
                autoGenerateNestedIndicator={false}
                primaryText={
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 200 }}>{p.title}</div>
                    <div style={{ color: lightBlack, fontSize: '0.7em' }}>
                      {moment(p.created).fromNow()}
                    </div>
                  </div>
                }
                nestedItems={[
                  <ListItem style={{ whiteSpace: 'pre-wrap', fontSize: '14px', fontWeight: 400 }} disabled key={p.created} primaryText={p.text} />
                ]}
                hoverColor={cyan100}
              />
              <Divider />
            </div>
          ))}
        </div>
      </List>
    );
  }
}

export default PostsList;
