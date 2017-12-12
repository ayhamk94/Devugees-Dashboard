# DEVUGEES  Dashboard
###This a simple dashboard page using [React](https://reactjs.org/) and [Material-UI](http://www.material-ui.com/#/) with modular layout to add widgets as react components.


## Setting up
##### Clone the repo.
`git clone https://github.com/ayhamk94/Devugees-Dashboard.git`
##### Navigate to the project folder.
`cd devugees-dashboard`
#### Install the dependencies.
`npm install`
or
`yarn install` if you are using yarn.


#### Start the server.
`npm start`
or
`yarn start` if you are using yarn.
## Git rules
#### Make sure you pull all the recent changes.
`git pull`
#### Create your own branch from develop.
`git checkout -b <name of your branch>`

#### Pull the latest changes from branch `develop`.
`git checkout develop`
`git pull`
#### Apply Changes to your branch.
`git checkout <name of your branch>`
`git merge develop`
#### Push your branch to GitHub and create a merge request.

### Always make sure you are working on your own branch and creating a merge. requst into `Develop`.
### DONT WORK ON `DEVELOP` OR PUSH TO ` DEVELOP`.



## Style Guide
#### In the dashboard component add your Widget to the dashboard inside the Widget component like this.
``` jsx
import React from 'react';
import Example from './widgets/example/example';
import Widget from './Widget';

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h1>
          DEVUGEES DASHBOARD
        </h1>
        <div className="widgets-container">
          <Widget>
            <Example/>
          </Widget>
          <Widget>
            <News/>
          </Widget>
          <Widget>
            <Clocks/>
          </Widget>
        </div>
      </div>

    )
  }
}
export default Dashboard;

```
#### Use your css file inside the main component of your widget.
```javascript
import React from 'react';
import './example.css';

class Example extends React.Component {
  render() {
    return(
      <div>
        <h2>This is an example app</h2>
      </div>
    )
  }
}
export default Example;

```
