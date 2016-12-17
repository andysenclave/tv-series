import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import App from './components/App';
import DemoModule from './containers/DemoModule';
import Acknowledgement from './containers/Acknowledgement';
import NotFoundPage from './containers/NotFoundPage';
import Spinner from './components/common/Spinner';

class Routes extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const {history} = this.props;
    if(true){                     //condition for loading goes here
      return(
        <div className="container">
          <Router history={history} >
            <Route path="/" component={App} {...this.props}>
              <IndexRoute component={DemoModule}/>
              <Route path="acknowledgement" component={Acknowledgement} />
              <Route path="*" component={NotFoundPage} />
            </Route>
          </Router>
        </div>
      );
    } else {
      return(
        <div>
          <Spinner />
        </div>
      );
    }
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(Routes);
