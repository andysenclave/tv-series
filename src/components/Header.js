import React, {PropTypes, Component} from 'react';


class Header extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div>
        <h1> This is where the header goes. Woohoo!!</h1>
      </div>
    );
  }
}

Header.propTypes = {
  texts: PropTypes.object
};

export default Header;
