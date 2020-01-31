import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getUser from '../../store/getUser/action';
import Main from './Main';

class MainContainer extends Component {

    render() {
        const { user, getUser } = this.props;

        return <Main isLoading={user.isLoading} onClickAccountAcess={getUser} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.getUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: bindActionCreators(getUser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);