import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getUser, { GET_USER_SUCCESS } from '../../store/getUser/action';
import getReposStarred, { GET_REPOS_STARRED_SUCCESS } from '../../store/getReposStarred/action';
import getCoordinates, { GET_COORDINATES_SUCCESS } from '../../store/getCoordinates/action';

import Home from '../Home';
import Login from '../Login';


class MainContainer extends Component {
    state = {
        isLogged: false,
        reposStarred: [],
        location: {},
    }

    componentDidUpdate({ reposStarred, user, location }) {
        (() => {
            if (user.type === this.props.user.type) return;
            if (this.props.user.type === GET_USER_SUCCESS) {
                this.setState({ isLogged: true })
                this.props.getReposStarred(this.props.user.payload.login)
                if (this.props.user.payload.location) {
                    this.props.getCoordinates(this.props.user.payload.location)
                }
            }
        })();
        (() => {
            if (reposStarred.type === this.props.reposStarred.type) return;
            if (this.props.reposStarred.type === GET_REPOS_STARRED_SUCCESS) {
                this.setState({ reposStarred: this.props.reposStarred.payload })
            }
        })();
        (() => {
            if (location.type === this.props.location.type) return;
            if (this.props.location.type === GET_COORDINATES_SUCCESS) {
                this.setState({ location: this.props.location.payload.results[0].geometry.location })
            }
        })();
    }

    logout = () => this.setState({
        isLogged: false,
        reposStarred: [],
        location: {},
    })

    render() {
        const { getUser, user, reposStarred } = this.props;
        const isLoadingUser = user.isLoading;
        const isLoadingRepos = reposStarred.isLoading;
        const userInfos = user.payload;

        return (
            <div>
                {
                    this.state.isLogged
                        ? (
                            <Home
                                logout={this.logout}
                                isLoadingRepos={isLoadingRepos}
                                userInfos={userInfos}
                                location={this.state.location}
                                reposStarred={this.state.reposStarred}
                            />
                        )
                        : (
                            <Login
                                isLoadingLogin={isLoadingUser}
                                onClickAccountAcess={getUser}
                            />
                        )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.getUser,
        reposStarred: state.getReposStarred,
        location: state.getCoordinates,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: bindActionCreators(getUser, dispatch),
        getReposStarred: bindActionCreators(getReposStarred, dispatch),
        getCoordinates: bindActionCreators(getCoordinates, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);