'use strict';
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class Acknowledgement extends Component {

  constructor(props) {
    super(props);
    const { router } = this.props;
    const { route } = this.props;

    router.setRouteLeaveHook(route, this.routerWillLeave.bind(this));

  }

  routerWillLeave() {

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Acknowledgement </h1>
        </div>
      </div>
    );
  }
}

Acknowledgement.propTypes = {
  router: PropTypes.object,
  route: PropTypes.object
};

export default  withRouter(Acknowledgement);
