'use strict';
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import DemoForm from '../components/common/DemoForm';
import {onSubmit} from '../actions/demoAction';
import {connect} from 'react-redux';
import { post } from 'axios';

let store = '';
let formData = '';

class DemoModule extends Component {

  static propTypes = {
    routes: PropTypes.objectOf(PropTypes.string)
  }

  constructor(props) {
    super(props);
    const { router, routes } = this.props;
    const { route } = this.props;
    router.setRouteLeaveHook(route, this.routerWillLeave.bind(this));
    store = routes[0].store;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(){
    debugger;
    let formData = new FormData();
    formData.append('file', document.getElementById('file-upload').files[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    const url = 'http://example.com/fileupload/';
    post(url, formData, config)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit(values) {
    alert(JSON.stringify(values));
    store.dispatch(onSubmit(values));
    formData = store.getState().demoReducer;
  }

  routerWillLeave() {

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 settlementStepForm">
          <h1>Demo Form Loaded</h1>
          <DemoForm onSubmit={this.handleSubmit} {...formData}/>
          <input type="file" className="file-upload" id="file-upload" onChange={this.uploadFile} />
        </div>
      </div>
    );
  }
}

DemoModule.propTypes = {
  router: PropTypes.object,
  route: PropTypes.object,
  routes: PropTypes.array
};

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps)(DemoModule));
