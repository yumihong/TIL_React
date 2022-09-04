// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import EventPractice from "./EventPractice";

// const App = () => {
//   return <EventPractice />;
// }

import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
      
    );
  }
}

export default App;
