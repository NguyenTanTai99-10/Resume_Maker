import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactHomeComponent from '../../component/ContactHomeComponent';

import {
  getCityAction,
  checkEmailAction,
  editInfoUserAction,
  logoutCheckMailAction,
  editAvatarAction,
  infoUserAction
} from '../../redux/actions/Action';

export class ContactHomeContainer extends Component {
  render() {
    return <ContactHomeComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusCity: state.getCityReducer.status,
    dataCity: state.getCityReducer.data,
    loadingCity: state.getCityReducer.loading,
    messageCity: state.getCityReducer.message,
    errorCity: state.getCityReducer.error,
    //=====================================
    statusEmail: state.checkEmailReducer.status,
    dataEmail: state.checkEmailReducer.data,
    loadingEmail: state.checkEmailReducer.loading,
    messageEmail: state.checkEmailReducer.message,
    errorEmail: state.checkEmailReducer.error,
    //======================================
    statusEditInfo: state.editInfoUserReducer.status,
    dataEditInfo: state.editInfoUserReducer.data,
    loadingEditInfo: state.editInfoUserReducer.loading,
    messageEditInfo: state.editInfoUserReducer.message,
    errorEditInfo: state.editInfoUserReducer.error,
    //======================================
    statusAvt: state.editAvatarReducer.status,
    dataAvt: state.editAvatarReducer.data,
    loadingAvtr: state.editAvatarReducer.loading,
    messageAvt: state.editAvatarReducer.message,
    errorAvt: state.editAvatarReducer.error,
    //=======================================
    statusUser: state.infoUserReducer.status,
    dataUser: state.infoUserReducer.data,
    loadingUser: state.infoUserReducer.loading,
    messageUser: state.infoUserReducer.message,
    errorUser: state.infoUserReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCityAction: (input) => dispatch(getCityAction(input)),
    checkEmailAction: (input) => dispatch(checkEmailAction(input)),
    editInfoUserAction: (input) => dispatch(editInfoUserAction(input)),
    logoutCheckMailAction: (input) => dispatch(logoutCheckMailAction(input)),
    infoUserAction: (input) => dispatch(infoUserAction(input)),
    editAvatarAction: (input) => dispatch(editAvatarAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactHomeContainer);