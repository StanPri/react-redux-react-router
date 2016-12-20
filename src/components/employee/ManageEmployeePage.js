import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ManageEmployeePageActions from '../../actions/ManageEmployeePageActions';

class ManageEmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item:{}
    };
  }

  render () {
    return (
      <h1>ManageCourse</h1>
    );
  }
}

ManageEmployeePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    item: this.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ManageEmployeePageActions, dispatch)
  };
}

 export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeePage);
