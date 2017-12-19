# DEVUGEES  Dashboard
### This a simple dashboard page using [React](https://reactjs.org/) and [Material-UI](http://www.material-ui.com/#/) with modular layout to add widgets as react components.


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

## Trello integration
Go to [https://trello.com/app-key]( https://trello.com/app-key ) and get your api key.
Then get our Oauth token from that domain and put it into the Trello Setting [https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token](https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token)
After you received your api key and token, put them together with your board id in the Settings field.
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
#### Make sure you set the size for your widget and design it according to your size
#### class `big` give the widget `width: 100%`
#### class `medium` give the widget `width: 50%`
#### class `small` give the widget `width: 25%`
####  
#### in data.js import your widgets from widget folder

```jsx

import Trello from './widgets/trello/Trello';

```
#### then add your widget info including the Component to the array as follows 

``` jsx
{
  name: 'Trello',
  component: <Trello />,
  className: 'small',
  id: 'ddt0',
  mounted: false,
  developerName: 'Tommey'

},


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
### Use jsx  and not js as file extenion
