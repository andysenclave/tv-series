import React, {Component} from 'react';
import Spin from 'react-spin';

class Spinner extends Component {
  render () {
    const style = {
      lines: 9,
      length:10,
      width: 10,
      radius: 15,
      scale: 4.5,
      top: '30%',
      left: '40%'
    };
    return (
      <Spin config={style} />
    );
  }
}

export default Spinner;
