# DEVUGEES  Dashboard
This a simple dashboard page using [React](https://reactjs.org/) and [Material-UI](http://www.material-ui.com/#/) with modular layout to add widgets as react components.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [DEVUGEES  Dashboard](#devugees-dashboard)
	- [Setting up](#setting-up)
	- [Git rules](#git-rules)
		- [Important](#important)
	- [Style Guide](#style-guide)
		- [Naming](#naming)
		- [Widget Sizes](#widget-sizes)
		- [CSS](#css)
		- [Importing](#importing)
	- [Widget specifics](#widget-specifics)
		- [Trello integration](#trello-integration)

<!-- /TOC -->

## Setting up
1. Clone the repo.

  `git clone https://github.com/ayhamk94/Devugees-Dashboard.git`

1. Navigate to the project folder.

  `cd devugees-dashboard`

1. Install the dependencies.

  `npm install`
  or
  `yarn install` if you are using yarn.

1. Start the server.

  `npm start`
  or
  `yarn start` if you are using yarn.

## Git rules
1. Make sure you pull all the recent changes.

  `git pull`
1. Create your own branch from develop.

  `git checkout -b <name of your branch>`

1. Pull the latest changes from branch `develop`.

  `git checkout develop`
  `git pull`

1. Apply Changes to your branch.

  `git checkout <name of your branch>`
  `git merge develop`

### Important 
__Push your branch to GitHub and create a merge request.__
__Always make sure you are working on your own branch and creating a merge. requst into `Develop`.__

__DONT WORK ON `DEVELOP` OR PUSH TO ` DEVELOP`__



## Style Guide
### Naming
- Use __jsx__  and not js as file extenion

### Widget Sizes
In the dashboard component add your Widget to the dashboard inside the Widget component like this.
<!-- Missing Example -->

Make sure you set the size for your widget and design it according to your size
- class `big` give the widget `width: 100%`
- class `medium` give the widget `width: 50%`
- class `small` give the widget `width: 25%`

### CSS
Use your css file inside the main component of your widget.
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
### Importing
 in data.js import your widgets from widget folder

```jsx

import Trello from './widgets/trello/Trello';

```
then add your widget info including the Component to the array as follows

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

## Widget specifics
### Trello integration
Go to [https://trello.com/app-key]( https://trello.com/app-key ) and get your api key.
Then get our Oauth token from that domain and put it into the Trello Setting [https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token](https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token)
After you received your api key and token, put them together with your board id in the Settings field.
