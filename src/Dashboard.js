import React from 'react';
import Example from './widgets/example/example'

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h1>
          This is the Dashboard
        </h1>
            <Example/>
      </div>

    )
  }
}
export default Dashboard;
