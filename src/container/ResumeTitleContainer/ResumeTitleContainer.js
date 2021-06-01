import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResumeTitleComponent from '../../component/ResumeTitleComponent';
import { infoUserAction} from "../../redux/actions/Action"

export class ResumeTitleContainer extends Component {
  render() {
    return <ResumeTitleComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusUser: state.infoUserReducer.status,
    dataUser: state.infoUserReducer.data,
    loadingUser: state.infoUserReducer.loading,
    messageUser: state.infoUserReducer.message,
    errorUser: state.infoUserReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   infoUserAction: (input) =>
      dispatch(infoUserAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeTitleContainer);
