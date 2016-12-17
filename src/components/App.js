'use strict';
import React, {Component, PropTypes} from 'react';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  route:PropTypes.object,
  children: PropTypes.element
};

export default App;
